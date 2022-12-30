
	"use strict";
	$(document).ready(function () {
	//first call refresh movies
	refreshMovies();

	function refreshMovies() {
	document.getElementById('movieDisplay').innerHTML =
		`<div class="text-center"><h1 style="color:var(--pink2)">LOADING...</h1></div>`;
	fetch('https://lucky-melodic-particle.glitch.me/movies').then(response => {
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
	fetch(`https://lucky-melodic-particle.glitch.me/movies/${deleteID}`, {
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
						<img src="${movies.poster_path}" class="card-img imgOpacity cardHeight" alt="Broken Image">
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
						<img src="${movies.poster_path}" class="card-img imgOpacity cardHeight " alt="Broken Image">
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
	movieObj.poster_path = $('#inputPosterLink').val();
	if (movieObj.poster_path === '' || movieObj.poster_path === undefined) {
	movieObj.poster_path = 'img/....jpeg';
}
	console.log("showing final object before add");
	console.log(movieObj);
	$('#movieDisplay').prepend(createImage(movieObj));
	const url = 'https://lucky-melodic-particle.glitch.me/movies';
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
	fetch(`https://lucky-melodic-particle.glitch.me/movies/${editID}`, {
	method: 'GET',
}).then(result => result.json().then(final => {
	console.log("showing final object");
	console.log(final);
	//TARGETS THE CORRESPONDING ID'S
	document.getElementById('inputEditTitle').value = final.title;
	document.getElementById('inputEditRating').value = final.rating;
	document.getElementById('inputEditPosterLink').value = final.poster_path;
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
	const url = `https://lucky-melodic-particle.glitch.me/movies/${editID}`;
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
	fetch(`https://lucky-melodic-particle.glitch.me/movies/${deleteID}`, {
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
	const myPromise = fetch(`https://lucky-melodic-particle.glitch.me/movies`).then(firstPull => firstPull.json().then(secondPull => {
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

//===================

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
	const res = await fetch(url)
	const data = await res.json()

	showMovies(data.results)
}

function showMovies(movies) {
	main.innerHTML = ''

	movies.forEach((movie) => {
		const { title, poster_path, vote_average, overview } = movie

		const movieEl = document.createElement('div')
		movieEl.classList.add('movie')

		movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
          <h3 class="card-title"> ${movies.title}</h3>
			<p class="card-text"><strong>Rating</strong>: ${movies.rating}</p>
			<p class="card-text"><strong>Movie ID</strong>: ${movies.id}</p>
			<button class="btn btn-danger  colorBtn" id="${movies.id}">DELETE</button>
        </div>
        `
		main.appendChild(movieEl)
	})
}

function getClassByRate(vote) {
	if(vote >= 8) {
		return 'green'
	} else if(vote >= 5) {
		return 'orange'
	} else {
		return 'red'
	}
}

form.addEventListener('submit', (e) => {
	e.preventDefault()

	const searchTerm = search.value

	if(searchTerm && searchTerm !== '') {
		getMovies(SEARCH_API + searchTerm)

		search.value = ''
	} else {
		window.location.reload()
	}
})


