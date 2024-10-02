
async function criarGraficoPizza(){
    const url = 'https://raw.githubusercontent.com/kwss-865/API_.../refs/heads/main/grafico.json'
    const res = await fetch(url)
    const dados = await res.json()

    for( let i = 0; i <= dados.length; i++){
        
        console.log(dados[i].nome)
    }
}

criarGraficoPizza()