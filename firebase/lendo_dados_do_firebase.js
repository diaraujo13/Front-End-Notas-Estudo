
    // Firebase.on() serve para escutar mudanças em uma localização do banco de dados
    // e, basicamente, recebe dois argumentos:
    // ** 1ª argumento -> tipo de evento que desejamos escutar. Assim que tal evento ocorrer
    // a função callback será executada :)
    // ** 2ª argumento -> função callback que será executada para os dados iniciais (já existentes)
    // e toda vez que o dado for adicionado/alterado/removido (quem determinará isso será o primeiro argumento!)
    // .off( ) faz parar de receber atualizações
    
    /*
      Tipos de eventos:
        • "value" 
        |--- chamará o callback para todos os dados iniciais e para toda vez que 
        |--- os dados mudarem.
        |--- Quando chama o callback ele envia TODO O CONTEÚDO da localização como argumento
        • "child_added"  
        |--- cada vez que for adicionado um 'child' à localização!
        |--- Envia, para a função callback, cada FILHO DO LINK que foi adicionado/inicial.
        |--- Para acessar as propriedades de cada 'child', utilize .val() para pegar uma referência
        |--- ao objeto.
        • "child_removed" = toda vez que for removido um 'child'
        • "child_changed" = cada vez que 'child' sofrer um update
    */

var ref = new Firebase("https://docs-examples.firebaseio.com/web/saving-data/fireblog/posts");
var count = 0;
ref.on("child_added", function(snap) {
  count++;
  console.log("added", snap.key());
});
ref.once("value", function(snap) {
  console.log("initial data loaded!", Object.keys(snap.val()).length === count);
});


// Query
// Com Firebase Database Queries nós podemos retornar somente dados que queremos com base
// em alguns fatores:
// |- Como desejamos ordenar nossos resultados?
// |-- orderByChild     ()
// |-- orderByKey       ()
// |-- orderByValue     ()
// |-- orderByPriority  ()
// |- Podemos combinar com isso ainda mais outros métodos de "organização do resultado":
// |-- limitToFirst     ()
// |-- limitToLast      ()
// |-- startAt          ()
// |-- endAt            ()
// |-- equalTo          ()

{
  "lambeosaurus": {
    "dimensions": {
      "height" : 2.1,
      "length" : 12.5,
      "weight": 5000
    }
  },
  "stegosaurus": {
    "dimensions": {
      "height" : 4,
      "length" : 9,
      "weight" : 2500
    }
  }
}

var ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
// Ordenado como keys em comum, no caso de key aninhada utilizamos um caminho até a key,
// ao invés de simplemente o nome da key
ref.orderByChild("dimensions/height").on("child_added", function(snapshot) {
  console.log(snapshot.key() + " was " + snapshot.val().height + " meters tall");
});
// OUTPUT:
/*
    linhenykus was 0.6 meters tall
    pterodactyl was 0.6 meters tall
    lambeosaurus was 2.1 meters tall
    triceratops was 3 meters tall
    stegosaurus was 4 meters tall
    bruhathkayosaurus was 25 meters tall
*/

