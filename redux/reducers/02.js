var reducer = (state, action) => {
		
		switch(action.type){
			case 'ADD_PRODUCT':
				// Para evitar mutation do objeto, utiliza-se: Object.assign() ou Spread
				// This way you don’t override the previous state!
				// Não sobreescrevendo o estado anterior você permite operações de'undo' e 'redo'
				// --------------------------------------------------------------------------
				// 1 - Argumentos da direita são os objetos cuja propriedades serão copiadas para 
				// objeto presente como primeiro argumento (sofrerá mutation).
				// 2 - Caso, ao adicionar vários objetos, alguns possuerem os mesmos nomes de atributos
				// o último objeto adicionado será o que terá o valor de seu atributo copiado
				// 3 - Retornar-se, assim, um novo objeto
				// 4 - Esse método é parte do ES6
				return Object.assign({}, state.concat(action.product);
				
			default:
			// Inicialmente a store irá enviar um state com 'undefined' para testar
			// e tomar conhecimento da estrutura do STATE da aplicação
			// logo, é preciso que seja retornado o state caso, nenhuma ação, 'conhecida'
			// pelo programador, for tomada
				return state;
		}
}
