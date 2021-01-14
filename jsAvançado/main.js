//FETCH
/*
fetch('http://localhost:8080/data.json').then(resposiveElement => {
	resposiveElement.json().then(resposiveElement2 => {
		console.log(resposiveElement2);
	});
});*/

//ASYNC
/*const simpleFunction = async () => {
	throw new Error("Obs");
	return 1234;
}

simpleFunction().then(simple => {
	console.log(simple);
}).catch(err => {
	console.log(err);
})*/

//ASYNC / AWAIT


const nowFunction = () => new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(45465);
	}, 1000)
})


const simpleFunction = async () => {
	const date = await nowFunction();
	console.log(date);
	const Json = await fetch('/data.json').then(newArchive => {
		newArchive.json();
    })

	return Json;
}

simpleFunction().then(date => {
	console.log(date);
}).catch(err => {
	console.log("Obs", err);
})