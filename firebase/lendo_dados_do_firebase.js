
    // .on() serve para escutar mudanças em uma localização do banco de dados
    // ** 1 argumento -> tipo de evento que será escutado
    // ** 2 argumento -> função callback que será executada para os dados iniciais (já existentes)
    // e toda vez que o dado for adicionado/alterado/removido (quem determinará isso será o primeiro argumento!)
    // .off( ) faz parar de receber atualizações
    /*
      Tipos de eventos:
        - "value" = ativado uma vez para o dado inicial armazenado no link,
          e cada vez que os dados mudarem. Ele retorna TODO O CONTEÚDO do link!

        - "child_added" = cada vez que for adicionado um 'child' à localização!
          Retorna, para a função callback, cada FILHO DO LINK!
        - "child_removed" = toda vez que for removido um 'child'
        -  "child_changed" = """


    */
