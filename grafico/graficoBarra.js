
import { pegarCSS, configuraEixo } from "./comun.js"

async function criarGraficoBarra(){
    const url ='https://raw.githubusercontent.com/kwss-865/API_.../refs/heads/main/grafico.json'
    const res = await fetch(url)
    const dados = await res.json() 
    const consoles = Object.keys(dados)
    const vendas = Object.values(dados)

    const data = [
      {
        x: consoles,
        y: vendas,
        type: 'bar',
        marker: {
            color: pegarCSS('--verde-cinza')
        }
      }
    ]

    const layout = {
        plot_bgcolor: pegarCSS('--bege'),
        paper_bgcolor: pegarCSS('--verde-escuro'),
        width: 1000,
        title:{
            text: 'Os consoles mais vendidos no Mundo ',
            font:{
                color: pegarCSS('--marrom'),
                family: pegarCSS('--fonte-titulo'),
                size: 40
            }
        },
        xaxis: {
            tickfont: configuraEixo,
            tickangle: 0 
        },
        yaxis: {
            tickfont: configuraEixo
        }

    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('caixa-grafico').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout) 


}

criarGraficoBarra()