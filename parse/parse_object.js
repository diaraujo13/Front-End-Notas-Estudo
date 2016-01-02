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
      class Monster extends Parse.Object {
        //Construtor padrão da classe
        //Chamado toda vez que a classe é instanciada
        constructor() {
          
          super('Monster');
          
          this.sound = 'Rawr';
        }

        hasSuperHumanStrength() {
          return this.get('strength') > 18;
        }

        // static
        //Metodo fica disponivel na memória para todas as instâncias
        static spawn(strength) {
          var monster = new Monster();
          monster.set('strength', strength);
          return monster;
        }
      }
//Com o uso de 'extends', o SDK não fica avisado da sua subclasse automaticamente
//É preciso registrar a classe

    Parse.Object.registerSubclass('Monster', Monster);
//Assim, os objetos retornados das queries usarão a sua subclasse

//2
//Salvando Objetos
//EXEMPLO: Salvar o objeto GameScore na Parse Cloud

//1 - Isso tudo ainda é uma classe! Necessita ser instanciada
//em uma variável e se transformar em objeto
//2 - Assim o objeto é executado
//3 - GameScore já se torna uma 'classe' e herda de Parse.Object
//porque o Parse o cria automaticamente
//You didn't have to configure or set up a new Class called GameScore before running this code
var GameScore = Parse.Object.extend("GameScore");
var gameScore = new GameScore();

gameScore.set("score", 1337);
gameScore.set("playerName", "Sean Plott");
gameScore.set("cheatMode", false);

gameScore.save(null, {
  success: function(gameScore) {
    
    alert('New object created with objectId: ' + gameScore.id);
  },
  error: function(gameScore, error) {
    
    
    alert('Failed to create new object, with error code: ' + error.message);
  }
});

// cada objeto salvo na nuvem recebe um 'objectId' AUTOMATICAMENTE
// createdAt, updateAt indica o tempo, são anexados AUTOMATICAMENTE
// São gerados durante o envio, ou seja, não pertencem à Parse.Object

// Enviando os atributos diretamente durante o .save

gameScore.save({
    score: 1337,
    playerName: "Sean Plott",
    cheatMode: false
},{succes:{...}, error:{...}}); 

