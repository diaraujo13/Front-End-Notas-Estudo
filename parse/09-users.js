// U S E R S

// Parse.User é uma classe especializada que contém
// funcionalidades requeridas no gerenciamento de usuários

// Parse.User é uma subclasse de Parse.Object

// Properties
// -- username
// -- password
// -- email address (opcional)

// SIGN UP
// É chamado de forma assíncrona
// O Parse cuida de verificar se o e-mail e o usuário são ÚNICOS
// Também criptografa o envio da senha no seu envio à nuvem com 'bcrypt'
var user = new Parse.User();
user.set("username", "my name");
user.set("password", "my pass");
user.set("email", "email@example.com");

// other fields can be set just like with Parse.Object
user.set("phone", "415-392-0202");

user.signUp(null, {
  success: function(user) {
    // Após cadastrado com sucesso, mostre algo, por exemplo, o app!
  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
});

// LOGGING IN
// Precisará do nome de usuário e do seu password 
// para então completar o logging in com 'success'
Parse.User.logIn("myname", "mypass", {
  success: function(user) {
    // Do stuff after successful login.
  },
  error: function(user, error) {
    // The login failed. Check error to see why.
  }
});

// CURRENT USER
// Para evitar que o usuário tenha que fazer login toda vez
// que entrar na aplicação, mantemos um cache do atual
// Parse.User logado na aplicação
// O usuário é armazenado em cache através do localStorage
// Você pode tratar essa cache como uma sessão e automaticamente
// assumir que o usuário esteja logado pela sua presença na cache
var currentUser = Parse.User.current();
if (currentUser) {
    // se o valor foi diferente de 'undefined',
    // então um objeto Parse.User foi retornado para nós
    // e tudo que for inserido aqui será levado em conta
    // a veracidade de que existe um usuário logado 
} else {
    // caso não tenha usuário logado, seria uma boa
    // mostrar ao usuário uma tela de sign up ou de login! =)
}
