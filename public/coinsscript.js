

//Função responsável por alternar entre os forms, o primeiro form é de moedas estrangeiras para real e o segundo é o contrário.
function changeForm(){
var choice = document.getElementById("buttonChoice");
var formCoinsToReal = document.getElementById("coinsToReal");
var formRealToCoins = document.getElementById("realToCoins");
console.log(choice.value);
if (choice.value == "coinsToReal"){
	choice.value = "realToCoins";
	formCoinsToReal.style.display = "none";
	formRealToCoins.style.display = "block";
}else {
	choice.value = "coinsToReal";
	formCoinsToReal.style.display = "block";
	formRealToCoins.style.display = "none";
}
}
//Calculo de conversão de moedas estrangeiras para Real
function calculateCoinsToReal (){
	//Le o select
	coins = document.getElementById("coins1");
	//Pega valor selecionado
	var valueSelected = coins.value;
	//Pega o valor da moeda estrangeira selecionada
	var valueCoin = document.getElementById("valueCoin1").value;
	var index = coins.selectedIndex;
    var selected = coins.options;
	var nameCoin = selected[index].text;
	var result = valueCoin * valueSelected;
	result = result.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	document.getElementById("div-result").style.display = "block";
	document.getElementById("result").innerHTML = "O valor de " + nameCoin + " em reais é: R$" + result;
	console.log("teste1");
}
//Calculo de conversão de real para moedas estrangeiras 
function calculateRealToCoins (){
	//Le o select
	coins = document.getElementById("coins2");
	//Pega valor selecionado
	var valueSelected = coins.value;
	//Pega o valor da moeda estrangeira selecionada
	var valueCoin = document.getElementById("valueCoin2").value;
	var index = coins.selectedIndex;
    var selected = coins.options;
    //Pega o nome da moeda que foi selecionada através do index da posição escolhida
	var nameCoin = selected[index].text;
	var result = valueCoin / valueSelected;
	result = result.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	document.getElementById("div-result").style.display = "block";
	document.getElementById("result").innerHTML = "O valor de Reais em " + nameCoin + " é: $" + result;
	console.log("teste2");
}

