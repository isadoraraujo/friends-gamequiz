function primeiraFaseChandlerMonica (resposta) {
  
    let pergunta
    pergunta = prompt('Digite o número da alternativa correta')
    while(Number(pergunta) !== 1 && Number(pergunta) !== 2 && Number(pergunta) !== 3 && Number(pergunta) !== 4) {

    pergunta = prompt('Você digitou um número inválido. Digite um número disponível');

}
    if (Number(pergunta) === resposta) {
        location.assign('/projetoFinal/chandler-monica/chandlerMonicaSegunda.html')
    } else {
        location.assign('/projetoFinal/chandler-monica/perdeuChandlerMonica.html')
    }
    
}

function segundaFaseChandlerMonica (resposta) {
    
    let pergunta
    pergunta = prompt('Digite o número da alternativa correta')
    while(Number(pergunta) !== 1 && Number(pergunta) !== 2 && Number(pergunta) !== 3 && Number(pergunta) !== 4) {

    pergunta = prompt('Você digitou um número inválido. Digite um número disponível');

}
    if (Number(pergunta) === resposta) {
        location.assign('/projetoFinal/chandler-monica/chandlerMonicaTerceira.html')
    } else {
        location.assign('/projetoFinal/chandler-monica/perdeuChandlerMonica.html')
    }
}

function terceiraFaseChandlerMonica (resposta) {
    let pergunta
    pergunta = prompt('Digite o número da alternativa correta')
    while(Number(pergunta) !== 1 && Number(pergunta) !== 2) {

    pergunta = prompt('Você digitou um número inválido. Digite um número disponível');

}
    if (Number(pergunta) === resposta) {
        location.assign('/projetoFinal/chandler-monica/ganhouChandlerMonica.html')
    } else {
        location.assign('/projetoFinal/chandler-monica/perdeuChandlerMonica.html')
    }
}