/*var somaOld = function(a, b)
{
	return a + b;
}

soma = console.log(somaOld(5, 8));*/

/*var soma = (a, b) => (a +b);

console.log(soma(18, 36));*/

/*var validao = (a, b) => {
	var x = 10;

	if (x == 10){
		console.log("Verdade");
	}
}

console.log(validao(1, 5));
*/

/*var objeto = () => ({ test: 123});

console.log(objeto());*/


/*var obj = {
	showContext: function showContext()
	{
		setTimeout(() => {
			this.log("after 2000ms");
		}, 3000);
	}, 
	log: function log(value){
		console.log(value);
	}
}
obj.showContext()*/

/*function multiply(a, b)
{
	b = b || 1

	return a * b;
}

console.log(multiply(8, ));*/

/*function multiply (a, b = 1)
{
	return a * b;
}

console.log(multiply(5, 0))*/


/*var multiply = (a, b = 1) => (a * b);

console.log(multiply(5))*/

//GERANDO NUMEROS RANDOMICOS FUNÇÃO


/*function randomNumeric ()
{
	return Math.random() * 10;
}

var multiply = (a , b=a) => (a * b);
(objeto);

*/


/*function nome(){
	console.log("O mundo de Stevem Universo");
}

var obj = {
	nome
};

obj.nome();*/


/*var teste = {
	soma: function soma(a, b){
		return a + b;
	}
}

console.log(teste.soma(1, 2))*/

/*var teste = 'Sandro Junior';

var obj = {};

obj[teste] = 'Daniel';

console.log(obj);*/

/*function soma (a, b)
{
	var arguments;
	var value = 0;
	
	for (var i=0; i<arguments.lengh; i++)
	{
		value += arguments[i];
	}

	return value;
}

console.log(soma(10, 5, 50, 64))*/

//METODO REDUCE REST

/*function soma(...args)
{
	return args.reduce((acc, value) => acc + value, 0)
}

console.log(soma(5, 5, 6, 5))*/

/*var soma = (...args) => (args.reduce((acc, value) => acc + value,0))

console.log(soma(20, 20, 20))*/


//SPRED OPERATOR

/*const multiply = (...args) => (args.reduce((acc, value) => acc * value,1));

const soma = (...rest) =>
{
	return multiply(...rest);
}

console.log(soma(10, 5, 10));*/


/*const nome = "Sandro Correa Rocha Junior";

function logArguments(...args)
{
	console.log(args);
}

logArguments(...nome);*/

/*const  arr = ['a',' b',' c', 'd'];

function dog(...rest)
{
	console.log(rest)
}

dog(...arr);*/

//CONCATENANDO ARRAY
/*
const nome = ['Henrique'];
const nome2 = ['Sandro'];
const nome3 = ['Marcio'];

arr = [...nome, ...nome2, ...nome3, 8, 7, 6];
console.log(arr)*/

/*const obj = {
	test: 123
};

const obj2 = {
	...obj,
	test2: 'ola'
}

console.log(obj2);*/

/*const uniqueID = Symbol("Hello");
const uniqueID2 = Symbol("Hello");

const obj = {
	[uniqueID] : 'Hello World'
}


console.log(obj);*/

/*const arr = [1, 2, 3, 4];

const it = arr[Symbol.iterator]();

console.log(it.next());
*/

/*const arr = [1, 21, 31, 56];

const it = arr[Symbol.iterator]();

const obj = {
	values: [1, 21, 31, 56],
	[Symbol.iterator]() {

    }
}

for (let values of obj) {
	console.log(values)
}*/

//GENERATORS
/*function* hello() {
	console.log("Hello");
	yield;

	console.log("World");
	yield;
	console.log("Paz");
}

const gene = hello();

console.log(gene.next()); console.log(gene.next()); console.log(gene.next()); console.log(gene.next());*/

//USANDO CALLBACKS
/*
function doSomething(callback) {
	setTimeout(function () {
		callback("Name: Sandro Correa");
	}, 1000);
};

function doSomthing2(callback) {
	setTimeout(function () {
		callback("Surname: Rocha Junior");
	}, 1000);
};

function doAll() {
	try {

		doSomething(function (name) {
			var response = name.split(" ");
			try {

				doSomthing2(function (name2) {
					var response2 = name2.split(" ");
					try {

						setTimeout(function (display) {
							console.log(response, response2);
						});
					} catch (err) {

                    }
				});
			} catch (err) {

            }
		});
	} catch (err) {

    }
};

doAll();
*/

//PROMISSES

/*const doSomething = new Promise((resolve, reject) => {
	//throw new Error("Erro muito cabuloso");
	setTimeout(function () {
		resolve("Neme: Sandro Junior");
	}, 1000);
});

const doSomething2 = new Promise((resolve, reject) => {
	setTimeout(function () {
		resolve("Correa Rocha")
	}, 1000);
});

//ENCHUTANDO ERROS
//doSomething()
//	.then(date => {
//		console.log(date);
//		return doSomething2;
//	})
//	.then(date => console.log(date))
//	.cath(error => console.log('ops', error));

Promise.all([doSomething, doSomething2]).then(date => {
	console.log(date[0].split(""));
	console.log(date[1].split(""));
});
*/

fetch('/data.json').then(responseStream  => {
	return responseStream.json().then(data => {
		console.log(data);
	});
});

