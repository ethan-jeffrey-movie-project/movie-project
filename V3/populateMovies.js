

import { TMDB_key } from "../keys.js";

const movie_key = TMDB_key;

export const genres = [
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

export const swiperIds = genres.map((genre) => `${genre.name.toLowerCase()}-swiper`);
export const genreIds = genres.map((genre) => genre.id);

export function populateMovies(container, movies, genreId) {
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
		img.style.height = "100%"; // Update to take up the whole view
		img.style.width = "100%"; // Update to take up the whole view
		img.alt = movie.original_title;
		if (movie.poster_path) {
			img.src = `https://image.tmdb.org/t/p/w1280/${movie.poster_path}`;
		} else {
			img.src =
				"https://images.pexels.com/photos/695644/pexels-photo-695644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
		}
		card.appendChild(img);

		const img2 = document.createElement("img");
		img2.classList.add("card-img-top");
		img2.style.maxHeight = "90%";
		img2.style.maxWidth = "150px";
		img2.alt = movie.original_title;
		if (movie.backdrop_path) {
			img2.src = `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`;
		} else {
			img2.src =
				"https://images.pexels.com/photos/695644/pexels-photo-695644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
		}
		// card.appendChild(img2);

		const cardBody = document.createElement("div");
		cardBody.classList.add("p-3");
		cardBody.classList.add("card-body");
		cardBody.style.backgroundColor = "var(--color-1)"

		const title = document.createElement("h6");
		title.classList.add("card-title");
		title.textContent = movie.original_title;
		cardBody.appendChild(title);

		const rating = document.createElement("p");
		rating.classList.add("card-rating");
		rating.textContent = movie.vote_average;
		cardBody.appendChild(rating);

		const genres = document.createElement("p");
		genres.classList.add("card-genres", "pb-3", "m-0");
		// genres.classList.add("pb-1");
		genres.textContent = movie.genre_ids;
		cardBody.appendChild(genres);

		// const description = document.createElement("p");
		// description.classList.add("card-text");
		// description.textContent = movie.overview;
		// cardBody.appendChild(description);
		//
		// const id = document.createElement("p");
		// id.classList.add("card-text");
		// id.textContent = movie.id;
		// cardBody.appendChild(id);

		// Add a different class to the card depending on its genre
		if (movie.genre_ids.includes(genreId)) {
			card.classList.add(`${genre.name.toLowerCase()}-swiper`);
		}

		const button = document.createElement("a");
		button.classList.add("btn", "btn-secondary", "blue", "p-1");
		button.href = "javascript:void()";
		button.textContent = "ignore";

		const button2 = document.createElement("a");
		button2.classList.add("btn", "btn-secondary", "blue", "p-1");
		button2.href = "#";
		button2.textContent = "Save";
		button2.addEventListener("click", function () {
			saveMovie(movie.id);
		});

		const buttonsContainer = document.createElement("div");
		buttonsContainer.classList.add("d-flex", "justify-content-evenly", "p-2" );
		buttonsContainer.appendChild(button);
		buttonsContainer.appendChild(button2);

		cardBody.appendChild(buttonsContainer);

		card.appendChild(cardBody);
		slide.appendChild(card);

		// Add click event listener to update the image, title, and description
		card.addEventListener("click", function () {
			const clickImg = document.getElementById("clickImg");
			clickImg.src = img2.src;
			clickImg.classList.add("p-1");

			document.getElementById("clickTitle").textContent = movie.original_title;
			document.getElementById("clickAbout").textContent = movie.overview;

			const RATING = document.getElementById("rating").textContent = movie.vote_average;
			RATING.classList.style.backgroundColor = "var(--color-1)";

			document.getElementById("genres").textContent = movie.genre_ids;
			document.getElementById("release_date").textContent = movie.release_date;
		});


	});
}

export function saveMovie(movieId) {
	console.log(movieId)
	fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${movie_key}&language=en-US`)
		.then(response => response.json())
		.then(movie => {
			console.log(movie);
			// Add the movie to the JSON file
			// Replace <json_file_url> with the URL of the JSON file on your server
			fetch("https://vivid-flawless-almandine.glitch.me/movies", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(movie)
			})
				.then(response => response.json())
				.then(data => console.log(data))
				.catch(error => console.log(error));
		})
		.catch(error => console.log(error));
}



/*

	backdrop: https://image.tmdb.org/t/p/w1280/suw8eyL3YwE4wfzPQ0cLR02k0Gh.jpg

	poster path: https://image.tmdb.org/t/p/w1280/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg

*/

// http://localhost:63342/movie-project/V3/SavedMovies.json


// https://image.tmdb.org/t/p/w1280/zPEDfWece7gg1I0904KFFVUq5mg.jpg

// w300
// w780
// w1280
// original