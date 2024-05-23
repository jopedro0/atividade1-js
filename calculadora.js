var entrada = require('readline-sync')

var num1
var num2

while (opt != 'S') {

    console.log('escolha uma operação:\n +(soma)\n -(subtração)\n *(multiplicação)\n /(divisão)\n pow(potenciação)\n raiz(radiciação)')
    var esc = entrada.question()

    if (esc == '+') {
        console.log('digite dois números')
        num1 = Number(entrada.question())
        num2 = Number(entrada.question())

        
        console.log(`${num1} + ${num2} = ${num1 + num2} `)
    }

    else if (esc == '-') {
        console.log('digite dois números')
        num1 = Number(entrada.question())
        num2 = Number(entrada.question())

        
        console.log(`${num1} - ${num2} = ${num1 - num2}`)
    }

    else if (esc == '*') {
        console.log('digite dois números')
        num1 = Number(entrada.question())
        num2 = Number(entrada.question())

        
        console.log(`${num1} * ${num2} = ${num1 * num2}`)
    }


    else if (esc == '/') {
        console.log('digite dois números')
        num1 = Number(entrada.question())
        num2 = Number(entrada.question())

        
        console.log(`${num1} / ${num2} = ${num1 / num2}`)
    }

    else if (esc == 'pow') {
        console.log('digite dois números')
        num1 = Number(entrada.question('numero de base: '))
        num2 = Number(entrada.question('expoente: '))

        var pow = Math.pow(num1, num2)
        
        console.log(`${num1} ^ ${num2} = ${pow}`)
    }

    else if (esc == 'raiz') {
        console.log('digite um número')
        num1 = Number(entrada.question())

        var raiz = Math.sqrt(num1)

        console.log(`A raiz quadrada de ${num1} = ${raiz}`)
    }

    var opt = entrada.question('voce deseja sair? S/N: ').toUpperCase()
    
}
