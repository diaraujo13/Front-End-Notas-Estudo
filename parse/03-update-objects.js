//Atualizando objetos


// 1 - Dentro do método .save do respectivo objeto
// 2 - 'set' os dados dentro 'success' do método .save
// 3 - Chamar o método .save dentro do 'success'

var GameScore = Parse.Object.extend("GameScore");
var gameScore = new GameScore();

gameScore.set("score", 1337);
gameScore.set("playerName", "Sean Plott");
gameScore.set("cheatMode", false);
gameScore.set("skills", ["pwnage", "flying"]);

gameScore.save(null, {

  //Como apenas uma parte do objeto será atualizada,
  // passamos no callback 'success' os novos valores
  success: function(gameScore) {
    
    
    gameScore.set("cheatMode", true);
    gameScore.set("score", 1338);
    //Chamar o método save!
    gameScore.save();
  }
});

/*
    Exemplo:
    Contador
      ~ Precisa ser atualizado constantemente com o último 'scorePlayer'
*/

//PARSE contém métodos para manipular números, que minimizam o código para atualização
// Para incrementar o valor de uma propriedade, fazemos:
gameScore.increment("score"); // um 2ª argumento indica o número do incremento
gameScore.save();

// ARRAYS
// 3 tipos de operações que podem ser utilizadas para 
// um array que está associado à uma chave (key) no objeto

.append() // anexa o objeto no fim do array
.addUnique()  // adiciona somente se não houver nenhum outro objeto]
.remove     // remove todas as instâncias de um objeto no array

// Em cada uma dessas operações é necessário chamar o save()
// não podendo acumular mais uma operação por chamada de save()

//Exemplo
gameScore.addUnique("skills", "flying");
gameScore.addUnique("skills", "kungfu");


gameScore.save();

