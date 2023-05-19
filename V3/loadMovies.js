import {navbar} from "./navbar.js";
import {populateMovies} from "./populateMovies.js";
import {handleSearch} from "./navbar.js";
import { TMDB_key } from "../keys.js";

const movie_key = TMDB_key;

export function loadMovies(swiperIds, genreIds) {
	// Use the Geolocation API to get the user's current position
	navigator.geolocation.getCurrentPosition(
		function (position) {
			const lat = position.coords.latitude;
			const lng = position.coords.longitude;

			// Construct the URLs for the API requests for the desired genres
			const genreUrls = genreIds.map((genreId) => {
				return `https://api.themoviedb.org/3/discover/movie?api_key=${movie_key}&language=en-US
          			&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}
          			&with_watch_monetization_types=flatrate&with_release_type.lte=3&with_release_type.gte=2
          			&with_theaters=true&with_movie_discovery=true&with_theaters.lat=${lat}&with_theaters.lng=${lng}&with_theaters.radius=100km`;
			});

			// Make the API requests and handle the responses
			Promise.all(genreUrls.map((url) => fetch(url).then((response) => response.json())))
				.then((responses) => {
					console.log(responses);
					// Filter the responses to get the movies for each genre
					const genreMovies = responses.map((response, index) => {
						return response.results.filter((movie) => movie.genre_ids.includes(genreIds[index]));
					});

					// Populate the swiper containers for each genre
					swiperIds.forEach((swiperId, index) => {
						const genreSwiperWrapper = document.querySelector(`#${swiperId} .swiper-wrapper`);
						populateMovies(genreSwiperWrapper, genreMovies[index], genreIds[index]);

						// Initialize the Swiper instances
						const swiper = new Swiper(`#${swiperId}`, {
							direction: "horizontal",
						});

						swiper.on("reachEnd", function () {
							swiper.slideTo(0);
						});
					});
					//<!--seperate this into anothe rfunction start-->

					// Add event listener to the search button after it has been added to the DOM
					setTimeout(() => {
						const searchBtn = document.querySelector('#search-btn');
						if (searchBtn) {
							searchBtn.addEventListener('click', handleSearch);
						}
					}, 0);
					document.querySelector("#navbar").innerHTML = navbar;
				})
				.catch((error) => {
					console.log(error);
				});
			//<!--seperate this into anothe rfunction end-->

		},
		function (error) {
			console.log(error);
		}
	);
}
