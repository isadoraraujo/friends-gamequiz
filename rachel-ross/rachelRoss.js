function primeiraFaseRachelRoss (resposta) {
  
    let pergunta
    pergunta = prompt('Digite o número da alternativa correta')
    while(Number(pergunta) !== 1 && Number(pergunta) !== 2 && Number(pergunta) !== 3 && Number(pergunta) !== 4) {

    pergunta = prompt('Você digitou um número inválido. Digite um número disponível');

}
    if (Number(pergunta) === resposta) {
        location.assign('rachelRossSegunda.html')
    } else {
        location.assign('perdeuRachelRoss.html')
    }
    
}

function segundaFaseRachelRoss (resposta) {
    
    let pergunta
    pergunta = prompt('Digite o número da alternativa correta')
    while(Number(pergunta) !== 1 && Number(pergunta) !== 2 && Number(pergunta) !== 3 && Number(pergunta) !== 4) {

    pergunta = prompt('Você digitou um número inválido. Digite um número disponível');

}
    if (Number(pergunta) === resposta) {
        location.assign('rachelRossTerceira.html')
    } else {
        location.assign('perdeuRachelRoss.html')
    }
}

function terceiraFaseRachelRoss (resposta) {
    let pergunta
    pergunta = prompt('Digite o número da alternativa correta')
    while(Number(pergunta) !== 1 && Number(pergunta) !== 2 && Number(pergunta) !== 3 && Number(pergunta) !== 4) {

    pergunta = prompt('Você digitou um número inválido. Digite um número disponível');

}
    if (Number(pergunta) === resposta) {
        location.assign('ganhouRachelRoss.html')
    } else {
        location.assign('perdeuRachelRoss.html')
    }
}