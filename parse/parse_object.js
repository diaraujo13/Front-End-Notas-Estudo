//Parse v1.6
//
// 
// Para criar uma subclasse de Parse.Object utilizamos o seguinte
//
var GameScore = Parse.Object.extend("GameScore")
//
//Esse nome passado como string servirá como identificador
//Parse.Query irá retornar instâncias dessa subclasse toda vez
//que for passado um objeto (Parse.Object) com mesmo nome

var gameScore = new GameScore(); // Criando uma nova instância da classe que extende Parse.Object

//Como a classe filha é ainda, uma classe, e extende as funcionalidades de Parse.Object
//ou seja, adiciona o conteúdo preexistente em Parse.Object no seu escopo
//podemos adicionar métodos e atributos para a classe filha (Óbvio!)



var Monster = Parse.Object.extend("Monster", {
  
  //Métodos são definidos ao estilo JSON
  hasSuperHumanStrength: function () {
    return this.get("strength") > 18;
  },
  
  initialize: function (attrs, options) {
    this.sound = "Rawr"
  }
}, {
  
  spawn: function(strength) {
    var monster = new Monster();
    monster.set("strength", strength);
    return monster;
  }
});

var monster = Monster.spawn(200);
alert(monster.get('strength'));  
alert(monster.sound); 


//Instanciar a classe Parse.Object
new Parse.Object()

//Versão com ES6
