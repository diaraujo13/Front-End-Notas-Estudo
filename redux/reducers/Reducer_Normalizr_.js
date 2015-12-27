// Reducer são a única maneira de atualizar o state/estado da aplicação.
// Assuntos relacionados: funções puras, programação funcional, object mutation
// Recebe de entrada o STATE atual da aplicação e uma AÇÃO a ser realizada = novo STATE aplicação
// Não se deve altera o 'previous state' da aplicação, pois dessa forma não poderá ser possível
// fazer operações de 'desfazer/refazer', que voltam a aplicação a um state anterior

// Exportando a função - Modularização 
// Analisando os argumentos
// 1 - Utilizando uma característica do ES6, definimos um state inicial,
// padrão, para a nossa Store (armazena os states)
// 2 - A ação, que é um OBJETO, a ser executada
export default function friends(state = initialState, action) {  
  
  // Analisando o atributo <type> do objeto referenciado pela variável <action>
  switch (action.type) {

    case types.ADD_FRIEND:
      const newId = state.friends[state.friends.length-1] + 1;
      return {
        friends: state.friends.concat(newId), // Retornamos os existentes e concatenamos o 'newId' ao final
        friendsById: {							
          ...state.friendsById,			//Aqui retornamos todos os itens já existentes e colamos o 			
          [newId]: {					// novo item aqui	
            id: newId,						
		  name: action.name				
          }
        }
		// Retornamos a tree state COMPLETA + o item adicionado através da action
		
		
      }

    default:
      
	  return state;	
	  // Retorna o estado da aplicação padrão pois ao se criar uma Store ela passa por padrão
	  // , ao reducer, um valor undefined, que serve para visualização da state tree da nossa
	  // aplicação
  }
}


// State Tree
const initialState = {  

  friends: [1, 2, 3],
  
  
  friendsById: {
    1: {
      id: 1,
      name: 'Theodore Roosevelt'
    },
    2: {
      id: 2,
      name: 'Abraham Lincoln'
    },
    3: {
      id: 3,
      name: 'George Washington'
    }
  }
};
