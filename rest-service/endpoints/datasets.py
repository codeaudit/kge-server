#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# coding:utf-8
#
# datasets.py: Falcon file to manage resources related to datasets
# Copyright (C) 2016  Víctor Fernández Rico <vfrico@gmail.com>
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Lesser General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Lesser General Public License for more details.
#
# You should have received a copy of the GNU Lesser General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.

import json
import copy
import falcon
import kgeserver.server as server
import endpoints.common_hooks as common_hooks

# Import parent directory (data_access)
import sys
sys.path.insert(0, '..')
try:
    import data_access
    import async_server.tasks as async_tasks
except ImportError:
    raise


def read_http_dataset_dto(req, resp, resource, params):
    """Returns a HTTPUserDatasetDTO"""
    try:
        body = common_hooks.read_body_as_json(req)
        params["dataset_info"] = HTTPUserDatasetDTO()

        if "name" in body:
            params["dataset_info"].name = body["name"]
        if "description" in body:
            params["dataset_info"].description = body["description"]
    except KeyError as err:
        raise falcon.HTTPBadRequest(
            title="Invalid params",
            description=("Some of the required params ({}) "
                         "are not present").format(str(err)))


def read_triples_from_body(req, resp, resource, params):
    """Reads a list of triples"""
    try:
        body = common_hooks.read_body_as_json(req)
        params["triples_list"] = []
        for triple in body:
            new_triple = {"subject": {"value": triple["subject"]},
                          "predicate": {"value": triple["predicate"]},
                          "object": {"value": triple["object"]}}
            params["triples_list"].append(new_triple)

    except KeyError as err:
        raise falcon.HTTPInvalidParam(
            msg="Invalid body params",
            param_name=str(err))


def read_vector_from_body(req, resp, resource, params):
    """This returns a list of entities"""
    try:
        body = common_hooks.read_body_as_json(req)

        if not isinstance(body["entities"], list):
            raise falcon.HTTPInvalidParam(
                "The param 'distance' must contain a list", "entities")

        # Redefine variables
        params["entities"] = body["entities"]

    except KeyError as err:
        raise falcon.HTTPMissingParam(str(err))


class HTTPUserDatasetDTO(object):
    def __init__(self):
        self.name = None
        self.description = None

    def load(self, obj):
        self.name = obj.name
        self.description = obj.description


class HTTPUserTripleDTO(object):
    def __init__():
        self.subject = None
        self.predicate = None
        self.object = None


class DatasetResource(object):
    @falcon.before(common_hooks.check_dataset_exsistence)
    def on_get(self, req, resp, dataset_id, dataset_dto):
        """Return a HTTP response with all information about selected dataset

        :param integer dataset_id: Unique ID of dataset
        :param integer dataset_dto: Dataset DTO (from hook)
        :returns: The selected dataset
        :rtype: DatasetDTO
        """
        response = {
            "dataset": dataset_dto.to_dict(),
        }
        resp.body = json.dumps(response)
        resp.content_type = 'application/json'
        resp.status = falcon.HTTP_200

    @falcon.before(common_hooks.check_dataset_exsistence)
    @falcon.before(read_http_dataset_dto)
    def on_put(self, req, resp, dataset_id, **kwargs):
        """Change the description of choosen dataset

        :param HTTPUserDatasetDTO dataset_info: Object with description param
        :param integer dataset_id: Unique ID of dataset
        :returns: The dataset with changed values
        :rtype: DatasetDTO
        """
        dataset_info = HTTPUserDatasetDTO()
        try:
            dataset_info.load(kwargs["dataset_info"])
        except KeyError:
            pass

        dataset_dao = data_access.DatasetDAO()
        if dataset_info.description is not None:
            res, err = dataset_dao.set_description(
                dataset_id, dataset_info.description)
            if res is None:
                raise falcon.HTTPInternalServerError(
                    title="Server Error",
                    description="Unable to process description param")

        resource, err = dataset_dao.get_dataset_by_id(dataset_id)
        response = {
            "dataset": resource.to_dict(),
        }
        resp.body = json.dumps(response)
        resp.content_type = 'application/json'
        resp.status = falcon.HTTP_200

    @falcon.before(common_hooks.check_dataset_exsistence)
    def on_delete(self, req, resp, dataset_id, **kwargs):
        """Delete a dataset from the service

        This method will delete the entry from the datbase and will also
        delete the entire datasets generated by them on filesystem.

        :param integer dataset_id: Unique ID of dataset
        :returns: Nothing if operation was successful
        :rtype: 204 NO CONTENT
        """
        try:
            delete_task = async_tasks.delete_dataset_by_id(dataset_id)
        except LookupError:
            raise falcon.HTTPNotFound(description="Couldn't locate dataset")
        except OSError as err:
            raise falcon.HTTPInternalServerError(description=str(err))
        else:
            resp.status = falcon.HTTP_204


