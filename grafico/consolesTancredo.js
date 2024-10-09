import { pegarCSS } from "./comun.js"

async function graficosTancredo(){
    const url = 'https://raw.githubusercontent.com/kwss-865/API_.../refs/heads/main/pesquisaTancredo.json'
    const res = await fetch(url)
    const dados = await res.json()
    const consolesVotados = dados.slice(1).map(consoles => consoles[2])
    const contagemConsoles = consolesVotados.reduce((acc, consolesVotados) => {
        acc[consolesVotados] = (acc[consolesVotados] || 0) + 1 
        return acc
    }, {})

    const valores = Object.values(contagemConsoles)
    const etiqueta = Object.keys(contagemConsoles)

    const data = [
        {
            values: valores,
            labels: etiqueta,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ]
    const layout = 
    {
        plot_bgcolor: pegarCSS('--laranja'),
        paper_bgcolor: pegarCSS('--verde-escuro'),
        font:{
            color: pegarCSS('--laranja'),
            family: pegarCSS('--fonto-titulo'),
            size: 16,
        }
    }

    const pesquisaTitulo = document.createElement('h3')
    pesquisaTitulo.classList.add('caixa-grafico__titiulo')
    pesquisaTitulo.innerHTML = `Os consoles mais votados no Colégio <span>Tancredo</span>`
    
    const grafico = document.createElement('div')
    grafico.className = 'grafico-disco'
    document.getElementById('caixa-grafico').appendChild(pesquisaTitulo)
    document.getElementById('caixa-grafico').appendChild(grafico)
    const config = {
        responsive: true,
        displeyModeBar: false
    }
    Plotly.newPlot(grafico, data, layout)

    const caixa = document.getElementById('caixa-grafico')
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('caixa-grafico__texto')
    paragrafo.innerHTML = 'Nota-se que o console mais votado no colégio Tancredo é diferente do mais votado no mundo. Enquanto os estudantes elegeram, com 25 votos, <span>o PlayStation 5</span> como o console mais desejado, já a pesquisa global indicou que <span>o Nintendo Switch</span> é o console mais comprado no mundo. Na pesquisa feita na escola, o mesmo ficou em segundo lugar.'
    caixa.appendChild(paragrafo)
}
graficosTancredo()