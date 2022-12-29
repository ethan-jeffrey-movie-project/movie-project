
	"use strict";
	$(document).ready(function () {
	//first call refresh movies
	refreshMovies();

	function refreshMovies() {
	document.getElementById('movieDisplay').innerHTML = `<div class="text-center"><h1 style="color:var(--pink2)">LOADING...</h1></div>`;
	fetch('https://dandy-plucky-cover.glitch.me/movies').then(response => {
	//html is going to display on id with moviedisplay
	$('#movieDisplay').html('');
	response.json().then(movies => {
	console.log(movies);
	document.getElementById('movieDisplay').innerHTML = '';
	movies.forEach(movieObj => {
	//appending the function createImageFromGlitch(movieObj) result to movie display
	$('#movieDisplay').append(`${createImageFromGlitch(movieObj)}`);
	//connect delete
	console.log("Iterating over id: " + movieObj.id);
	//when the id of movie obj is clicked do the following
	$(`#${movieObj.id}`).click(function (e) {
	e.preventDefault();
	console.log(`${movieObj.id}`);
	let deleteID = movieObj.id;

	console.log(`deleting id  ${movieObj.id}`)
	fetch(`https://dandy-plucky-cover.glitch.me/movies/${deleteID}`, {
	method: 'DELETE',
}).then(result => {

	console.log(`completed deleting ${deleteID}`);
	console.log(result);
	refreshMovies();
});
});
});
});
});
}

	//CARD LAYOUT
	function createImage(movies){
	let html =`
				<div class="col-3">
					<div class="card bg-dark text-white mb-2 cardMinHeight text-wrap">
						<img src="${movies.Poster}" class="card-img imgOpacity cardHeight" alt="Broken Image">
							<div class="card-img-overlay">
								<h3 class="card-title">${movies.Title}</h3>
								<p class="card-text"><strong>Rated</strong>: ${movies.Rated}</p>
							</div>
					</div>
				</div>`;
	return html;
}

	function createImageFromGlitch(movies){
	let html =`
				<div class="col-3 hovEff" >
					<div class="card bg-dark text-white mb-2 cardMinHeight text-wrap overflow-auto " style="border-radius: 13%">
						<img src="${movies.poster}" class="card-img imgOpacity cardHeight " alt="Broken Image">
							<div class="card-img-overlay ">
								<h3 class="card-title"> ${movies.title}</h3>
								<p class="card-text"><strong>Rating</strong>: ${movies.rating}</p>
								<p class="card-text"><strong>Movie ID</strong>: ${movies.id}</p>
								<button class="btn btn-danger  colorBtn" id="${movies.id}">DELETE</button>
							</div>
					</div>
				</div>`;
	return html;
}

	//ADD FORM BTN START
	$('#addMovieBtn').click(function (e) {
	e.preventDefault();
	$('#addMovieBtn').attr('disabled', true);
	let movieObj = {};
	movieObj.title = $('#inputTitle').val();
	if (movieObj.title === '' || movieObj.title === undefined) {
	movieObj.title = 'N/A';
}
	movieObj.rating = $('#inputRating').val();
	if (movieObj.rating === '' || movieObj.rating === undefined) {
	movieObj.rating = 'N/A';
}
	movieObj.poster = $('#inputPosterLink').val();
	if (movieObj.poster === '' || movieObj.poster === undefined) {
	movieObj.poster = 'img/....jpeg';
}
	console.log("showing final object before add");
	console.log(movieObj);
	$('#movieDisplay').prepend(createImage(movieObj));
	const url = 'https://dandy-plucky-cover.glitch.me/movies';
	const options = {
	method: 'POST',
	headers: {
	'Content-Type': 'application/json',
},
	body: JSON.stringify(movieObj),
};
	fetch(url, options)
	.then(response => {
	$('#addMovieBtn').attr('disabled', false);
	return response.json();
}).then(movies => {
	console.log("printing the result after post");
	console.log(movies);
	refreshMovies();
})
	.catch(error => console.error(error));
});
	//ADD FORM BTN END

	$('#editChooseBtn').click(function (e) {
	e.preventDefault();
	let editID = document.getElementById('editIDInput').value;
	console.log('ID to be edited:' + editID);
	fetch(`https://dandy-plucky-cover.glitch.me/movies/${editID}`, {
	method: 'GET',
}).then(result => result.json().then(final => {
	console.log("showing final object");
	console.log(final);
	//TARGETS THE CORRESPONDING ID'S
	document.getElementById('inputEditTitle').value = final.title;
	document.getElementById('inputEditRating').value = final.rating;
	document.getElementById('inputEditPosterLink').value = final.poster;
}));

});

	$('#editMovieSubBtn').click(function (e) {
	e.preventDefault();
	console.log("start edit submit");
	let editID = document.getElementById('editIDInput').value;
	let movieObj = {};
	movieObj.title = document.getElementById('inputEditTitle').value
	movieObj.rating = document.getElementById('inputEditRating').value;
	movieObj.poster = document.getElementById('inputEditPosterLink').value;
	console.log(movieObj);
	const url = `https://dandy-plucky-cover.glitch.me/movies/${editID}`;
	const options = {
	method: 'PATCH',
	headers: {
	'Content-Type': 'application/json',
},
	body: JSON.stringify(movieObj),
};
	fetch(url, options)
	.then(response => response.json().then(movies => {
	refreshMovies();
}))  /* review was created successfully */
	.catch(error => console.error(error)); /* handle errors */
});

	//work in tandem with add movie

	$('#deleteSubBtn').click(function (e) {
	e.preventDefault();
	console.log(document.getElementById('deleteIDinput').value);
	let deleteID = (document.getElementById('deleteIDinput').value);
	document.getElementById('deleteIDinput').value = '';
	fetch(`https://dandy-plucky-cover.glitch.me/movies/${deleteID}`, {
	method: 'DELETE',
}).then(result => {
	console.log(`deleted ${deleteID}`);
	console.log(result);
	refreshMovies();
});
});

	$('#addOptionBtn').click(function () {
	$('#addPictureOption').addClass('hideOption');
	$('#addMovieForm').toggleClass('hideOption');
	$('#deleteMovieOption').addClass('hideOption');
	$('#editMovieOption').addClass('hideOption');
});

	$('#editOptionBtn').click(function () {
	$('#addMovieForm').addClass('hideOption');
	$('#addPictureOption').addClass('hideOption');
	$('#editMovieOption').toggleClass('hideOption');
	$('#deleteMovieOption').addClass('hideOption');
});

	$('#refreshOptionBtn').click(function () {
	$('#addPictureOption').addClass('hideOption');
	$('#addMovieForm').addClass('hideOption');
	$('#deleteMovieOption').addClass('hideOption');
	$('#editMovieOption').addClass('hideOption');
	refreshMovies();
});


	$('#searchMovieBtn').click(function () {
	let searchInput = $('#searchMovieInput').val();
	console.log("search query is: " + searchInput);
	const myPromise = fetch(`https://dandy-plucky-cover.glitch.me/movies`).then(firstPull => firstPull.json().then(secondPull => {
	$('#movieDisplay').html('');
	secondPull.forEach(singlePull => {
	if (singlePull.title === searchInput) {
	console.log("yes");
	console.log(singlePull);
	$('#movieDisplay').append(`${createImageFromGlitch(singlePull)}`);
} else {
	console.log("no");
}
});
}));
});

});


