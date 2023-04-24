import {TMDB_key} from "../keys.js";

import {navbar} from "./navbar.js";

const movie_key = TMDB_key;

navigator.geolocation.getCurrentPosition(function(position) {
	var lat = position.coords.latitude;
	var lng = position.coords.longitude;

	// build URL with API parameters
	const url = `https://api.themoviedb.org/3/discover/movie/?api_key=${movie_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_release_type=3|2&release_date.lte=now&with_original_language=en&page=1&primary_release_date.lte=now&primary_release_date.gte=now-7d&timezone=America/New_York&with_watch_monetization_types=flatrate&with_watch_providers=8&watch_region=US&watch_provider=8&with_companies=174&with_crew=2654,2557&with_cast=16828,1626610&with_theaters=true&with_movie_discovery=true&with_release_type.lte=3&with_theaters.lat=${lat}&with_theaters.lng=${lng}&with_theaters.radius=100km`;

	// const url = `https://api.themoviedb.org/3/movie/popular?api_key=${movie_key}&language=en-US&page=1`;

	// make a fetch request to the TMDB API
	fetch(url)
		.then(response => response.json())
		.then(data => {
			// handle successful response from TMDB API
			console.log(data);
			console.log(lat);
			console.log(lng);
		})
		.catch(error => {
			// handle error response from TMDB API
			console.log(error);
		});
}, function(error) {
	// handle error retrieving user's location
	console.log(error);
});

// fetch('navbar.html')
// 	.then(response => response.text())
// 	.then(html => {
// 		const navbarElement = document.querySelector('#navbar');
// 		navbarElement.innerHTML = html;
// 	})
// 	.catch(error => console.log(error));


var swiper = new Swiper(".mySwiper", {
	scrollbar: {
		el: ".swiper-scrollbar",
		hide: true,
	},
});


document.querySelector('#navbar').innerHTML = navbar;