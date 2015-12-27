// Método utilizado

// Firebase.on( tipo_listener, callback(snapshot))
	
// Funcionamento:
// 1. Com a utilização dessa função os aplicativos ficam escutando (listener) por
// eventos ocorridos no banco de dados, em TEMPO REAL. 
// 2. Esse listener é assíncrono, ou seja, não tem 'hora para ser chamado', sendo chamado
// assim que ocorrer um evento no banco de dados
// 3. Tais eventos podem ser
// 4. O snapshot é mais que somente o dado recebido, mas um helper que contém funções para
// iterar e percorrer a lista de dados. No Firebase os dados recebidos são objetos.
// snapshot.forEach executa uma função para cada elemento do objeto
// .key() irá retornar o Firebase Key para aquele valor
