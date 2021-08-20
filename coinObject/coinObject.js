const body=document.querySelector("body")
const h1=document.createElement("h1")
h1.innerText="Cara ou Coroa"
body.appendChild(h1)
const divPai=document.createElement("div")
divPai.classList.add("divPai")
body.appendChild(divPai)


const coin = {
    state: 0,
    
    flip: function() {
        this.state=Math.floor(Math.random()*2)
    },
    toString: function () {
        if(this.state===0){

            return "Heads"
        }
            
            return "Tails"
        
    },
    
    toHTML: function (){
        
      
      if(coin.toString()==="Heads"){
        const imagem = document.createElement("img")
        imagem.setAttribute("id","img1")
          imagem.src="https://fr.numista.com/catalogue/photos/bresil/g1525.jpg"
          divPai.appendChild(imagem)
        }
       else{
            const imagem2= document.createElement("img")
            imagem2.setAttribute("id","img2")
            imagem2.src="https://www.numismarket.com.br/imagem/index/26877084/G/moeda_nacional_dn6204.jpg"
            divPai.appendChild(imagem2)
        }
    }
};


function display20Flips() {
    const results = [];
    for(let i=0;i<20;i++){
    coin.flip()
    coin.toString()
        if (coin.toString()==="Heads") {
            const text1=document.createElement("p")
            text1.innerText="Head"
            body.appendChild(text1)
            results.push(text1)
        }
        else{
            const text2=document.createElement("p")
            text2.innerText="Tail"
            body.appendChild(text2)
            results.push(text2)
        }
    }
return results
    // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
  }
  
  function display20Images() {
    const results = [];
    for(let i=0;i<20;i++){
        coin.flip()
        results.push(coin.toHTML())
    }
    return results
    // Use um loop para arremessar a moeda 20 vezes.
    // Depois que o seu loop terminar, exiba o resultado na página no formato de IMAGEM.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
  }
  display20Images()
  display20Flips()