var valorBiticoin = 0.0000366;
var button = document.getElementById("botaoConverter");

function converterValor(valor1, valor2){
  return valor1 * valor2;
}

button.addEventListener("click", function(){
  var valorEmReais = document.getElementById("valorEmReais").value;

  valorEmReais = parseFloat(valorEmReais);
  
  var resultado = converterValor(valorBiticoin,valorEmReais);
  alert (resultado);
});