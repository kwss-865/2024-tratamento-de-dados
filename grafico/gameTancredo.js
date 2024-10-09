import { pegarCSS } from "./comun.js"

async function graficosTancredo(){
    const url = 'https://raw.githubusercontent.com/kwss-865/API_.../refs/heads/main/pesquisaTancredo.json'
    const res = await fetch(url)
    const dados = await res.json()
    const turmasParticipantes = dados.slice(1).map(turmas => turmas[1])
    const contagemTurmas = turmasParticipantes.reduce((acc, turmasParticipantes) => {
        acc[turmasParticipantes] = (acc[turmasParticipantes] || 0) + 1 
        return acc
    }, {})

    const valores = Object.values(contagemTurmas)
    const etiqueta = Object.keys(contagemTurmas)

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
    pesquisaTitulo.innerHTML = `Turmas do  <span>Tancredo</span> que mais votaram`
    
    const grafico = document.createElement('div')
    grafico.className = 'grafico-disco'
    document.getElementById('caixa-grafico').appendChild(pesquisaTitulo)
    document.getElementById('caixa-grafico').appendChild(grafico)
    const config = {
        responsive: true,
        displeyModeBar: false
    }
    Plotly.newPlot(grafico, data, layout)

    console.table(dados.slice(1))
}

graficosTancredo()
