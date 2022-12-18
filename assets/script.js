
// const userAction = async () => {
// 	const response = await fetch('https://lucky-melodic-particle.glitch.me/movies');
// 	const myJson = await response.json(); //extract JSON from the http response
// 	return myJson// do something with myJson
// }

async function getInfo() {
	const response = await fetch('https://lucky-melodic-particle.glitch.me/movies');
	let data = await response.json(); //extract JSON from the http response
	return data;// do something with myJson
}

// getInfo().then(data => console.log(data.))


// const userAction = async () => {
// 	const response = await fetch('http://example.com/movies.json', {
// 		method: 'POST',
// 		body: myBody, // string or object
// 		headers: {
// 			'Content-Type': 'application/json'
// 		}
// 	});
// 	const myJson = await response.json(); //extract JSON from the http response
// 	// do something with myJson
// }

