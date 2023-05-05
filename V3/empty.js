
/*

5-5-23
15:40

 this function fetches 2 movie genres and creates cards
 populateMovies function was made to shorten loadHorrorAndActionMovies function

* */

import { navbar } from "./navbar.js";
import { TMDB_key } from "../keys.js";

const movie_key = TMDB_key;

function loadHorrorAndActionMovies(horrorSwiperId, actionSwiperId) {
	// Use the Geolocation API to get the user's current position
	navigator.geolocation.getCurrentPosition(
		function (position) {
			const lat = position.coords.latitude;
			const lng = position.coords.longitude;

			// Construct the URL for the API request for horror movies
			const horrorUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${movie_key}&language=en-US
      &sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27
      &with_watch_monetization_types=flatrate&with_release_type.lte=3&with_release_type.gte=2
      &with_theaters=true&with_movie_discovery=true&with_theaters.lat=${lat}&with_theaters.lng=${lng}&with_theaters.radius=100km`;

			// Construct the URL for the API request for action movies
			const actionUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${movie_key}&language=en-US
      &sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28
      &with_watch_monetization_types=flatrate&with_release_type.lte=3&with_release_type.gte=2
      &with_theaters=true&with_movie_discovery=true&with_theaters.lat=${lat}&with_theaters.lng=${lng}&with_theaters.radius=100km`;

			// Make the API requests and handle the responses
			Promise.all([
				fetch(horrorUrl).then((response) => response.json()),
				fetch(actionUrl).then((response) => response.json()),
			])
				.then(([horrorData, actionData]) => {
					// Filter the responses to get only horror and action movies
					const horrorMovies = horrorData.results.filter((movie) =>
						movie.genre_ids.includes(27)
					);
					const actionMovies = actionData.results.filter((movie) =>
						movie.genre_ids.includes(28)
					);

					// Populate the horror movies container
					const horrorSwiperWrapper = document.querySelector(
						`#${horrorSwiperId} .swiper-wrapper`
					);
					populateMovies(horrorSwiperWrapper, horrorMovies);

					// Populate the action movies container
					const actionSwiperWrapper = document.querySelector(
						`#${actionSwiperId} .swiper-wrapper`
					);
					populateMovies(actionSwiperWrapper, actionMovies);

					// Initialize the Swiper instances
					const swiper = new Swiper(`#${horrorSwiperId}`, {
						direction: "horizontal",
					});

					const actionSwiper = new Swiper(`#${actionSwiperId}`, {
						direction: "horizontal",
					});

					swiper.on("reachEnd", function () {
						actionSwiper.slideTo(0);
					});

					actionSwiper.on("reachEnd", function () {
						swiper.slideTo(0);
					});

					document.querySelector("#navbar").innerHTML = navbar;
				})
				.catch((error) => {
					console.log(error);
				});
		},
		function (error) {
			console.log(error);
		}
	);
}

function populateMovies(container, movies, genreClass) {
	container.innerHTML = "";
	let slideIndex = -1;

	movies.forEach((movie, index) => {
		// Create a new slide every 5th movie
		if (index % 5 === 0) {
			slideIndex++;
			const slide = document.createElement("div");
			slide.classList.add("swiper-slide");
			container.appendChild(slide);
			slide.classList.add("swiper-slide");
			slide.classList.add("justify-content-between");
			slide.classList.add("d-flex");
		}

		const slide = container.children[slideIndex];

		// Create a new card for the movie
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

		// Add a different class to the card depending on its genre
		if (movie.genre_ids.includes(27)) {
			card.classList.add("horror-movie");
		} else if (movie.genre_ids.includes(28)) {
			card.classList.add("action-movie");
		} else if (genreClass) {
			card.classList.add(genreClass);
		}

		const button = document.createElement("a");
		button.classList.add("btn", "btn-primary");
		button.href = "#";
		button.textContent = "Add to Favorites";
		cardBody.appendChild(button);

		card.appendChild(cardBody);
		slide.appendChild(card);
	});
}

loadHorrorAndActionMovies("horror-swiper", "action-swiper");
