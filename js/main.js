
function clicou()
{
	document.getElementById("subTitulo").innerHTML = "Obrigado por tudo";
	//console.log(document.getElementById("subTitulo"));
}
	//alert("Obrigado por clicar aqui! Sandro");

/*function redirecionar()
{
	document.getElementById("Hidromel").innerHTML = "Ola pessoas";
	console.log(document.getElementById("Hidromel"));
}*/ //APENAS TESTE


function redirecionar()
{
	window.open("https://www.youtube.com/?hl=pt&gl=BR");
	//window.location.href = "https://www.youtube.com/?hl=pt&gl=BR";
}

function trocar(elemento)
{
	elemento.innerHTML = "VOLTA";
}

function voltar(elemento){
	elemento.innerHTML = "DEPOIS";
}

function onload(){
	alert("Pagina Carregada");
}

function funcaoChange(elemento){
	console.log(elemento.value)
}




























/*function soma(n1, n2){

function validadarIdade(nome, idade)
{
	var validar;
	if (idade <= 18){
		//alert("Voce é mais velho");
		validar = true
	}
	else
	{
		//alert("Voce é mais novo")
		validar = false
	}
	return validar;
}

var idade = prompt("Digite a sua idade: ");
var nome = prompt("Digite o seu idade: ");

console.log(validadarIdade(idade))



	return n1 + n2;
}

function setReplace(nome, sobrenome, finalDoNome){
	return nome.replace(nome, finalDoNome)
}

alert(soma(10, 50))
alert(setReplace("Sandro", "Correa", "Junior"))


var nome = "Sandro Correa Rocha Junior";
var idade = 29
var idade2 = 30

//var idade = prompt("Qual a sua idade: ")
var contador = new Date();

//alert(contador)
//alert(contador.getMonth()+1)
alert(contador.getMinutes())

for(contador=0; contador<=5; contador++ )
{
	console.log(contador);
}

while(contador < 100)
{
	console.log(contador);
	contador++;
}

if (idade >= 29){
	alert("Maior de idade");
}
else
{
	alert("Menor de idade");
}

log(nome);
console.log(idade + idade2);
console.log(nome.toUpperCase())
//alert(idade + idade2);
//alert("Ola " + nome + " seje bem Vindo ao Java!, Tenho " + idade + " anos");

console.log(nome.toUpperCase())
console.log(nome.toLowerCase())
console.log(nome.replace("Junior", ""))
console.log(nome.length)


 var lista = ["maca", "pera", "uva", "bananas"];
 var dicionario = {nome:"Maca", cor:"Vermelho"}
 var listaDeDicionarios = [{nome:"Maca", cor:"Vermelho"}, {nome:"Uva", cor:"Roxa"}]



 lista.push("kiwi", "mamao")
 lista.pop()
 lista.pop()
 console.log(lista.reverse())
 console.log(lista.toString())//CONVERTE O ARRAY EM STRING
 console.log(lista.join("  - "))//CONVERTE O ARRAY EM STRING
 console.log(dicionario) 
 console.log(dicionario.cor)
 console.log(listaDeDicionarios)
 console.log(listaDeDicionarios[0].nome)
 */