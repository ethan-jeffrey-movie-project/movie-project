// // get user's location using the HTML5 geolocation API
// navigator.geolocation.getCurrentPosition(function(position) {
// 	var lat = position.coords.latitude;
// 	var lng = position.coords.longitude;
//
// 	// make AJAX request to the TMDB API to discover movies playing in theaters near the user's location
// 	$.ajax({
// 		url: "https://api.themoviedb.org/3/discover/movie",
// 		data: {
// 			api_key: "",
// 			language: "en-US",
// 			sort_by: "popularity.desc",
// 			include_adult: false,
// 			include_video: false,
// 			"with_release_type": "3|2",
// 			"release_date.lte": "now",
// 			"with_original_language": "en",
// 			"page": 1,
// 			"primary_release_date.lte": "now",
// 			"primary_release_date.gte": "now-7d",
// 			"timezone": "America/New_York",
// 			"with_watch_monetization_types": "flatrate",
// 			"with_watch_providers": "8",
// 			"watch_region": "US",
// 			"watch_provider": "8",
// 			"with_companies": "174", // Walt Disney Pictures
// 			"with_crew": "2654,2557", // Directors: Russo Brothers
// 			"with_cast": "16828,1626610", // Actors: Robert Downey Jr., Tom Holland
// 			"with_theaters": true,
// 			"with_movie_discovery": true,
// 			"with_release_type.lte": "3",
// 			"with_theaters.lat": lat,
// 			"with_theaters.lng": lng,
// 			"with_theaters.radius": "10km"
// 		},
// 		success: function(result) {
// 			// handle successful response from TMDB API
// 			console.log(result);
// 			console.log(lat);
// 			console.log(lng);
// 		},
// 		error: function(error) {
// 			// handle error response from TMDB API
// 			console.log(error);
// 		}
// 	});
// }, function(error) {
// 	// handle error retrieving user's location
// 	console.log(error);
// });
