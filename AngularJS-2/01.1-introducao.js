// 🐉 Angular 2

// 🔽 Componentes
// - CSS rules são globais
// - Angular2 utiliza Web Components, com isso temos encapsulamento, criamos um componente sem se preocupar com outros. 
// - Uma árvore de componentes:
// -- O evento ocorre e percorre todo um galho. Exemplo:
            
//            App

// PetList        PeopleList
// Pet  Pet        People     People


// Caso um People seja clicado o evento tomará a direção até App, enquanto o dado irá até People no caminho contrário.

// ➡ Assim o dado segue um fluxo unidirecional, do topo para suas ratificações.

// ➡ TypeScript - é versão de JavaScript tipada :)
// ➡ Vantagem: 
// - fácil visualização o fluxo de dado
// - Es6 funcionando em antigos navegadores
// - IntelliSense auto suggest

// ➡ O tipo da variável é passado após o nome da variável, separados apenas por dois-pontos

📟 var name:string = "Annie"

// Classes
// Definição de public/private
// Métodos podem retornar valores

// Interfaces
// Um contrato que a classe precisa implementar o que estiver dentro da interfave

// Modules

import { className } from './person'

export class className 

// Component
// 1. Cria-se uma classe 
// 2. Importa-se Component
// 3. @Component{ } metadata - dados que são passados para determinar que tal classe é uma Component.
// Component faz com que possamos indicar onde nosso componente será utilizado. A classe serve para adicionar a funcionalidade à esse componente.

// ◼ Component
// person
// ◼ Usando a propriedade selector conseguimos utilizar como se fosse uma tag
// <person>

@View ({}) 
// Passamos um objeto que terá uma propriedade 'templates'  indicando o template do Component. Ou 'styles' propriedade.
// Como os dados são passados do topo para baixo, podrmos passar um valor para um componente filho utilizando um [] na tag do component.
// Interações do usuário irão disparar um evento, tais eventos são indicados entre parenteses

<eyes [color]="brown" (blink)="mudar()" />

// Envents flow up! �
// Dados flow down! 
// Fluxo de dados do AngularJS2 
// http://40.media.tumblr.com/8d2360fe8f3f0c66b20cb5dcc45856ce/tumblr_nnzn556v7F1qc0howo3_1280.png

// Componentes podem manipular eventos de seus filhos.
// Exemplo: Caso o componente Eye dispare um evento do tipo (blink), o método do componente pai será chamado (passado no argumento do evento do filho e sendo definida dentro da classe). O componente filho envia os dados do evento para cima, para ser manipulado pelo componente pai :)

// 🔷 Indo do Componente Raiz para seu Filho,  já passamos um valor e tratamos um evento. Como definir isso no Componente Filho?
// 🔸🔸 No metadata @Component, passamos as seguintes propriedades

properties: ['color'],
events: ['blink']

// 🔷 Como, partindo do Filho, enviamos o evento ao pai?
// 🔸🔸 blink(valor_a_ser_passado)
