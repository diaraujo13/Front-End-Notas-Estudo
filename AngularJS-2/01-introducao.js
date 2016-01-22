// 🔻 AngularJS 2 

// Component  podem trabalhar juntos através de Selector

// Routing - switch parts of a page sem precisar do servidor

// :: Services ::
// 🌠 São aglutinados usando-se Dependency Injection - DI.

// 🌠 Podem ser usados para organizar e compartilhar código entre sua aplicação.

// Receberá/tratar os dados e será inserido nos componentes 


// Directives -  classes que serão instanciadas em resposta a uma estrutura particular do DOM.

// ▪ Não requerem uma View.
// ▪ Adicionam comportamento a um elemento DOM
// ▪ Várias directives podem ser utilizadas em um Dom element


// Data binding
// One way
// Two way
// Data Injection em Angular2 - permite injetar dependências em nossos componentes sem precisar saber como foram criados. Movemos a criação da "dependência" um nível a mais!

// 💻 Getting started with Angular2
// 📌 ZoneJS integração com várias libs facilmente
// 📌 In Plnkr config:
// 1. traceur lib (temporariamente)
// 2. systemjs - module loader, system loader
// 3. config.js - para converter o ts para js
// 3. angular2.js 
// (TypeScript converte para JS no fim das contas)

// 🔭 Binding para qualquer variável presente em nossa classe. Dessa maneira o elemento se torna um Observable, pois qualquer mudança em seu valor acarretará na sua renderização.
// {{ variavel }}

// Com Ng2 temos mais acesso ao DOM 

// 😛 Component é a classe em si! 
// Recebe oa dados via SERVICE
// Envia os dados para VIEW
// Para fazer a classe um Component é preciso usar Annotation @Component (vindo do angular2/angular2) passando um objeto com algumas propriedades.
// Algumas propriedades:

// × selector
// × template
// × style
// × templateUrl
// × styleUrl

// Dentro do template, continua o *ng-for:

*ng-for="#todo of todos"

// todo se torna uma variável representando cada. 

// Event Handlers são implementados como métodos da classe :)

// 🔽Directives
// ""Uma extensão do html"" para construir seu template no lado cliente. Exemplos: ng-For, ng-Switch... 

// 🔽  DI - Vantagem: Test automation é a motivação 💃
// Dar um objeto em tempo de execução em testing, pois durante testes, a parte do código a ser testada é mantida em isolamento. 

// Singleton Object (uma único instância em todo o App), e essa instância mantém uma informação, state, que você irá querer passar . Então, você não deseja que todo mundo possa criar uma instância dessa classe.


// 📌 Classe recebe dados do Model via getters/setters. O Model se comunica com services e pode ser compartilhado entre vários componentes. 

// ➡  Observables são ótimos para stream de dados, ainda mais em real time apps. Dados vindos do Firebase são inseridos diretamente no Observable

// Pipe facilita o envio de fluxo de dados direto para o seu template.

// Change detection - Component level

// 🎇 Publicar seu App Firebase online!
//  Instale firebase-tools via npm e rode o seguinte comando:
$firebase deploy --isso fará o upload e você receberá um link no terminal
$firebase

// * Routing in SPA Single Page App
// Quando a Url mudar, um componente específico será chamado :)
// 🎆 Router component vem com 4 elementos:
// 🎐 RouterOutlet - Directive, onde o Componet será carregado
// 🎏 @RouterConfig - define para a Url tal que esse será o Componet a ser carregado
// ➡ RouterParam - Service que permite o componente ler parâmetros passados na URL
// ➡ RouterLink - directive, criar links para outros componentes

// Passos para criação das Rotas:
// ➡ Configurar o Router no nosso componente raiz 

@RouterConfig([{
 {path: , component: , as: },
...
}])
class ComponentRaiz{

}

// TO BE CONTINUED...
