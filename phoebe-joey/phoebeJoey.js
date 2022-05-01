function primeiraFasePhoebeJoey (resposta) {
    let pergunta = prompt("Qual é a resposta?")
    if (Number(pergunta) === resposta) {
        location.assign("/projetoFinal/phoebe-joey/phoebeJoeySegunda.html")
    } 
    else if (Number(pergunta) != 1 && Number(pergunta) != 2 && Number(pergunta) !=3 && Number(pergunta) != 4) {
        alert("Essa resposta não existe no sistema")
    }
    else {
        location.assign("/projetoFinal/phoebe-joey/perdeuPhoebeJoey.html")
    }
}

function segundaFasePhoebeJoey (resposta) {
    let pergunta = prompt("Qual é a resposta?")
    if (Number(pergunta) === resposta) {
        location.assign("/projetoFinal/phoebe-joey/phoebeJoeyTerceira.html")
    } 
    else if (Number(pergunta) != 1 && Number(pergunta) != 2 && Number(pergunta) !=3 && Number(pergunta) != 4) {
        alert("Essa resposta não existe no sistema")
    }
    else {
        location.assign("/projetoFinal/phoebe-joey/perdeuPhoebeJoey.html")
    }
}

function terceiraFasePhoebeJoey (resposta) {
    let pergunta = prompt("Qual é a resposta?")
    if (Number(pergunta) === resposta) {
        location.assign("/projetoFinal/phoebe-joey/ganhouPhoebeJoey.html")
    }
    else if (Number(pergunta) != 1 && Number(pergunta) != 2 && Number(pergunta) !=3 && Number(pergunta) != 4) {
        alert("Essa resposta não existe no sistema")
    }
    else {
        location.assign("/projetoFinal/phoebe-joey/perdeuPhoebeJoey.html")
    }
}