// Q U E R I E S - 2
// A R R A Y S 

// Caso a chave no objeto possua um array, podemos
// adicionar algumas condições para extrair dele um subconjunto
// previsível

query.equalsTo("key_value", 2)
// Verifica se algum elemento do ARRAY associado à CHAVE, possui o valor
// do segundo argumento e então adiciona à lista de resultados
// retornados pela query.
// Pode-se passar um array de valores a serem verificados no
// segundo argumento :)

//--------------------------------------------
// Relational Queries

// 1ª Caso
// Retornar todos os objetos que possuam, em uma chave
// o valor de um objeto particular
// Para isso basta utilizar .equalsTo

var poster = Parse.Object.extend("poster");
var myPost = new poster();

var query = new Parse.Query(Comment);

query.equalTo("post", myPost);

query.find({
  success: function(comments) {
    // comments now contains the comments for myPost
  }
});

// TO BE CONTINUED...

