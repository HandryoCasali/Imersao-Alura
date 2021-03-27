var primeiraMoeda = document.getElementById('primeira-moeda');
var segundaMoeda = document.getElementById('segunda-moeda');
var botao = document.querySelector('button')
var valorPrimeiraMoeda = document.getElementById('valor-primeira-moeda');
var resultado = document.getElementById('resultado');
var valorDollar;
var valorReais;
var valorEuro;

function validarMoeda(firstMoeda, secondMoeda){
    if(firstMoeda == secondMoeda){
        alert("Moedas iguais");
    }else if(firstMoeda == "De"){
        alert("Selecione a primeira moeda");
    }else if(secondMoeda == "Para"){
        alert("Selecione a segunda moeda");
    }
}

function calculaMoeda(firstMoeda, secondMoeda){
     
    if(firstMoeda == "Dollar" && secondMoeda == "Real"){
        resultado.value = "R$ " +  (valorPrimeiraMoeda.value * 5.70).toFixed(2)
    }
    if(firstMoeda == "Euro" && secondMoeda == "Real"){
        resultado.value = "R$ " +  (valorPrimeiraMoeda.value * 6.80).toFixed(2)
    }
    if(firstMoeda == "Real" && secondMoeda == "Dollar"){
        resultado.value = "US$ " +  (valorPrimeiraMoeda.value * 0.17).toFixed(2)
    }
    if(firstMoeda == "Euro" && secondMoeda == "Dollar"){
        resultado.value = "US$ " +  (valorPrimeiraMoeda.value * 1.18).toFixed(2)
    }
    if(firstMoeda == "Dollar" && secondMoeda == "Euro"){
        resultado.value = "€ " +  (valorPrimeiraMoeda.value * 0.85).toFixed(2)
    }
    if(firstMoeda == "Real" && secondMoeda == "Euro"){
        resultado.value = "€ " +  (valorPrimeiraMoeda.value * 0.15).toFixed(2)
    }
}

function conversorMoeda(){
    var firstMoeda = primeiraMoeda.options[primeiraMoeda.selectedIndex].text;
    var secondMoeda = segundaMoeda.options[segundaMoeda.selectedIndex].text;
    validarMoeda(firstMoeda, secondMoeda);
    calculaMoeda(firstMoeda, secondMoeda);

}


botao.onclick = conversorMoeda;