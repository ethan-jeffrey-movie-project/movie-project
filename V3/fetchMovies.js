/*

5-5-23
1:33am

 this function fetches all the movies depending on their genreId in the array
 the cards need to be stylized so there can be multiple movie cards showing

* */



// import { navbar } from "./navbar.js";
// import {TMDB_key} from "../keys.js";
//
// import { populateCards } from "./populateCards.js";// comment this out
//
// const movie_key = TMDB_key;
//
//
// export const genres = [
// 	{ id: 27, name: "Action" },
// 	{ id: 12, name: "Adventure" },
// 	{ id: 16, name: "Animation" },
// 	{ id: 35, name: "Comedy" },
// 	{ id: 80, name: "Crime" },
// 	{ id: 99, name: "Documentary" },
// 	{ id: 18, name: "Drama" },
// 	{ id: 10751, name: "Family" },
// 	{ id: 14, name: "Fantasy" },
// 	{ id: 36, name: "History" },
// 	{ id: 27, name: "Horror" },
// 	{ id: 10402, name: "Music" },
// 	{ id: 9648, name: "Mystery" },
// 	{ id: 10749, name: "Romance" },
// 	{ id: 878, name: "Science Fiction" },
// 	{ id: 10770, name: "TV Movie" },
// 	{ id: 53, name: "Thriller" },
// 	{ id: 10752, name: "War" },
// 	{ id: 37, name: "Western" }
// ];
//
// export async function fetchMoviesByGenre(genre) {
// 	const url = `https://api.themoviedb.org/3/discover/movie?api_key=${movie_key}&language=en-US
//   &sort_by=popularity.desc
//   &include_adult=false
//   &include_video=false
//   &page=1
//   &with_genres=${genre}`;
//
// 	const response = await fetch(url);
// 	const data = await response.json();
// 	return data.results;
// }
//
//
// export async function loadMoviesByGenres() {
// 	// iterate over the genres array
// 	for (let i = 0; i < genres.length; i++) {
// 		const genre = genres[i];
// 		const movies = await fetchMoviesByGenre(genre.id);
// 		let isModified = movies.length > 0;
//
// 		// display movies for this genre
// 		const swiperId = `#${genre.name.toLowerCase()}-swiper`;
// 		const swiperWrapper = document.querySelector(`${swiperId} .swiper-wrapper`);
// 		swiperWrapper.innerHTML = "";
//
// 		let slideIndex = -1;
// 		movies.forEach((movie, index) => {
// 			// Create a new slide every 5th movie
// 			if (index % 5 === 0) {
// 				slideIndex++;
// 				const slide = document.createElement("div");
// 				slide.classList.add("swiper-slide");
// 				swiperWrapper.appendChild(slide);
// 				slide.classList.add("swiper-slide");
// 				slide.classList.add("justify-content-between");
// 				slide.classList.add("d-flex");
// 			}
//
// 			const slide = swiperWrapper.children[slideIndex];
//
// 			// Create a new card for the movie
// 			const card = document.createElement("div");
// 			card.classList.add("card");
// 			card.style.maxWidth = "19%";
//
// 			const img = document.createElement("img");
// 			img.classList.add("card-img-top");
// 			img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
// 			img.style.maxHeight = "90%";
// 			img.style.maxWidth = "150px";
// 			img.alt = movie.original_title;
// 			card.appendChild(img);
//
// 			const cardBody = document.createElement("div");
// 			cardBody.classList.add("card-body");
//
// 			const title = document.createElement("h5");
// 			title.classList.add("card-title");
// 			title.textContent = movie.original_title;
// 			cardBody.appendChild(title);
//
// 			const description = document.createElement("p");
// 			description.classList.add("card-text");
// 			description.textContent = movie.overview;
// 			cardBody.appendChild(description);
//
// 			const button = document.createElement("a");
// 			button.classList.add("btn", "btn-primary");
// 			button.href = "#";
// 			button.textContent = "Add to Favorites";
// 			cardBody.appendChild(button);
//
// 			card.appendChild(cardBody);
// 			slide.appendChild(card);
// 		});
//
// 		// Initialize the Swiper instances for this genre
// 		var swiper = new Swiper(swiperId, {
// 			direction: "horizontal",
// 		});
//
// 		// Add the current genre swiper to genreSwiper array
// 		genreSwiper.push(swiper);
//
// 		// Set up the "reachEnd" event listeners for the Swiper instances
// 		swiper.on("reachEnd", function () {
// 			const nextSwiperIndex = (i + 1) % genres.length;
// 			genreSwiper[nextSwiperIndex].slideTo(0);
// 		});
// 	}
//
// 	document.querySelector("#navbar").innerHTML = navbar;
// }

