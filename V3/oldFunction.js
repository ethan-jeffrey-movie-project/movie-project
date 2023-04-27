//
//
// import { navbar } from "./navbar.js";
// // import { populateCards } from "./populateCards.js";
// import {TMDB_key} from "../keys.js";
//
// const movie_key = TMDB_key;
//
// function loadHorrorMovies(swiperId) {
// 	navigator.geolocation.getCurrentPosition(function (position) {
// 		const lat = position.coords.latitude;
// 		const lng = position.coords.longitude;
//
// 		const url = `https://api.themoviedb.org/3/discover/movie?api_key=${movie_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate&with_release_type.lte=3&with_release_type.gte=2&with_theaters=true&with_movie_discovery=true&with_theaters.lat=${lat}&with_theaters.lng=${lng}&with_theaters.radius=100km`;
//
// 		fetch(url)
// 			.then((response) => response.json())
// 			.then((data) => {
// 				const movies = data.results.filter((movie) => movie.genre_ids.includes(27));
// 				const swiperWrapper = document.querySelector(`#${swiperId} .swiper-wrapper`);
// 				swiperWrapper.innerHTML = "";
//
// 				let slideIndex = -1;
// 				movies.forEach((movie, index) => {
// 					if (index % 4 === 0) {
// 						slideIndex++;
// 						const slide = document.createElement("div");
// 						slide.classList.add("swiper-slide");
// 						slide.classList.add("justify-content-between");
// 						slide.classList.add("d-flex");
//
// 						swiperWrapper.appendChild(slide);
// 					}
//
// 					const slide = swiperWrapper.children[slideIndex];
//
// 					const card = document.createElement("div");
// 					card.classList.add("card");
//
// 					const img = document.createElement("img");
// 					img.classList.add("card-img-top");
// 					img.src = `https://image.tmdb.org/t/p/w92/${movie.poster_path}`;
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
// 	actionSwiper.on("reachEnd", function () {
// 		swiper.slideTo(0);
// 	});
//
// 	document.querySelector("#navbar").innerHTML = navbar;
// }
//
//
// loadHorrorMovies("horror-swiper");