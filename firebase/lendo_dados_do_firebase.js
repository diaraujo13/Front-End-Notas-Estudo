
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
        -  "child_changed" = """


    */
