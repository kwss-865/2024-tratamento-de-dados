function pegarCSS(variavel){
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const configuraEixo = {
    color: pegarCSS('--laranja'),
    size: 16,
    family: pegarCSS('--fonte-texto')
}

export{pegarCSS, configuraEixo} 