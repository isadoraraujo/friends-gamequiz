function firstStage(answer) {
    let ask = prompt("Qual a resposta?");
    if (Number(ask) === answer) {
        location.assign("/projetoFinal/chandler-monica/secondStage.html")
    }
    else {
        location.assign("/projetoFinal/chandler-monica/gameOver.html")
    }
}

function secondStage(answer) {
    let ask = prompt("Qual a resposta?");
    if (Number(ask) === answer) {
        location.assign("/projetoFinal/chandler-monica/thirdStage.html")
    }
    else {
        location.assign("/projetoFinal/chandler-monica/gameOver.html")
    }
}

function thirdStage(answer) {
    let ask = prompt("Qual a resposta?")
    if (Number(ask) === answer) {
        location.assign("/projetoFinal/chandler-monica/winChandlerMonica.html")
    }
    else {
        location.assign("/projetoFinal/chandler-monica/gameOver.html")
    }
}