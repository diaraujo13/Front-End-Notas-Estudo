// 1. HTTP

// CouchDB permite conversarmos com o banco de dados diretamente, ou seja,
// comunicação entre aplicativo client-side e o banco de dados ocorre diretamente
// utilizando como meio primário de comunicação o HTTP!

// Apenas REST e HTTP

// Você pode se comunicar com seu BD através do seu navegador! Ou através
// do curl ou um cliente REST como o <POSTMAN>

// 2. SYNC
var localDB = new PouchDB("todos");
var remoteDB = new PouchDB("http://serverip:5984/todos");
 
localDB.sync(remoteDB, {live: true});
// CouchDB foi projetado para permitir fácil sincronização entre
// bancos de dados

// PouchDB cria um BANCO DE DADOS NO SEU navegador, levando CouchDB
// à um outro nível

// ---

// Aprender PouchDB é a mesma coisa que CouchDB, apenas com a implementação
// em estilo JavaScript

// ----

// Instalação

// 1. Instale CouchDB
// 2. Habilite CORS (permite websites utilizar recursos provenientes
// 	de outros domínios)
// 3. Instale PouchDB
	
<script src="//cdn.jsdelivr.net/pouchdb/5.2.0/pouchdb.min.js"></script>

// Trabalhando com banco de dados

// 1. Criando um banco de dados local

var bd =  new PouchDB('NAME_OF_BD');
var bd = new PouchDB('http://localhost:5984/kittens'); // remote BD

// Sendo a estrutura de um COUCHDB DATABASE é
// PROTOCOLO HTTP + URL DA LOCALIZAÇÃO + /NOME_BD

// Para se acessar informações do Banco de dados:

	bd.info()	// retornará um objeto para ser tratado pelo .then
	.then(
		function(ob){
			console.log(ob);
		}
	)

// keys importantes nesse objeto
doc_count 	//número de undeleted documents no banco de dados
db_name 	// nome do bd

// #2 Parte
// Colocando DOCUMENTS nas DATABASE
// PouchDB é um banco de dados NoSQL
// Você armazena unstructured documents 

// SQL concept 	PouchDB concept
// table 			no equivalent
// row 			document
// column 			field/key/property
// primarykey 		primary key (_id) 
// index 			view

// Armazenar um documento*:
// * O documento deve conter um _id para ser acessado posteriormente
bd.put()

 var bd = new PouchDB()
// Para criar uma instância PouchDB passando o nome do banco de dados (ou o endereço remoto 
// do mesmo)

bd.put ({});

// adiciona o document (um object) ao BD, como primeiro argumento, e uma função ds
//callback como segundo argumento, que será executada assim que o método put terminar sua
//operação.

//Query Database - Retornando os dados

bd.allDocs({}, function(err, data){});

//1. Um objeto que irá tratar os documents provenientes da seleção. Uma das propriedades é o
//"descending", que irá ordenar com base no _id
// 2. Callback Function quando o query é completado, recebe (err, doc)
// No caso esse doc.rows é um array com todos os documentos presentes, bastando fazer uma
// interação por suas linhas.
// Para acessar uma propriedade seria com:
doc.rows[1].doc.propriedade
