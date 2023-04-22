//
// // get user's location using the HTML5 geolocation API
// navigator.geolocation.getCurrentPosition(function(position) {
// 	var lat = position.coords.latitude;
// 	var lng = position.coords.longitude;
// 	console.log(lat);
// 	console.log(lng);
//
// 	// make AJAX request to the TMDB API to retrieve theaters near the user's location
// 	$.ajax({
// 		url: "https://api.themoviedb.org/3/movie/now_playing",
// 		data: {
// 			api_key: "",
// 			language: "en-US",
// 			page: 1,
// 			region: "US",
// 			append_to_response: "theaters",
// 			include_adult: false,
// 			include_video: false,
// 			with_release_type: "3|2",
// 			"theaters.lat": lat,
// 			"theaters.lng": lng,
// 			"theaters.distance": "20km"
// 		},
// 		success: function(result) {
// 			// handle successful response from TMDB API
// 			console.log(result);
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
