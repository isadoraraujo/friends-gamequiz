function primeiraFasePhoebeJoey (resposta) {
  
    let pergunta
    pergunta = prompt('Digite o número da alternativa correta')
    while(Number(pergunta) !== 1 && Number(pergunta) !== 2 && Number(pergunta) !== 3 && Number(pergunta) !== 4) {

    pergunta = prompt('Você digitou um número inválido. Digite um número disponível.');

}
    if (Number(pergunta) === resposta) {
        location.assign('phoebeJoeySegunda.html')
    } else {
        location.assign('perdeuPhoebeJoey.html')
    }
    
}

function segundaFasePhoebeJoey (resposta) {
    
    let pergunta
    pergunta = prompt('Digite o número da alternativa correta')
    while(Number(pergunta) !== 1 && Number(pergunta) !== 2 && Number(pergunta) !== 3 && Number(pergunta) !== 4) {

    pergunta = prompt('Você digitou um número inválido. Digite um número disponível.');

}
    if (Number(pergunta) === resposta) {
        location.assign('phoebeJoeyTerceira.html')
    } else {
        location.assign('perdeuPhoebeJoey.html')
    }
}

function terceiraFasePhoebeJoey (resposta) {
    let pergunta
    pergunta = prompt('Digite o número da alternativa correta')
    while(Number(pergunta) !== 1 && Number(pergunta) !== 2 && Number(pergunta) !== 3 && Number(pergunta) !== 4) {

    pergunta = prompt('Você digitou um número inválido. Digite um número disponível.');

}
    if (Number(pergunta) === resposta) {
        location.assign('ganhouPhoebeJoey.html')
    } else {
        location.assign('perdeuPhoebeJoey.html')
    }
}