class DatasetFactory(object):

    def on_get(self, req, resp):
        """Return all datasets available on the service

        :query boolean use_cache: False if cache must be reloaded, True if
                                  values returned can be those cached.
        :returns: A list with all datasets
        """
        cache = req.get_param_as_bool("use_cache", blank_as_true=True)

        dao = data_access.DatasetDAO()

        listdts, err = dao.get_all_datasets(use_cache=cache)

        if listdts is None:
            raise falcon.HTTPNotFound(description=str(err))

        response = [{"dataset": dtst.to_dict()} for dtst in listdts]
        resp.body = json.dumps(response)
        resp.content_type = 'application/json'
        resp.status = falcon.HTTP_200

    @falcon.before(read_http_dataset_dto)
    def on_post(self, req, resp, dataset_info, **kwargs):
        """Create a new dataset on the service

        This method will create a new empty dataset, and returns a 201 CREATED
        with Location header filled with the URI of new dataset.

        :param HTTPUserDatasetDTO dataset_info: HTTP Client dataset information
        :query int dataset_type: The dataset type (optional)
        :returns: Location header with new path to dataset object
        """
        dao = data_access.DatasetDAO()
        # Get dataset type
        dts_type = req.get_param_as_int("dataset_type")

        dataset_type = dao.get_dataset_types()[dts_type]["class"]
        id_dts, err = dao.insert_empty_dataset(
            dataset_type, name=dataset_info.name,
            description=dataset_info.description)

        if id_dts is None and err[0] == 409:
            raise falcon.HTTPConflict(
                title="The dataset name is already used", description=err[1])
        elif id_dts is None and err[0] == 500:
            raise falcon.HTTPInternalServerError(description=err[1])
        else:
            # Dataset created, evrything is done
            resp.status = falcon.HTTP_201
            resp.body = json.dumps({"dataset": {"id": id_dts}})
            resp.location = "/datasets/" + str(id_dts)


class EmbeddingResource():

    @falcon.before(read_vector_from_body)
    @falcon.before(common_hooks.check_dataset_exsistence)
    def on_post(self, req, resp, dataset_id, dataset_dto, entities):
        """Get the embedding given an entity or a list of entities (URI)

        {"entities": ["Q1492", "Q2807", "Q1"]}

        :param integer dataset_id: Unique ID of dataset
        :param integer dataset_dto: Dataset DTO (from hook)
        :param list entities: List of entities to get embeddings (from hook)
        :returns: A list of list with entities and its embeddings
        :rtype: list
        """

        istrained = dataset_dto.is_trained()
        if istrained is None or not istrained:
            raise falcon.HTTPConflict(
                title="Dataset has not a valid state",
                description="Dataset {} has a {} state".format(
                    dataset_id, dataset_dto.status))

        try:
            result = async_tasks.find_embeddings_on_model(dataset_id, entities)
        except OSError as err:
            filerr = err.filename
            raise falcon.HTTPNotFound(
                title="The file on database couldn't be located",
                description=("A file ({}) has been found on database, but it "
                             "does not exist on filesystem").format(filerr))

        textbody = {"embeddings": result}
        resp.body = json.dumps(textbody)
        resp.status = falcon.HTTP_200


class TriplesResource():
    @falcon.before(common_hooks.check_dataset_exsistence)
    @falcon.before(read_triples_from_body)
    def on_post(self, req, resp, dataset_id, dataset_dto, triples_list):
        """Receives HTTP Request to add triples into the dataset

        This will expect an input on the body similar to this

        .. sourcecode:: json

            [
                {   "subject": "Q1492",
                    "predicate": "P17",
                    "object": "Q29" },
                {   "subject": "Q90",
                    "predicate": "P17",
                    "object": "Q142"},
                {   "subject": "Q2807",
                    "predicate": "P17",
                    "object": "Q29"}
            ]

        :param integer dataset_id: Unique ID of dataset
        :param integer dataset_dto: Dataset DTO (from hook)
        :param list triples_list: List of triples to insert (from hook)
        :returns: If operation was successful.
        :rtype: 202 NO CONTENT
        """
        dataset_dao = data_access.DatasetDAO()
        res, err = dataset_dao.insert_triples(dataset_dto, triples_list)
        if res is None:
            raise falcon.HTTPBadRequest(description=str(err))

        textbody = {"status": 202, "message": "Resources created successfuly"}
        resp.body = json.dumps(textbody)
        resp.content_type = 'application/json'
        resp.status = falcon.HTTP_202
