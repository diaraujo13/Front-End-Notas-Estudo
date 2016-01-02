// Lendo objetos da nuvem

// Com base em 'objectId' é possível trazer o Parse.Object() que o representa
// utilizando o Parse.Query()

var GameScore = Parse.Object.extend("GameScore");
var query = new Parse.Query(GameScore);

query.get("xWMyZ4YEGZ", {
  success: function(gameScore) {
    
  },
  error: function(object, error) {
    
    
  }
});

//Para pegar os 'values' correspondentes às 'keys', basta usar o .get(key_name)
var score = gameScore.get("score");
var playerName = gameScore.get("playerName");
var cheatMode = gameScore.get("cheatMode");

// .get e .set não se aplicam às 'propriedades especiais' do objeto
var objectId = gameScore.id;
var updatedAt = gameScore.updatedAt;
var createdAt = gameScore.createdAt;

// REFRESH no objeto, caso já o tenha passado um .get anteriormente
myObject.fetch({
  success: function(myObject) {
    
  },
  error: function(myObject, error) {
    
    
  }
});

