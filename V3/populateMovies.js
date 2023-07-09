

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

	// const genre = genres.find((g) => g.id === genreId);

	let genreName = '';
	if (genreId === 28) {
		console.log("action")
	} else if (genreId === 12) {
		genreName = 'Adventure';
	} else if (genreId === 16) {
		genreName = 'Animation';
	} else if (genreId === 35) {
		genreName = 'Comedy';
	} else if (genreId === 80) {
		genreName = 'Crime';
	} else if (genreId === 99) {
		genreName = 'Documentary';
	} else if (genreId === 18) {
		genreName = 'Drama';
	} else if (genreId === 10751) {
		genreName = 'Family';
	} else if (genreId === 14) {
		genreName = 'Fantasy';
	} else if (genreId === 36) {
		genreName = 'History';
	} else if (genreId === 27) {
		genreName = 'Horror';
	} else if (genreId === 10402) {
		genreName = 'Music';
	} else if (genreId === 9648) {
		genreName = 'Mystery';
	} else if (genreId === 10749) {
		genreName = 'Romance';
	} else if (genreId === 878) {
		genreName = 'Science-Fiction';
	} else if (genreId === 10770) {
		genreName = 'TV-Movie';
	} else if (genreId === 53) {
		genreName = 'Thriller';
	} else if (genreId === 10752) {
		genreName = 'War';
	} else if (genreId === 37) {
		genreName = 'Western';
	}

	movies.forEach((movie, index) => {
		// Create a new slide every 5th movie
		if (index % 5 === 0) {
			slideIndex++;
			const slide = document.createElement("div");
			slide.classList.add("swiper-slide");
			container.appendChild(slide);
			slide.classList.add("swiper-slide");
			slide.classList.add("justify-content-between");
			slide.classList.add("d-flex","ps-1");
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
		genres.classList.add("card-genres", "pb-1", "m-0");
		// genres.classList.add("pb-1");
		genres.textContent = movie.genre_ids;
		cardBody.appendChild(genres);

		if (movie.genre_ids.includes(genreId)) {
			card.classList.add(`${genreName.toLowerCase()}-swiper`);
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
		buttonsContainer.classList.add("d-flex", "justify-content-evenly", "p-0", "m-0" );
		buttonsContainer.appendChild(button);
		buttonsContainer.appendChild(button2);

		cardBody.appendChild(buttonsContainer);

		card.appendChild(cardBody);
		slide.appendChild(card);

		const genresParagraph = document.createElement("p");
		genresParagraph.classList.add("card-genres", "pb-3", "m-0");

		const genreNames = movie.genre_ids.map(id => {
			let genreName = '';
			if (id === 28) {
				genreName = 'Action';
			} else if (id === 12) {
				genreName = 'Adventure';
			} else if (id === 16) {
				genreName = 'Animation';
			} else if (id === 35) {
				genreName = 'Comedy';
			} else if (id === 80) {
				genreName = 'Crime';
			} else if (id === 99) {
				genreName = 'Documentary';
			} else if (id === 18) {
				genreName = 'Drama';
			} else if (id === 10751) {
				genreName = 'Family';
			} else if (id === 14) {
				genreName = 'Fantasy';
			} else if (id === 36) {
				genreName = 'History';
			} else if (id === 27) {
				genreName = 'Horror';
			} else if (id === 10402) {
				genreName = 'Music';
			} else if (id === 9648) {
				genreName = 'Mystery';
			} else if (id === 10749) {
				genreName = 'Romance';
			} else if (id === 878) {
				genreName = 'Science-Fiction';
			} else if (id === 10770) {
				genreName = 'TV-Movie';
			} else if (id === 53) {
				genreName = 'Thriller';
			} else if (id === 10752) {
				genreName = 'War';
			} else if (id === 37) {
				genreName = 'Western';
			}
			return genreName;
		});

		genresParagraph.textContent = genreNames.join(', ');

		cardBody.appendChild(genresParagraph);

		// Add click event listener to update the image, title, and description
		card.addEventListener("click", function () {
			const clickImg = document.getElementById("clickImg");
			clickImg.src = img2.src;
			clickImg.classList.add("p-1");

			document.getElementById("clickTitle").textContent = movie.original_title;
			document.getElementById("clickAbout").textContent = movie.overview;
			document.getElementById("Rating").textContent = "average rating " + movie.vote_average;

			let genreNames = [];
			for (let i = 0; i < movie.genre_ids.length; i++) {
				let genreName = '';
				if (movie.genre_ids[i] === 28) {
					genreName = 'Action';
				} else if (movie.genre_ids[i] === 12) {
					genreName = 'Adventure';
				} else if (movie.genre_ids[i] === 16) {
					genreName = 'Animation';
				} else if (movie.genre_ids[i] === 35) {
					genreName = 'Comedy';
				} else if (movie.genre_ids[i] === 80) {
					genreName = 'Crime';
				} else if (movie.genre_ids[i] === 99) {
					genreName = 'Documentary';
				} else if (movie.genre_ids[i] === 18) {
					genreName = 'Drama';
				} else if (movie.genre_ids[i] === 10751) {
					genreName = 'Family';
				} else if (movie.genre_ids[i] === 14) {
					genreName = 'Fantasy';
				} else if (movie.genre_ids[i] === 36) {
					genreName = 'History';
				} else if (movie.genre_ids[i] === 27) {
					genreName = 'Horror';
				} else if (movie.genre_ids[i] === 10402) {
					genreName = 'Music';
				} else if (movie.genre_ids[i] === 9648) {
					genreName = 'Mystery';
				} else if (movie.genre_ids[i] === 10749) {
					genreName = 'Romance';
				} else if (movie.genre_ids[i] === 878) {
					genreName = 'Science-Fiction';
				} else if (movie.genre_ids[i] === 10770) {
					genreName = 'TV-Movie';
				} else if (movie.genre_ids[i] === 53) {
					genreName = 'Thriller';
				} else if (movie.genre_ids[i] === 10752) {
					genreName = 'War';
				} else if (movie.genre_ids[i] === 37) {
					genreName = 'Western';
				}
				if (genreName !== '') {
					genreNames.push(genreName);
				}
			}

			document.getElementById("clickGenres").textContent = "Genres: " + genreNames.join(', ');
			document.getElementById("release_date").textContent = "Release Date: " + movie.release_date;
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