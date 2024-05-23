var entrada = require('readline-sync')

var num = Math.floor(Math.random() * 100);
var nTent = 0
var sair


while (tent != num) {
    nTent += 1

    var tent = Number(entrada.question('tente acertar o numero da maquina: '))

    if (tent == num) {
        console.log('parabéns, você acertou')
    }


    else if (tent < num) {
        console.log('!!você errou, tente novamente!!')
        console.log('*DICA* o numero digitado é menor que o numero da maquina\n')

        sair = entrada.question('deseja parar? S/N: ').toUpperCase()
        if (sair == 'S') {
            console.log('você saiu do jogo')

            break
        }

        else if (sair == 'N') {
            console.log('você continua no jogo')
        }
     
    }

    else if (tent > num) {
        console.log('!!você errou, tente novamente!!')
        console.log('*DICA* o numero digitado é maior que o numero da maquina\n')

        sair = entrada.question('deseja parar? S/N: ').toUpperCase()
        if (sair == 'S') {
            console.log('você saiu do jogo')

            break
        }

        else if (sair == 'N') {
            console.log('você continua no jogo')
        }

    }



}

console.log('número de tentativas: ', nTent)