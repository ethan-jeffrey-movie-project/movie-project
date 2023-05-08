
/*

5-7-23
2311


* */




import { navbar } from "./navbar.js";
import { TMDB_key } from "../keys.js";

const movie_key = TMDB_key;

function loadHorrorAndActionMovies(swiperIds, genreIds) {
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

const genres = [
	{ id: 28, name: "Action" },
	{ id: 12, name: "Adventure" },
	{ id: 16, name: "Animation" },
	{ id: 35, name: "Comedy" },
	{ id: 80, name: "Crime" },
	{ id: 99, name: "Documentary" },
	{ id: 18, name: "Drama" },
	{ id: 10751, name: "Family" },
	{ id: 14, name: "Fantasy" },
	{ id: 36, name: "History" },
	{ id: 27, name: "Horror" },
	{ id: 10402, name: "Music" },
	{ id: 9648, name: "Mystery" },
	{ id: 10749, name: "Romance" },
	{ id: 878, name: "Science-Fiction" },
	{ id: 10770, name: "TV-Movie" },
	{ id: 53, name: "Thriller" },
	{ id: 10752, name: "War" },
	{ id: 37, name: "Western" }
];

const swiperIds = genres.map((genre) => `${genre.name.toLowerCase()}-swiper`);
const genreIds = genres.map((genre) => genre.id);

function populateMovies(container, movies, genreId) {
	container.innerHTML = "";
	let slideIndex = -1;

	const genre = genres.find((g) => g.id === genreId);

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
		if (movie.genre_ids.includes(genreId)) {
			card.classList.add(`${genre.name.toLowerCase()}-swiper`);
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

loadHorrorAndActionMovies(swiperIds,genreIds)