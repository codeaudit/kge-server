Search.setIndex({docnames:["architecture","index","modules/algorithm","modules/dataset","modules/modules","modules/restservice","modules/server"],envversion:51,filenames:["architecture.rst","index.rst","modules/algorithm.rst","modules/dataset.rst","modules/modules.rst","modules/restservice.rst","modules/server.rst"],objects:{"":{"/algorithms/":[5,1,1,"post--algorithms-"],"/algorithms/(int:algorithm_id)":[5,0,1,"get--algorithms-(int-algorithm_id)"],"/datasets/":[5,0,1,"get--datasets-"],"/datasets/(int:dataset_id)":[5,2,1,"put--datasets-(int-dataset_id)"],"/datasets/(int:dataset_id)/":[5,0,1,"get--datasets-(int-dataset_id)-"],"/datasets/(int:dataset_id)/distance":[5,1,1,"post--datasets-(int-dataset_id)-distance"],"/datasets/(int:dataset_id)/embeddings":[5,1,1,"post--datasets-(int-dataset_id)-embeddings"],"/datasets/(int:dataset_id)/generate_triples":[5,1,1,"post--datasets-(int-dataset_id)-generate_triples"],"/datasets/(int:dataset_id)/similar_entities/(string:entity)?limit=(int:limit)?search_k=(int:search_k)":[5,0,1,"get--datasets-(int-dataset_id)-similar_entities-(string-entity)?limit=(int-limit)?search_k=(int-search_k)"],"/datasets/(int:dataset_id)/similar_entities?limit=(int:limit)?search_k=(int:search_k)":[5,1,1,"post--datasets-(int-dataset_id)-similar_entities?limit=(int-limit)?search_k=(int-search_k)"],"/datasets/(int:dataset_id)/train?algorithm=(int:id_algorithm)":[5,1,1,"post--datasets-(int-dataset_id)-train?algorithm=(int-id_algorithm)"],"/datasets/(int:dataset_id)/triples":[5,1,1,"post--datasets-(int-dataset_id)-triples"],"/datasets?dataset_type=(int:dataset_type)":[5,1,1,"post--datasets?dataset_type=(int-dataset_type)"],"/tasks/(int:task_id)?get_debug_info=(boolean:get_debug_info)&amp;?no_redirect=(boolean:no_redirect)":[5,0,1,"get--tasks-(int-task_id)?get_debug_info=(boolean-get_debug_info)&?no_redirect=(boolean-no_redirect)"]},"kgeserver.algorithm":{Algorithm:[2,4,1,""],ModelTrainer:[2,4,1,""]},"kgeserver.algorithm.Algorithm":{find_best:[2,5,1,""]},"kgeserver.dataset":{Dataset:[3,4,1,""]},"kgeserver.dataset.Dataset":{__init__:[3,5,1,""],__weakref__:[3,6,1,""],_load_elements_into_dict:[3,5,1,""],_process_entity:[3,5,1,""],add_element:[3,5,1,""],add_triple:[3,5,1,""],build_levels:[3,5,1,""],build_n_levels_query:[3,5,1,""],check_entity:[3,5,1,""],check_relation:[3,5,1,""],control_thread:[3,5,1,""],execute_query:[3,5,1,""],exist_element:[3,5,1,""],get_entity:[3,5,1,""],get_entity_id:[3,5,1,""],get_relation:[3,5,1,""],get_relation_id:[3,5,1,""],get_status:[3,5,1,""],improved_split:[3,5,1,""],load_dataset_from_csv:[3,5,1,""],load_dataset_from_json:[3,5,1,""],load_dataset_from_nlevels:[3,5,1,""],load_dataset_from_query:[3,5,1,""],load_dataset_recurrently:[3,5,1,""],load_entire_dataset:[3,5,1,""],load_from_binary:[3,5,1,""],load_from_graph_pattern:[3,5,1,""],process_entity:[3,5,1,""],save_to_binary:[3,5,1,""],show:[3,5,1,""],train_split:[3,5,1,""]},"kgeserver.dbpedia_dataset":{ESDBpediaDataset:[3,4,1,""]},"kgeserver.dbpedia_dataset.ESDBpediaDataset":{__init__:[3,5,1,""],_process_entity:[3,5,1,""],load_from_graph_pattern:[3,5,1,""]},"kgeserver.experiment":{Experiment:[2,4,1,""]},"kgeserver.experiment.Experiment":{ranking_callback:[2,5,1,""],run:[2,5,1,""],save_trained_model:[2,5,1,""],thread_start:[2,5,1,""],train:[2,5,1,""]},"kgeserver.server":{SearchIndex:[6,4,1,""],Server:[6,4,1,""]},"kgeserver.server.SearchIndex":{build_from_trained_model:[6,5,1,""],load_from_file:[6,5,1,""],save_to_binary:[6,5,1,""]},"kgeserver.server.Server":{distance_between_entities:[6,5,1,""],similarity_by_embedding:[6,5,1,""],similarity_by_id:[6,5,1,""],similarity_by_vector:[6,5,1,""]},"kgeserver.wikidata_dataset":{WikidataDataset:[3,4,1,""]},"kgeserver.wikidata_dataset.WikidataDataset":{__init__:[3,5,1,""],_process_entity:[3,5,1,""],check_entity:[3,5,1,""],check_relation:[3,5,1,""],extract_entity:[3,5,1,""],extract_from_statement:[3,5,1,""],get_entity:[3,5,1,""],get_entity_id:[3,5,1,""],get_relation:[3,5,1,""],get_relation_id:[3,5,1,""],get_seed_vector:[3,5,1,""],is_statement:[3,5,1,""],load_from_graph_pattern:[3,5,1,""]},kgeserver:{algorithm:[2,3,0,"-"],dataset:[3,3,0,"-"],dbpedia_dataset:[3,3,0,"-"],experiment:[2,3,0,"-"],server:[6,3,0,"-"],wikidata_dataset:[3,3,0,"-"]}},objnames:{"0":["http","get","HTTP get"],"1":["http","post","HTTP post"],"2":["http","put","HTTP put"],"3":["py","module","Python module"],"4":["py","class","Python class"],"5":["py","method","Python method"],"6":["py","attribute","Python attribute"]},objtypes:{"0":"http:get","1":"http:post","2":"http:put","3":"py:module","4":"py:class","5":"py:method","6":"py:attribute"},terms:{"aqu\u00ed":5,"boolean":[3,5,6],"case":0,"categor\u00eda":3,"char":3,"class":4,"dar\u00e1":5,"default":[3,5],"detallar\u00e1n":5,"espa\u00f1a":1,"est\u00e1":5,"export":3,"float":[3,6],"function":3,"implementaci\u00f3n":5,"import":3,"int":[3,5,6],"long":3,"m\u00e1s":5,"new":[0,1,3,5],"null":5,"return":[2,3,5,6],"true":[3,5],"try":[2,3,5],"while":0,And:1,But:[0,1],For:[5,6],NOT:3,Not:5,One:6,The:[0,1,2,3,5,6],Then:1,There:1,These:5,Use:3,Used:2,Using:0,Will:3,With:[1,5],__class__:3,__init__:3,__weakref__:3,_load_elements_into_dict:3,_process_ent:3,_time:3,abl:[1,3],about:[1,3,5],abov:1,absolut:5,accept:[0,3,5],action:5,actual:5,add:[3,5],add_el:3,add_tripl:[3,5],added:[3,5],adding:[1,3],addit:5,addition:[3,5],advis:5,afs:2,after:[1,2,3],again:3,algebra:1,algorithm:[1,3,4],algorithm_id:5,all:[0,1,2,3,5,6],allow:[0,1,3,5],almost:1,alon:1,alreadi:5,also:[0,1,3,5],alwai:0,anaconda:1,analyz:3,ani:[0,1,3,5],anoth:1,api:[0,1],append:3,append_queu:3,applic:3,approach:3,architectur:1,area:1,argument:[0,3,5],arrai:[1,6],assum:3,async:5,asynchron:5,asyncron:[0,5],attempt:3,automat:0,auxiliar:3,avail:[0,1,5],avoid:[0,3,5],award:5,background:0,base:[0,1,2,3],bash:1,basic:[2,3],basicali:3,batch:3,batch_siz:[3,5],becaus:[3,5],been:[0,1,5],being:[0,3,5],below:5,best:2,bestrank:3,better:3,between:[3,5,6],biblioteca:1,big:[3,5],bigger:5,bin:1,binari:4,bind:3,bit:3,bne:[1,3],bnode:3,bodi:5,bool:3,both:[0,1,5],broad:1,build:[1,3],build_from_trained_model:6,build_level:3,build_n_levels_queri:3,built:[0,1],cach:1,call:[0,3],callback:[2,3],can:[0,1,2,3,5,6],cann:3,cannot:5,celeri:0,certain:5,chain:3,chang:[0,1,5],check:[1,3],check_ent:3,check_rel:3,child:3,choos:2,clear:2,client:[1,5],clone:0,close:3,code:[0,3,5],collect:5,column:3,com:2,comma:3,command:0,common:3,commonli:[1,3],compar:6,compat:3,complet:3,complete_list:3,complete_list_dict:3,complex:3,compon:2,compos:[0,1],compound:3,compuesto:5,con:5,concurr:3,conda:1,config:2,configur:2,conflict:5,connect:[0,1,3,5],consruct:3,construct:3,contain:[0,1,2,3,5],continuumio:0,control_thread:3,correct:[3,5],correctli:[3,5],could:[0,5],creat:[0,1,2,3,5,6],creation:1,csv:3,cuanto:5,curl:1,current:[0,3,5],current_step:5,cython:1,daemon:0,dar:5,data:[0,1,3],databas:1,dataset:[1,2,4],dataset_id:5,dataset_typ:5,dato:1,dbpedia:[1,3],dbpedia_dataset:3,dcterm:3,deep:[3,5],defin:3,del:5,delet:5,depend:[0,1],depict:1,deploi:1,deploy:1,deprec:3,depth:[3,6],descript:5,desir:[3,6],desri:3,develop:[0,1],dict:3,dictionari:3,didn:0,differ:[0,2,3,5,6],discov:[1,5],disk:[2,3,6],distanc:[5,6],distance_between_ent:6,distinct:[2,3],distinta:5,distribut:[1,3],divid:3,doc:0,docker:[0,1],docker_compos:0,dockerfil:[0,1],doe:[0,3,5],doing:5,domain:1,don:[1,3],done:5,down:1,download:3,due:[3,5],dump:6,duplic:3,each:[3,5,6],easi:1,easili:[0,3],edit:5,edu:2,ejemplo:5,el_dict:3,el_list:3,element:[3,5,6],emb_siz:6,embed:[2,5,6],embedd:6,embeddig:5,embedding_s:5,empti:5,enabl:3,end:3,endpoint:[1,3],entir:[0,2],entiti:[1,3,5,6],entity_i:6,entity_x:6,entri:3,environ:0,equal:3,error:[5,6],esdbpediadataset:4,ese:5,eval_typ:2,evalu:3,even:[3,5],everi:[1,3],examin:3,exampl:[3,5],except:[0,3],exclud:5,exec:1,execut:[0,3],execute_queri:3,exist:[0,1,3,5],exist_el:3,expect:5,experi:[3,4],experienc:1,explor:3,expos:0,ext_callback:3,extra:[1,3,6],extra_param:3,extract:[3,5],extract_ent:3,extract_from_stat:3,fact:1,fals:[2,3],favourit:5,featur:3,file:[0,1,2,3,6],file_read:3,filepath:[2,3,6],fill:[3,5],film:5,filter:3,fin:2,find:[2,3,5,6],find_best:2,finish:5,first:[3,5,6],focu:3,folder:[0,1],follow:3,format:[3,5],found:[2,3,5],fout:2,framework:0,free:[0,3],from:[0,1,2,3,5,6],fulli:3,gener:[0,2,3,5,6],generate_tripl:5,get:[0,1,3,5],get_debug_info:5,get_ent:3,get_entity_id:3,get_rel:3,get_relation_id:3,get_seed_vector:3,get_statu:3,getth:1,github:[0,2],give:[5,6],given:[1,2,3,5,6],going:1,good:3,graph:3,graph_pattern:[3,5],greater:5,group:0,grow:[1,5],gunicorn:0,had:[0,6],half:3,has:[0,1,3,5],have:[0,1,3],head:[1,5],header:[3,5],help:[0,3],helper:3,here:[2,3,6],high:3,hold:0,hole:2,holograph:2,home:0,host:0,how:[1,5],html:0,http:[0,1,2,3,5],http_statu:3,hyperparamet:5,id_algorithm:5,idea:3,identifi:[3,5],illustr:5,imag:1,images_web_1:1,implement:[3,5],importancia:5,improved_split:3,includ:[3,5],increas:5,index:[1,5,6],indic:[3,5],indica:5,info:2,inform:[0,1,3,5],init:2,input:3,insert:3,insid:[0,1,5],instal:0,instanc:2,instantli:0,instead:5,instruct:[1,3],integ:[3,5,6],interest:3,interfac:2,intern:3,internet:3,introduc:5,introduct:4,involv:5,is_stat:3,issu:0,item:[3,6],iter:[3,5],its:[0,3,5],itself:[0,3,5],join:3,json:[3,5],json_or_error:3,jupyt:[0,1],just:[0,1],kei:[0,3],keyword_arg:3,kge:[0,1],kgeserv:[0,2,3,6],know:1,knowledg:3,known:[3,5],kwarg:[2,3],label:[1,3,5],lambda:3,languag:1,larg:5,last:0,latent:2,later:3,latest:0,launch:0,layer:6,lead:0,learn:[0,1,3],least:3,leav:3,length:3,level:[3,5],librari:[0,3],like:[0,1,3],limit:5,limit_:3,line:3,list:[2,3,5,6],listen:1,liter:3,load:[3,6],load_dataset_from_csv:3,load_dataset_from_json:3,load_dataset_from_nlevel:3,load_dataset_from_queri:3,load_dataset_recurr:3,load_entire_dataset:3,load_from_binari:3,load_from_fil:6,load_from_graph_pattern:3,local:3,localhost:1,locat:5,longer:3,look:[1,3],lookup:5,loop:3,los:5,lot:0,low:3,lower:5,machin:[0,1,3],made:[3,5],mai:[0,3],main:[2,3,5],mainli:5,make:[0,1,2,3,5],manag:[3,6],mani:1,margin:[2,5],master:2,matrix:6,max:[3,5],max_epoch:[2,5],max_tri:3,maximilian:2,maximum:5,mayb:1,mean:5,menor:5,messag:5,method:[0,1,4,5,6],middl:1,miniconda3:0,minim:0,minimum:5,mit:2,mnick:2,mode:2,model:[1,2,3,5,6],model_typ:2,modeltrain:2,modifi:[0,2,3,5],modul:1,more:[1,5],most:[1,3,5,6],mount:0,muestra:5,multidimension:1,multipl:3,must:[3,5],n_level:3,nacion:1,name:[3,5],nation:1,nbatch:2,ncomp:2,necessari:3,need:[0,1,3,5],neg:5,new_endpoint:3,next:[3,5],nickel:2,nlevel:3,no_pairwis:2,no_redirect:5,node:3,none:[2,3],normal:1,nose:1,notat:5,note:5,notic:0,nowadai:1,number:[3,5],numpi:[0,1],nunif:2,obj:3,object:[3,5],objectproperti:3,obtain:[3,5],occur:3,old:0,one:[0,2,3,5],onli:[0,1,3,5],only_uri:3,open:[0,1,3],oper:[1,3,5,6],operacion:5,option:5,orchest:0,order:3,org:[1,3,5],origin:3,other:[1,3,5,6],otherwis:5,output:3,overal:0,owl:3,own:0,p17:5,p950:3,packag:0,page:[0,1],pair:6,pairwisestochastictrain:2,panda:1,parallel:3,param:[2,3,5],paramet:[2,3,5,6],parent:3,pars:3,part:5,pass:[0,3],path:[0,3,5,6],pattern:3,perform:[1,3,5,6],permissionerror:0,pickl:3,pip3:1,place:[0,5],port:1,portal:3,possibl:0,post:5,practic:3,preciss:5,pred:3,predic:[3,5],predict:[1,6],prepar:3,prepend:3,present:3,pretti:1,previou:[0,5],principalment:5,print:[2,3],prioridad:5,probabl:5,process:[3,5],process_ent:3,product:0,progress:[0,3,5],project:1,prop:3,provid:[0,1,2,3,5,6],purpos:2,put:5,pwd:0,python3:1,python:[0,1,3],q1492:[3,5],q15090:5,q2807:5,q29:5,q5682:5,qualiti:5,quantiti:3,que:5,quer:3,queri:[1,3,5],queue:0,quickli:1,quit:5,rais:3,random:2,rang:2,rank:2,ranking_callback:2,ratio:3,rdf:1,read:3,readabl:1,readi:[1,2,3],real:5,realli:3,rebuild:[1,3],receiv:3,recognai:[0,1],recommend:1,recurs:3,recurso:5,redi:0,redirect:5,reduc:5,refer:3,reinstal:0,rel:5,relat:[3,5],relationship:1,repositori:[0,1],repres:[1,3],represent:[3,5],request:[0,1,3,5],requir:[0,1,3],reserv:3,resouc:5,resourc:[3,5],respond:0,respons:[3,5],rest:[0,1,3],restrict:3,restructuredtext:0,result:[3,5],retriev:[3,5],right:2,root:[0,3],run:[0,1,2,3],same:[3,5],sampl:5,sampler:2,satisfi:5,save:[2,3,6],save_to_binari:[3,6],save_trained_model:2,scan:3,scikit:[0,1],scipi:[0,1],script:0,sea:5,search:[1,3,5,6],search_index:6,search_k:[5,6],searchindex:4,second:6,section:1,see:[0,1,5],seed:[3,5],seed_vector:3,seek:3,seen:1,select:3,self:3,semant:1,send:5,separ:3,separator_char:3,sequenc:5,server:[3,4,5],servicio:5,set:5,setup:1,setuptool:1,sever:[2,3,5],shape:3,should:3,show:[3,5,6],shown:[1,2,3,5,6],sigmoid:2,similar:[1,3,5,6],similar_ent:5,similarity_by_embed:6,similarity_by_id:6,similarity_by_vector:6,simpl:[0,1,3,5],simpli:1,singl:3,situat:5,size:[0,3,5,6],skge:2,skip:1,sklearn:3,small:5,solut:1,solv:0,some:[0,1,3,5],sourc:[2,3,6],spanish:[1,3],sparql:[1,3,5],sparql_endpoint:3,specif:[1,3],sphinx:0,split:3,splite:3,standalon:0,start:[1,2,3,5],startup:0,state:5,statement:[3,5,6],statu:5,step:[3,5],still:0,storag:0,store:[0,1,3,5],string:[0,3,5,6],structur:3,sub:3,subject:[3,5],subset:3,substract:1,success:[3,5],successful:5,successfuli:5,successfulli:5,sudo:1,support:[5,6],sympi:1,system:[0,1,5],tail:[1,5],take:[0,1,3,5],task:[0,1],task_id:5,test:[2,3],test_al:2,test_sub:3,th_num:2,than:3,thei:[1,3,5],them:[0,1,3],thi:[0,2,3,5,6],thing:1,those:[0,1,3],thread:[2,3],thread_limit:[2,3],thread_start:2,three:[0,3,5],through:[1,3,5],time:[3,5],todo:[3,5],tool:1,topic:3,total:5,total_step:5,train:[1,2,3,5,6],train_al:2,train_split:3,train_sub:3,trained_model:6,trainedmodel:6,trainer:[2,5],trainer_typ:2,trans:2,transeev:2,tree:[2,3,5,6],trenes_de_alta_velocidad:3,tripl:[1,3,6],triplet:3,trn:2,troubl:1,tupl:3,tweak:5,two:[0,5,6],type:[2,3,5,6],uid:[0,1],uniqu:5,untrain:5,updat:5,upper:5,uri:[3,5],use:[0,1,2,3,5,6],used:[3,5,6],useful:[1,3,5],user:[0,1,3,5],uses:[0,5],using:[0,1,3],usual:1,valid:3,valid_sub:3,valor:5,valu:[0,3,5],variabl:[3,5],vector:[3,5,6],verbos:3,veri:[1,3],version:[0,2],vertic:1,volum:0,wai:[1,3],wait:[0,3],want:[1,3,5],wdt:3,weak:3,web:[0,1],well:[3,5],wether:3,when:[1,2,3,5],where:[1,3,5,6],whic:3,which:[0,1,2,3,5,6],whole:1,wich:[1,3],wikibas:3,wikidata:[1,3,5],wikidata_dataset:3,wikidatadataset:[4,5],wikipedia:1,wise:3,with_ev:2,within:3,without:[3,5],won:5,work:[1,3],worker:0,wrapper:3,write:0,written:0,www:5,yml:0,you:[0,1,3,5],your:[0,1]},titles:["Service Architecture","Knowledge Graph Embedding Server&#8217;s documentation","Algorithm module","Dataset module","Modules","REST Service","Server module"],titleterms:{"class":[2,3,6],algorithm:[2,5],architectur:0,binari:3,build:0,content:1,dataset:[3,5],deploy:0,document:[0,1],embed:1,endpoint:5,environ:1,esdbpediadataset:3,execut:1,experi:2,filesystem:0,graph:1,here:1,how:0,imag:0,includ:1,indic:1,instal:1,introduct:[1,3],knowledg:1,librari:1,manag:5,method:[2,3],modul:[2,3,4,6],permiss:0,port:0,predict:5,rest:5,searchindex:6,server:[0,1,6],servic:[0,1,5],support:1,tabl:1,task:5,thi:1,tripl:5,used:0,what:1,wikidatadataset:3}})