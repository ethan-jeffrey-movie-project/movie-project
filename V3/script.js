// import { navbar } from "./navbar.js";
// import {TMDB_key} from "../keys.js";
// // import { populateCards } from "./populateCards.js";
//
// const movie_key = TMDB_key;
//
// function loadHorrorMovies(swiperId) {
// 	// Use the Geolocation API to get the user's current position
// 	navigator.geolocation.getCurrentPosition(function (position) {
// 		const lat = position.coords.latitude;
// 		const lng = position.coords.longitude;
//
// 		// Construct the URL for the API request
// 		const url = `https://api.themoviedb.org/3/discover/movie?api_key=${movie_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate&with_release_type.lte=3&with_release_type.gte=2&with_theaters=true&with_movie_discovery=true&with_theaters.lat=${lat}&with_theaters.lng=${lng}&with_theaters.radius=100km`;
//
// 		// Make the API request and handle the response
// 		fetch(url)
// 			.then((response) => response.json())
// 			.then((data) => {
// 				// Filter the response to get only horror movies
// 				const movies = data.results.filter((movie) => movie.genre_ids.includes(27));
// 				const swiperWrapper = document.querySelector(`#${swiperId} .swiper-wrapper`);
// 				swiperWrapper.innerHTML = "";
//
// 				let slideIndex = -1;
// 				movies.forEach((movie, index) => {
// 					// Create a new slide every 5th movie
// 					if (index % 5 === 0) {
// 						slideIndex++;
// 						const slide = document.createElement("div");
// 						slide.classList.add("swiper-slide");
// 						swiperWrapper.appendChild(slide);
// 						slide.classList.add("swiper-slide");
// 						slide.classList.add("justify-content-between");
// 						slide.classList.add("d-flex");
// 					}
//
// 					const slide = swiperWrapper.children[slideIndex];
//
// 					// Create a new card for the movie
// 					const card = document.createElement("div");
// 					card.classList.add("card");
// 					card.style.maxWidth = "19%"
//
// 					const img = document.createElement("img");
// 					img.classList.add("card-img-top");
// 					img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
// 					img.style.maxHeight = "90%"
// 					img.style.maxWidth = "150px"
// 					img.alt = movie.original_title;
// 					card.appendChild(img);
//
// 					const cardBody = document.createElement("div");
// 					cardBody.classList.add("card-body");
//
// 					const title = document.createElement("h5");
// 					title.classList.add("card-title");
// 					title.textContent = movie.original_title;
// 					cardBody.appendChild(title);
//
// 					const description = document.createElement("p");
// 					description.classList.add("card-text");
// 					description.textContent = movie.overview;
// 					cardBody.appendChild(description);
//
// 					const button = document.createElement("a");
// 					button.classList.add("btn", "btn-primary");
// 					button.href = "#";
// 					button.textContent = "Add to Favorites";
// 					cardBody.appendChild(button);
//
// 					card.appendChild(cardBody);
// 					slide.appendChild(card);
// 				});
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 	}, function (error) {
// 		console.log(error);
// 	});
//
// 	// Initialize the Swiper instances
// 	var swiper = new Swiper(`#${swiperId}`, {
// 		direction: "horizontal",
// 	});
//
// 	var actionSwiper = new Swiper("#action-swiper", {
// 		direction: "horizontal",
// 	});
//
// 	swiper.on("reachEnd", function () {
// 		actionSwiper.slideTo(0);
// 	});
//
// 	// Set up the "reachEnd" event listeners for the Swiper instances
// 	actionSwiper.on("reachEnd", function () {
// 		swiper.slideTo(0);
// 	});
//
// 	document.querySelector("#navbar").innerHTML = navbar;
// }
//
//
// loadHorrorMovies("horror-swiper");
//
//
//


import { navbar } from "./navbar.js";
import {TMDB_key} from "../keys.js";
// import { populateCards } from "./populateCards.js";

const movie_key = TMDB_key;

function loadHorrorMovies(swiperId, page = 2) {
	navigator.geolocation.getCurrentPosition(function (position) {
		const lat = position.coords.latitude;
		const lng = position.coords.longitude;

		const url = `https://api.themoviedb.org/3/discover/movie?api_key=${movie_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=27&with_watch_monetization_types=flatrate&with_release_type.lte=3&with_release_type.gte=2&with_theaters=true&with_movie_discovery=true&with_theaters.lat=${lat}&with_theaters.lng=${lng}&with_theaters.radius=100km`;

		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				const movies = data.results.filter((movie) => movie.genre_ids.includes(27));

				movies.forEach((movie) => {
					const card = createMovieCard(movie);
					const swiperWrapper = document.querySelector(`#${swiperId} .swiper-wrapper`);
					swiperWrapper.appendChild(card);
				});

				var swiper = new Swiper(`#${swiperId}`, {
					direction: "horizontal",
				});

				swiper.on("reachEnd", function () {
					loadHorrorMovies(swiperId, page + 1);
				});

				document.querySelector("#navbar").innerHTML = navbar;
			})
			.catch((error) => {
				console.log(error);
			});
	}, function (error) {
		console.log(error);
	});
}

// loadHorrorMovies("horror-Swiper",1)
function createMovieCard(movie) {
	const card = document.createElement("div");
	card.classList.add("card");
	card.style.maxWidth = "19%";

	const img = document.createElement("img");
	img.classList.add("card-img-top");
	img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
	img.style.maxHeight = "90%";
	img.style.maxWidth = "150px";
	img.alt = movie.original_title;
	card.appendChild(img);

	const cardBody = document.createElement("div");
	cardBody.classList.add("card-body");

	const title = document.createElement("h5");
	title.classList.add("card-title");
	title.textContent = movie.original_title;
	cardBody.appendChild(title);

	const description = document.createElement("p");
	description.classList.add("card-text");
	description.textContent = movie.overview;
	cardBody.appendChild(description);

	const button = document.createElement("a");
	button.classList.add("btn", "btn-primary");
	button.href = "#";
	button.textContent = "Add to Favorites";
	cardBody.appendChild(button);

	card.appendChild(cardBody);

	const slide = document.createElement("div");
	slide.classList.add("swiper-slide", "justify-content-between", "d-flex");
	slide.appendChild(card);

	return slide;
}


loadHorrorMovies("horror-swiper",1);



