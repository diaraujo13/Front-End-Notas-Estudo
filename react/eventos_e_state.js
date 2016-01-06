// Eventos ReactJS

// 	React tem implementado eventos que são multi-navegadores e um
// sistema particular de DOM para compatibilidade (entre navegadores)
// e perfomance.
// 
// 1) Todas as propriedades e atributos (incluindo event handlers - 
// como 'onClick', 'onChange', etc...), devem ser escritos em camelCase
// para serem consistentens com a sintaxe JavaScript.
// Exceção à regra: os atributos data-* e aria-* deve ser completamente
// escritas em letras minúsculas.
// 2) O atributo ´style` aceita um OBJETO JAVASCRIPT com propriedades (chave)
// sendo escritas em camelCase e seus valores escritos iguais às do CSS
// Vantagens: mais rapidez e previne buracos no XSS Security 
// 3) Já que "class" e "for" são palavras reservadas no JavaScript
// tais atributos deverão ser substituídos por "className" e "htmlFor"
// 4) Todos os objetos de evento atuam de acordo com a especificação W3C
// 
//
// Os event handlers serão passados todos como objetos do tipo
// Synthetic Event, para garantir a cross-compatibilidade entre navegadores
// Tem o mesmo funcionamento de um navegador normal, sendo que funciona em todos
// os navegadores, pois o React sabe como "bubble" e captura eventos de acordo
// com a W3C SPEC 
// Todo SyntheticEvent possui os mesmos atributos
boolean bubbles
boolean cancelable
DOMEventTarget currentTarget
boolean defaultPrevented
number eventPhase
boolean isTrusted
DOMEvent nativeEvent
void preventDefault()
boolean isDefaultPrevented()
void stopPropagation()
boolean isPropagationStopped()
DOMEventTarget target
number timeStamp
string type

// SyntheticEvent é 'pooled', ou seja, o objeto SyntheticEvent será reutilizado
// e todas suas propriedades ficarão nulas após o callback do evento
// ser chamado!
// Tal comportamento é explicado por razões de perfomance.
// Você não pode acessar o evento de forma assíncrona (deve chamar event.persist caso deseje)
 
// Para a nova versão com ES6 devemos utilizar .bind()
// ao invocar um event handler
export default class Observer extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    /* ... */
  }
  render() {
  	// this.handleClick.bind(this)
      return <button onClick={this.handleClick}>Click</button>
  }
}

// States
// - Quais componentes devem utilizar STATES?
// Os que precisam responder à entrada de dados pelo usuário,
// requisição ao servidor ou passagem de tempo
// A maioria dos componentes não devem utilizar state!
// Um padrão comum é ter vários componentes stateless que apenas renderizam
// dados na tela e ter um componente, que ficará acima de todos,
// que passará os dados tratados para seus children através de props

// O quê armazenar nos  STATES?
// 1. Ele deve conter dado que um event handler(!) pode 
// ALTERAR para poder ATUALIZAR UI
// evento -> event handler -> setState -> UI UPDATE

// O quê não armazenar?
// 1. Dados gerados através de fórmulas. Deixe isso para ser renderizado durante
// o método render()
// 2. React Componentes, eles devem ser construídos no método render()
// 3. Dados dulicados vindo dos props

// Funcionamento do state
// 1. Uma maneira de informar ao React que o dado mudou é através
// de .setState(state, callback)
// 2. This method merges data into this.state
// 3. O componente é renderizado novamente devido à atualização
// 4. Quando o componente termina de ser renderizado a função
// de callback é chamada

// Um array como state
// Basta utilizar o método.map que retorna um novo array 
this.setState(
	{
		list: this.state.list.concat([newObject])
	}
);
