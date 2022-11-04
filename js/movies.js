


//glitch url
// const G_Url = 'https://vivid-flawless-almandine.glitch.me/movies';

const G_Url = 'https://gravel-rainbow-hammer.glitch.me/movies';



// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(reviewObj),
// };

fetch(G_Url)
    .then((response) => response.json())
    .then((json) => console.log(json));



// const addedMovie = {
//
//     name: 'Halloween',
//     rating: 4,
//     comments: "best slasher movie"
// };
// const url = 'https://codeup-json-server.glitch.me/movies/';//user object selection they want to delete
//
// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(reviewObj),
// };
// fetch(url)
//     // .then( response => console.log(response) ) /* review was created successfully */
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch( error => console.error(error) ); /* handle errors */

// need userinput whenever they want to add a movies
// user needs a ratting and a title
//only display objects that have a title and a ratting
//need an event listener when the user submits the form
//needs to be a asyncronus operation, and not reload the entire page




//when user deletes their object by selecting id
// const url = ' https://codeup-json-server.glitch.me/movies';//user object selection they want to delete

// fetch(url,{
//     method: 'DELETE'
// }).then(res => res.json()).then(data => console.log(data))
//


// fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch(error => console.error(error))


fetch(G_Url,{
    method: 'DELETE'
}).then(res => res.json()).then(data => console.log(data))



fetch(G_Url)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch(error => console.error(error))



function movieAdd() {
    $("#movies").append("<tr>" +
        "<td>My First Video</td>" +
        "<td>6/11/2015</td>" +
        "<td>www.pluralsight.com</td>" +
        "</tr>");
}



// fetch(G_Url)
// 	.then(res => res.json())
// 	.then(data => {
// 		console.log(data)
//
//      //    movies.innerHTML = `<div>
//      //     <h2>${res[0]}</h2>
//      // </div>`})

		// data.forEach(post => {
		// 	if (typeof (post.id) === 'number' || typeof (post.id) === 'string') {
		// 		console.log(post.title);
        //
		// 		function hasTitle(){
		// 		    if(post.title !== 'undefined'){
		// 		$('#movies').append(
		// 			`<div class="container">` +
		// 			`<div class="row" style="outline: auto; padding-bottom: 10px; padding-top: 10px">` +
		// 			`<div class="col-4">` +
		// 			`<img src="${post.poster}" style="height:300px; width:200px;">` +
		// 			`</div>` +
        //
		// 			`<div class="col-8">` +
        //
		// 			`<h3>${post.title}</h3>` +
		// 			`<ul style="list-style: none">` +
		// 			`<li>Genre:    ${post.genre}</li>` +
		// 			`<li>Rating:  ${post.rating}</li>` +
		// 			`<li>Director:  ${post.director}</li>` +
		// 			`<li>Plot:  ${post.plot}</li>` +
		// 			`</ul>`+
		// 			`<button id="${post.id}" >delete movie</button>` +
		// 			`</div>` +
		// 			`</div>` +
        //
		// 			`</div>`
        //
		// 		)
		// 	}
        //
		// }}})})
