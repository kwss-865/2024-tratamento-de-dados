import { pegarCSS } from "./comun.js"

async function criarGraficoPizza(){
    const url = 'https://raw.githubusercontent.com/kwss-865/API_.../refs/heads/main/grafico.json'
    const res = await fetch(url)
    const dados = await res.json()
    const consoles = Object.keys(dados)
    const vendasConsoles = Object.values(dados)

    const data = [
        {
            values: vendasConsoles,
            labels: consoles,
            type: 'pie',
            textinfo: 'label + percent'
        }
    ]
    const layout = {
        heigth: 400,
        width: 600,
        plot_bgcolor: pegarCSS('--marrom'),
        paper_bgcolor: pegarCSS('--verde-escuro')
    }

    const consolesTitulo = document.createElement('h3')
    consolesTitulo.classList.add('caixa-grafico__titulo')
    consolesTitulo.innerHTML = `Os <span>consoles</span> mais vendidos`

    const grafico = document.createElement('div')
    grafico.className = 'grafico-disco'
    document.getElementById('caixa-grafico').appendChild(consolesTitulo)
    document.getElementById('caixa-grafico').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}

criarGraficoPizza()