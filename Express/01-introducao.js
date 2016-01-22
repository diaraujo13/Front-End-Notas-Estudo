// app object representa a aplicação Express
// Criamos a aplicação Express chamando a função de alto nível express(), exportada pelo módulo Express

var express = require('express')
var app = express()

// O objeto `app` possui métodos para

// § Roteamento de requisições HTTP
// § Configuração de middleware
// § Renderização de HTML Views
// § template engine
// § também permite a configuração de como a aplicação se comporta, através de propriedades

// Express é uma framework web para:
// × Routing
// × Middleware

// ∆ Em sua essência, podemos defini-la como uma série de funções de middleware ∆

// •Funções Middleware

// São funções que têm acesso aos objetos que representam a requisição e a resposta e também tem acesso a próxima função middleware, no ciclo de requisição&&resposta, e tal função é armazenada por uma variável chamada `next`

// Funções de middleware executam as seguintes tarefas:
// × executam código
// × aplicam mudanças nos objetos de request e de response 
// × finaliza o ciclo req/res (caso não finalize, chama a next function para passar a  responsabilidade)
// × chama a próxima função

// ||Tipos de Middleware||
// 1. Application Level
// 2. Router level
// 3. Error handling
// 4. Built-in
// 5. 3rd Party

// 1. 


// 🔶🔶🔶🔶🔶🔶🔶🔶🔶

app.listen(7878, function(err,succ){}) // CRIAR o servidor em si

// 1. Criar a pasta /server
// 2. npm init
// 3. --save express
// 4. Criar um servidor em uma porta específica:

app.listen(8080);
🗿
5. node server.js //executar o servidor

// 🔀 Assyncronous
// - Funções Callback

▪ app.listen(8080, function(err, suc){})

// ▪ Podem ser usados em vários pontos no código. Assíncronos permite que varias requisições sejam feitas sem interromper o que o usuário faz.
// √ usar .listen no final do arquivo
// √ nodemon reinicia o servidor a cada momento que arquivos sofrerem alterações
// .set - Definir o template, precisando de declarar uma template engine através de .engine
// middlewares - .use
// ordem determina quem será chamado primeiro
// bodyParse - require data from front end, já que ele recebe o 'body request' passado no HTTP Request

app.get ( 'myRoute', function...)
// Antes de enviar o usuário à rota que ele pediu, é chamado a função de middleware
// Por exemplo: Quero que somente usuários autorizados possam entrar em tal rota
app.post ("/upload", user.isAuth(), controller.upload())
// Uma função é chamada e então a outra, na ordem :)
app.use - toda requisição irá ser chamada esse middleware passado no .use
// ★ Templating
// - Angular e React são utilizados em projetos que não usam Temaplate Engines
// - Usando .ejs (precisa instalar)
// - Definir a view engine
$app.set('view engine', 'ejs')

// Express irá olhar na lista de views
$res.render('home') 

// 🔸Pode passar, para a view, ainda no metodo render, como um segundo argumento, um objeto contendo uma lista de chaves-valores, que serão exibidas na view onde forem chamadas. 

<%= chave %>

// No arquivo .ejs essa formatação  indicará onde o valor passado pela router ficará

// 🔃 Loop trhough array com EJS
// Caso, no objeto passado no .send, passamos um array para uma chave, podemos fazer um loop por ela no .ejs e imprimir cada item usando apenas o 'for' normal! Substitua as tags de PHP por .ejs, será a mesma ideia por trás.

app = express()

// Passando o método express para a variável app faz com que esta tenha acesso a todos os métodos do Express
// Representa a aplicação Express

// ★ Running

$node app.js

// ★ Specify router for the application
// Primeira coisa a se fazer.
// app.get -- corresponde à uma chamada GET ao nosso `router`

res.send()
res.write()

// ★ Params Variable
// É acessado através do objeto "req" :)
// - Variável é definida, na URL, presente entre : ?
// - Valor da variável é acessado usando req.params


.get("/informacao/:autor_nome?",
function ( req , res ) 
{
   req.params.autor_nome
}


// ★ 404 Page not found

.get('*')

// 🔅 Lógica

// 1. Pegando um objeto. Tal objeto terá uma única propriedade que será preenchida por um array de valores.

// 2. A maioria da lógica ocorrerá em nosso middleware

// 🔸 Trabalhando com Json
// criar uma variável que receberá o .json para acessar rotas

