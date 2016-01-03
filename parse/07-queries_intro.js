    // Q U E R Y

    // Para retornar um simples Parse.Obejct usamos .get()

    // Existe outras maneiras de se retornar dados da nuvem
    // Retornar vários Parse.Object de uma vez... utilizar condicionais
    // para filtrar os dados... esses são alguns das possibilidades
    // que pode ser feita ao retornar dados da nuvem

    // Para retornar uma lista de Parse.Objects e filtrá-los, utilizamos
    // o seguinte padrão de passos:
    // 1 - Criamos um Parse.Query 
    var query = new Parse.Query(gameScoreInstance);

    // 2 - Colocamos uma condição
    query.equalsTo("playerName", "Di Araújo");

    // 3 - Percorrer o Array[] retornado utilizando o .find()
    query.find({    
        success: function(results) {
        alert("Successfully retrieved " + results.length + " scores.");

        // Ao dar sucesso na busca dos dados, tratamos os 
        // dados retornados à nossa escolha
        for (var i = 0; i < results.length; i++) {
          var object = results[i];
          alert(object.id + ' - ' + object.get('playerName'));
        }
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });

    // Q U E R Y   C O N S T R A I N T S ( CONDICIONAIS )
    // É possível colocar condicionais nos dados que queremos retornar
    // Colocamos as constraints em alguns casos,
    // em relação às "keys" e seu respectivo "value"
    .notEqualsTo (key, value)
    .greaterThan
    // É possível colocar várias constraints de uma vez, restrigindo ainda
    // mais o escopo do resultado
    // ** Limitamos o número de resultados utilizado:
    query.limit(10)
    // ** Você também pode pular n items do array, utilizando:
    query.skip(10)
    // **  Sorts the results in ascending order by the score field
    query.ascending("score");
    // ** Sorts the results in descending order by the score field
    query.descending("score");

    // Para receber lista dos objetos que contenham alguns valores
    // pode-se usar 'containedIn', passando uma lista de valores
    // que esse objeto pode ter :)
    // Exemplo: pegaremos o 'score' de qualquer objeto
    // que possua como 'value', sem sua key 'playerName',
    // Jonathan, Dario, or Shawn
    query.containedIn("playerName",
                      ["Jonathan Walsh", "Dario Wunsch", "Shawn Simon"]);
    // seu oposto é .notContainedIn
    // Caso queira retornar os objetos que tenham um conjunto 
    // particular de "keys", você utilizar .exists
  
    query.exists("score"); // Encontre os objetos que possuam a key 'score'
    query.doesNotExist("score"); // Encontre os objetos que não possuam tal key

    // Para retornar objetos onde a 'KEY' é igual ao valor da 'key'
    // de um OUTRO conjunto de objetos (retornados por outra query)
    // utilizamos .matchesKeyInQuery
    // Exemplo: 
    // 1 - uma classe que contém TIMES
    // 2 - no USER armazenamos sua CIDADE
    // 3 - fazemos uma query que:
    // 3.1 Retorna uma lista de USERS 
    // 3.2 Em que o TIME da sua cidade
    // 3.3 O time tenha ganhado alguma competição
    // A query que utilizamos para isso seria a seguinte:
    var Team = Parse.Object.extend("Team");

    var teamQuery = new Parse.Query(Team);
    teamQuery.greaterThan("winPct", 0.5);

    var userQuery = new Parse.Query(Parse.User);
    userQuery.matchesKeyInQuery("hometown", "city", teamQuery);
    
    userQuery.find({
      success: function(results) {
        // results has the list of users with a hometown team with a winning record
      }
    });


