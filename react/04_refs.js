// refs são altamente úteis quando você precisa:
// 1- encontrar um elemento DOM que foi gerado por um componente
// 
// React suporta um atributo que pode ser anexado a qualquer componente
// Utiliza-se no retorno do método render()
// `ref` pode ser:
// #1 callback function,  Essa função será executada assim que o componente for montado
//                        sendo o componente passado como argumento

  render: function() {
    return <TextInput ref={(c) => this._input = c} />;
  },
  componentDidMount: function() {
    this._input.focus();
  },

// Quando anexando um 'ref' a um componente como <div/>, você receberá o nó DOM de volta
// Quando anexando em um <Componente />, você receberá uma instância da classe React

// #2 String
// - Anexar o atributo ref à qualquer coisa que é retornada no render()
// - Em outro código (tipicamente um event handler), acessar a instância
// via this.refs
var input = this.refs.myInput;		// this.refs
var inputValue = input.value;
var inputRect = input.getBoundingClientRect();


