function primeiraFasePhoebeJoey (resposta) {
  
    let pergunta
    pergunta = prompt('Digite o número da alternativa correta')
    while(Number(pergunta) !== 1 && Number(pergunta) !== 2 && Number(pergunta) !== 3 && Number(pergunta) !== 4) {

    pergunta = prompt('Você digitou um número inválido. Digite um número disponível.');

}
    if (Number(pergunta) === resposta) {
        location.assign('/projetoFinal/phoebe-joey/phoebeJoeySegunda.html')
    } else {
        location.assign('/projetoFinal/phoebe-joey/perdeuPhoebeJoey.html')
    }
    
}

function segundaFasePhoebeJoey (resposta) {
    
    let pergunta
    pergunta = prompt('Digite o número da alternativa correta')
    while(Number(pergunta) !== 1 && Number(pergunta) !== 2 && Number(pergunta) !== 3 && Number(pergunta) !== 4) {

    pergunta = prompt('Você digitou um número inválido. Digite um número disponível.');

}
    if (Number(pergunta) === resposta) {
        location.assign('/projetoFinal/phoebe-joey/phoebeJoeyTerceira.html')
    } else {
        location.assign('/projetoFinal/phoebe-joey/perdeuPhoebeJoey.html')
    }
}

function terceiraFasePhoebeJoey (resposta) {
    let pergunta
    pergunta = prompt('Digite o número da alternativa correta')
    while(Number(pergunta) !== 1 && Number(pergunta) !== 2 && Number(pergunta) !== 3 && Number(pergunta) !== 4) {

    pergunta = prompt('Você digitou um número inválido. Digite um número disponível.');

}
    if (Number(pergunta) === resposta) {
        location.assign('/projetoFinal/phoebe-joey/ganhouPhoebeJoey.html')
    } else {
        location.assign('/projetoFinal/phoebe-joey/perdeuPhoebeJoey.html')
    }
}