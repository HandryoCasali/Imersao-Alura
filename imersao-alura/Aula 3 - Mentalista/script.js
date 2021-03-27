var numeroSecreto = parseInt(Math.random()*10)
var tentativas = 3

var numeroDigitado = document.querySelector("input")

function verificaChute(){
    if (numeroDigitado.value == numeroSecreto){
      alert("Acertou")
      document.location.reload(true);
    } else if (numeroDigitado.value > numeroSecreto){
      alert("Você errou! O número secreto é menor, " + tentativas + " de 3 tentativas")
      tentativas += 1
    } else if (numeroDigitado.value < numeroSecreto){
      alert("Você errou! O número secreto é maior, " + tentativas + " de 3 tentativas")
      tentativas += 1
    }
  
    if(tentativas == 4){
      alert("Você errou! O numero pensado era " + numeroSecreto)
      document.location.reload(true);
    }
}

var button = document.querySelector("button")
var tentativas = 1

if (tentativas <= 3) {
  button.onclick = verificaChute;  
}




