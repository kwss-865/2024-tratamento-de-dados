const url =' https://raw.githubusercontent.com/kwss-865/API_.../refs/heads/main/entrevista.json'

async function vizualizarInformacoes() {
    const res = await fetch(url)
    const dados = await res.json()

    const consoleNome = dados.entrevista.consoles[0].nome
    const consoleVendas =( dados.entrevista.consoles[0].vendas) 
    const consoleOpiniao = dados.entrevista.consoles[0].opiniao[0].comentario
    
    console.log(consoleOpiniao)

    const paragrafo = document.createElement('p')

    paragrafo.classList.add('caixa-grafico__texto')

    paragrafo.innerHTML = `Em busca de saber os consoles mais vendidos no mundo, foi realizada uma série de pesquisas de diferentes fontes. Com auxílio do ChatGPT, foi possível estimar que o console mais vendido foi <span>${consoleNome}</span> com um total de aproximadament um total de <span>${consoleVendas}</span>, com a opinião popular <span>${consoleOpiniao}</span>` 


    const caixa = document.getElementById('caixa-grafico')
    caixa.appendChild(paragrafo)
}

vizualizarInformacoes()