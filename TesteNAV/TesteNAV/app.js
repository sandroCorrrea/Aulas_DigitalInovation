function exercise01() {
    var string1 = prompt("1 - Digite uma frase: ");
    var string2 = prompt("2 - Digite outra frase: ");

    if (string1.length > string2.length) {
        alert("A maior string foi a primeira");
    }
    else if (string2.length > string1.length) {
        alert("A maior string foi a segunda");
    }
    else {
        alert("As Strings sao do mesmo tamanho");
    }
}

function exercise02() {
    alert("ANTES: teste 1 de 2 string 3");
    var string = "test 1 de 2 string 3";
    alert("DEPOIS: " + string.replace("1", "$").replace("2", "$").replace("3", "$"));
}

function exercise03() {
    alert("ANTES: T35t3 d3 35t4g1o");
    var obj = { 4: "a", 3: "e", 1: "i", 5: "s" };
    var frase = "T" + obj[3] + obj[5] + "t" + obj[3] + " d" + obj[3] + " " + obj[3] + obj[5] + "t" + obj[4] + "g" + obj[1] + "o";
    alert("DEPOIS: " + frase)
}

function exercise04() {
    var meuCep = "35300002";
    var url = "https://viacep.com.br/ws/"+ meuCep +"/json/";
    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (endereco) {
            alert("ENDERECO: " + endereco['logradouro']);
            alert("NUMERO: " + endereco['ddd']);
            alert("CIDADE: " + endereco['localidade']);
            alert("ESTADO: " + endereco['uf']);
        })
}

function exercise05() {
    var tipoArray = [ { id: 1, first_name: "Juca", last_name: "Da Silva", age: 42},
        { id: 2, first_name: "Daniel", last_name: "Gonçalves", age: 21 },
        { id: 3, first_name: "Matheus", last_name: "Garcia", age: 28 },
        { id: 4, first_name: "Gabriel", last_name: "Dorneles", age: 21 }]

    var aux = 0;
    for (i = 0; i < 4; i++) {
        alert("Seje bem vindo " + tipoArray[aux]["first_name"] + " " + tipoArray[aux]["last_name"] + " !");
        aux++;
    }
}

function exercise06() {
    var tipoArray = [{ id: 1, first_name: "Juca", last_name: "Da Silva", age: 42 },
        { id: 2, first_name: "Daniel", last_name: "Gonçalves", age: 21 },
        { id: 3, first_name: "Matheus", last_name: "Garcia", age: 28 },
        { id: 4, first_name: "Gabriel", last_name: "Dorneles", age: 21 }]

    var age1 = tipoArray[0]["age"];
    var age2 = tipoArray[1]["age"];
    var age3 = tipoArray[2]["age"];
    var age4 = tipoArray[3]["age"];

    let newArray = [age1, age2, age3, age4];

    let soma = newArray.reduce(function (soma, newArray) {
        return soma + newArray;
    }, 0);

    alert("A soma das idades: " + soma);
}

function exercise07() {
    var tipoArray = [{ id: 1, first_name: "Juca", last_name: "Da Silva", age: 42 },
        { id: 2, first_name: "Daniel", last_name: "Gonçalves", age: 21 },
        { id: 3, first_name: "Matheus", last_name: "Garcia", age: 28 },
        { id: 4, first_name: "Gabriel", last_name: "Dorneles", age: 21 }]

    var aux = 0;

    for (i = 0; i < 4; i++) {
        tipoArray[aux]["age"];

        if (tipoArray[aux]["age"] < 25) {
            alert(tipoArray[aux]["first_name"] + " " + tipoArray[aux]["last_name"]);
        }
        else {
            alert("Nenhum resultado foi encontrado");
        }
        aux++;
    }
}

function exercise08() {

    var tipoArray = [{ id: 1, first_name: "Juca", last_name: "Da Silva", age: 42 },
        { id: 2, first_name: "Daniel", last_name: "Gonçalves", age: 21 },
        { id: 3, first_name: "Matheus", last_name: "Garcia", age: 28 },
        { id: 4, first_name: "Gabriel", last_name: "Dorneles", age: 21 }]

    var aux = 0;

    for (i = 0; i < 4; i++) {
        tipoArray[aux]["age"];

        if (tipoArray[aux]["age"] < 30) {
            alert(tipoArray[aux]["first_name"] + " " + tipoArray[aux]["last_name"]);
            alert("ID: " + tipoArray[aux]["id"]);
            alert("IDADE: " + tipoArray[aux]["age"]);
        }
        aux++;
    }
}

function exercise09() {

    var tipoArray = [{ id: 1, first_name: "Juca", last_name: "Da Silva", age: 42 },
        { id: 2, first_name: "Daniel", last_name: "Gonçalves", age: 21 },
        { id: 3, first_name: "Matheus", last_name: "Garcia", age: 28 },
        { id: 4, first_name: "Gabriel", last_name: "Dorneles", age: 21 }]

    var age1 = tipoArray[0]["age"];
    var age2 = tipoArray[1]["age"];
    var age3 = tipoArray[2]["age"];
    var age4 = tipoArray[3]["age"];

    var novoArray = [age1, age2, age3, age4];
    var posicaoAux, aux;


    for (i = 1; i < novoArray.length; i++) {

        posicaoAux = i;
        while (novoArray[posicaoAux] > novoArray[posicaoAux - 1] ) {
            aux = novoArray[posicaoAux];
            novoArray[posicaoAux] = novoArray[posicaoAux - 1];
            novoArray[posicaoAux - 1] = aux;
            posicaoAux--;
        }
    }

    for (i = 0; i < 4; i++) {
        alert(novoArray[i]);
    }
}

function exercise10() {
    const movies = [
        { id: 1, name: 'Joker' },
        { id: 2, name: 'Parasite' },
        { id: 3, name: 'Avengers' },
        { id: 4, name: 'Her' }
    ]
    const actors = [
        { id: 1, name: 'Cho Yeo-jeong', movie_ids: [2] },
        { id: 2, name: 'Robert Downey Jr.', movie_ids: [3] },
        { id: 3, name: 'Joaquin Phoenix', movie_ids: [1, 4] },
        { id: 4, name: 'Scarlett Johansson', movie_ids: [3] }
    ]

    var nameActor = prompt("Digite o nome de um ator: ");
    var nameMovie = prompt("Digite o nome de um filme: ");

    if (nameActor == actors[0]["name"] && nameMovie == movies[1]["name"]) {
        alert("FILME: " + movies[1]["name"]);
        alert("ATOR: " + actors[0]["name"]);
    }
    else if (nameActor == actors[1]["name"] && nameMovie == movies[2]["name"]) {
        alert("FILME: " + movies[2]["name"]);
        alert("ATOR: " + actors[0]["name"]);

    }
    else if (nameActor == actors[2]["name"] && nameMovie == movies[0]["name"] || nameMovie == movies[3]["name"]) {
        alert("FILME: " + movies[0]["name"]);
        alert("FILME: " + movies[3]["name"]);
        alert("ATOR: " + actors[2]["name"]);
    }
    else if (nameActor == actors[3]["name"] && nameMovie == movies[2]["name"]) {
        alert("FILME: " + movies[2]["name"]);
        alert("ATOR: " + actors[3]["name"]);

    }
    else {
        alert("ATOR INEXISTENTE NO ARRAY");
    }
}
