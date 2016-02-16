// JavaScript diferencia expressions de statements
// × Expressions: produz um valor e pode ser escritar em qualquer lugar onde um valor for esperado, por exemplo
// em um argumento na chamada de uma função. Ele apenas produz um valor, sem causar efeitos colaterais no restante do código

<a> {2+2} </a>
new Date()

// × Statement é utilizado para modificar o conteúdo das variáveis!
// × Statement: produz uma ação. Loops e condicionais são exemplos de statement. 
// Ele significa algum comportamento ou produz algo e tem seus efeitos colaterais
// Exemplos:

x = 5; // o valor de X sofreu uma ação de mudança

if (nome.first() === 'Juanito'){
    …
}
else{
    …
}

// × Somente é possível utilizar EXPRESSIONS entre chaves no JSX!

// × É possível reescrever o statement if/else no formato de uma expression: OPERADOR TERNÁRIO!
 
 cond ? T : F
