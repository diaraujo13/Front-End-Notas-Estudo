//yanw022n.5j1@20email.eu
/*
    Dados relacionais
*/

// 1:1
// Para se estabelecer um relacionamento de 1 para 1
// basta estabelecer um objeto como "value" de uma "key" de outro
// objeto
// Declare the types.
var Post = Parse.Object.extend("Post");
var Comment = Parse.Object.extend("Comment");

// Create the post
var myPost = new Post();
myPost.set("title", "I'm Hungry");
myPost.set("content", "Where should we go for lunch?");

// Create the comment
var myComment = new Comment();
myComment.set("content", "Let's do Sushirrito.");

// Add the post as a value in the comment
myComment.set("parent", myPost);

// This will save both myPost and myComment
myComment.save();

// O Parse irá salvar os objetos separadamente, para manter consistência,
// fazendo assim um link entre eles
// É possível fazer um "link" entre objetos utilizando seus 'objectId'
var post = new Post();
post.id = "1zEcyElZ80";

myComment.set("parent", post);


//
// 1 para todos
//

// TODOS para TODOS
// Relações desse tipo são modeladas através do Parse.Relation
// Esse funciona igual a armazenar um array de Parse.Object's em uma "key"
// exceto que você não precisa buscar todos os objetos da relação de uma vez
// Parse.Relation permite você tornar escalável seu código ao
// permitir mais objetos a serem adicionados

/* Exemplo:  Vários 'Parse.User' podem ter vários 'Post' associados a eles */
// Imagine que queremos salvar todo os conjunto de 'Post' que o 'User'
// gosta. Nesse caso podemos usar Relation para estabelecer essa relação
// e adicionar/remover os objetos 'Post' como se fossem 'values'
var user = Parse.User.current();
var relation = user.relation("likes");
relation.add(post);   // adiciona o post em si
user.save();

relation.remove(post);  // remove o post
user.save();

// É possível chamar vários .add e .remove antes da chamada
// do .save
// É possível passar um array de objetos no relation.add
relation.add([post1, post2, post3]);
user.save();

// Para pegar uma lista dos 'Post' que um 'User' gosta utilizando
// Parse.Query que é retornado pelo Parse.Relation.query
relation.query().find({
  success: function(list) {
    // list contains the POST that the current USER likes.
  }
});

// Para coletar um subconjunto dos POSTs retornados, poderá adicionar
// restrições com alguns métodos
var query = relation.query();
query.equalTo("title", "I'm Hungry");
query.find({
  success:function(list) {
    // list contains post liked by the current user which have the title "I'm Hungry".
  }
});

// Para propósitos de Query, o Parse.Relation se comporta exatamente
// como um 'array de objetos' (Parse.Object Array)
// Então, qualquer query realizada num array de objetos será possível
// de ser feita numa Parse.Relation

