function primeiraFaseChandlerMonica (resposta) {
  
    let pergunta
    pergunta = prompt('Digite o número da alternativa correta')
    while(Number(pergunta) !== 1 && Number(pergunta) !== 2 && Number(pergunta) !== 3 && Number(pergunta) !== 4) {

    pergunta = prompt('Você digitou um número inválido. Digite um número disponível');

}
    if (Number(pergunta) === resposta) {
        location.assign('chandlerMonicaSegunda.html')
    } else {
        location.assign('perdeuChandlerMonica.html')
    }
    
}

function segundaFaseChandlerMonica (resposta) {
    
    let pergunta
    pergunta = prompt('Digite o número da alternativa correta')
    while(Number(pergunta) !== 1 && Number(pergunta) !== 2 && Number(pergunta) !== 3 && Number(pergunta) !== 4) {

    pergunta = prompt('Você digitou um número inválido. Digite um número disponível');

}
    if (Number(pergunta) === resposta) {
        location.assign('chandlerMonicaTerceira.html')
    } else {
        location.assign('perdeuChandlerMonica.html')
    }
}

function terceiraFaseChandlerMonica (resposta) {
    let pergunta
    pergunta = prompt('Digite o número da alternativa correta')
    while(Number(pergunta) !== 1 && Number(pergunta) !== 2) {

    pergunta = prompt('Você digitou um número inválido. Digite um número disponível');

}
    if (Number(pergunta) === resposta) {
        location.assign('ganhouChandlerMonica.html')
    } else {
        location.assign('perdeuChandlerMonica.html')
    }
}