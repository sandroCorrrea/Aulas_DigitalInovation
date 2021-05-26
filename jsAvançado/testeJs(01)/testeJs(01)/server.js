// //alert("Ola usuario");

// // document.getElementById("nome").value = "oi";

// // var texto = "Lorem Ipsum é simplesmente uma simulação de texto, ";

// // var nome = parseInt(prompt("Digite um valor")) ;
// // var nome2 = parseInt(prompt("Digite um valor")) ;

// // // nome  = parseInt(nome);
// // // nome2 = parseInt(nome2);

// // alert("A soma foi de : " + (nome + nome2))

// // document.write(texto);

// // document.write("<h1>" + nome + "</h1>");

// // document.getElementById("nome").value = "Sandro Junior";

// // function areaTerreno(largura, latitude)
// // {
// //     var area = largura * latitude;

// //     return area;
// // }

// // largura  =  prompt("Digite a Largura do Terreno");
// // latitude =  prompt("Digite a Latitude do Terreno");

// // alert(areaTerreno(largura, latitude));


// function callback(id, callbackTrue, callbackFase)
// {
//     if(false)
//     {
//         callbackTrue("Menssagem criada com sucesso", "Menssagem Curta");
//     }
//     else{
//         callbackFase("Messagem de Erro");
//     }
// }

// var callbackTrue = function(Menssagem, tipo)
// {
//     document.write("Essa é a primeira menssagem: " + Menssagem);
//     document.write("<br/>");
//     document.write("Essa ja é a segunda: " + tipo);
// }

// var callbackFase = function(erro)
// {
//     document.write("Menssagem de erro : " + erro);    
// }

// callback(1, callbackTrue, callbackFase);


// var data = new Date;

// document.write(data);


//document.write(document.getElementById("usuario"))

//console.log(document.getElementsByTagName("input"))

//console.log(document.getElementsByClassName("nome_User"))

//console.log(document.getElementsByTagName("name"))

function capturandoCaracter()
{
    var elementos = document.getElementById("caracter").value

    document.getElementById("caracter").value = ''

    elementos.trim()

    switch (elementos) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            document.getElementById("numeros").value += elementos
            break;
        default:
            document.getElementById("letras").value += elementos
            break;
    }
}
