// Tipos de dados 'primitivos' aceitos pelo parse
// String, Number, Parse.Object, Date, null

// Para criar novos tipos de dados, basta aninhar objetos e arrays 
// dentro de um objeto
// para criar novas estruturas de dados


// Parse.Object não deve exceder um tamanho de 128Kb
// Para armazenar arquivo de tamanhos maiores
// utilize Parse.File()

var number = 42;
var string = "the number is " + number;
var date = new Date();
var array = [string, number];
var object = { number: number, string: string };

var BigObject = Parse.Object.extend("BigObject");
  var bigObject = new BigObject();
      bigObject.set("myNumber", number);
      bigObject.set("myString", string);
      bigObject.set("myDate", date);
      bigObject.set("myArray", array);
      bigObject.set("myObject", object);
      bigObject.set("myNull", null);
bigObject.save();
