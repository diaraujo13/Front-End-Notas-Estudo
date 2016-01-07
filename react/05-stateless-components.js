/*
Na maioria das vezes você estará criando componentes sem state (stateless) 
simplesmente juntando-se com outros componentes. Para esses casos há uma sintaxe especial, onde:

× seu componente é declarado como uma FUNCTION
× você pode tomar 'props' como ARGUMENTO
× no RETURN você retorna o elemento que você quer renderizar (como se fosse o render())

Resumindo…
× Functions são tratados como Componentes
× Arrow Function e ES5 Functions são suportados igualmente

*/

function Componente(prop){
    return (<h1> {prop.msg} </h1>);
}
	
//Arrow Function
// 1 Caso
// Usado quando seu return cabe em uma linha
// Nesse caso não precisa utilizar o 'return' nem utilizar delimitador de escopo
(props) => <tag> Hey </tag>

// Utiliza-se o return quando há lógica fora do JSX
