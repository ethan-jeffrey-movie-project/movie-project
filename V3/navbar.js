import { TMDB_key } from "../keys.js";
import {populateMovies} from "./populateMovies.js";

const movie_key = TMDB_key;

export const navbar = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" style="overflow-x: auto; white-space: nowrap">
    
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="index.html" id="discover-movies-link">Discover Movies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Favorites.html" id="favorites-link">Favorites</a>
        </li>
        
      </ul>
      
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item active">
      <a class="nav-link" href="#action">action</a>
    </li>
    <li class="nav-item active">
<!--      <a class="nav-link" href="#adventure">adventure</a>-->
<!--    </li>-->
<!--    <li class="nav-item active">-->
<!--      <a class="nav-link" href="#animation">animation</a>-->
<!--    </li>-->
<!--    <li class="nav-item active">-->
<!--      <a class="nav-link" href="#comedy">comedy</a>-->
<!--    </li>-->
<!--    <li class="nav-item active">-->
<!--      <a class="nav-link" href="#crime">crime</a>-->
<!--    </li>-->
<!--    <li class="nav-item active">-->
<!--      <a class="nav-link" href="#documentary">documentary</a>-->
<!--    </li>-->
<!--    <li class="nav-item active">-->
<!--      <a class="nav-link" href="#drama">drama</a>-->
<!--    </li>-->
<!--    <li class="nav-item active">-->
<!--      <a class="nav-link" href="#family">family</a>-->
<!--    </li>-->
<!--    <li class="nav-item active">-->
<!--      <a class="nav-link" href="#fantasy">fantasy</a>-->
<!--    </li>-->
<!--    <li class="nav-item active">-->
<!--      <a class="nav-link" href="#history">history</a>-->
<!--    </li>-->
<!--    <li class="nav-item active">-->
<!--      <a class="nav-link" href="#horror">horror</a>-->
<!--    </li>-->
<!--    <li class="nav-item active">-->
<!--      <a class="nav-link" href="#music">music</a>-->
<!--    </li>-->
<!--    <li class="nav-item active">-->
<!--      <a class="nav-link" href="#mystery">mystery</a>-->
<!--    </li>-->
<!--    <li class="nav-item active">-->
<!--      <a class="nav-link" href="#romance">romance</a>-->
<!--    </li>-->
<!--    <li class="nav-item active">-->
<!--      <a class="nav-link" href="#science-fiction">science-fiction</a>-->
<!--    </li>-->
<!--    <li class="nav-item active">-->
<!--      <a class="nav-link" href="#tv-movie">tv-movie</a>-->
<!--    </li>-->
<!--    <li class="nav-item active">-->
<!--      <a class="nav-link" href="#thriller">thriller</a>-->
<!--    </li>-->
<!--    <li class="nav-item active">-->
<!--      <a class="nav-link" href="#war">war</a>-->
<!--    </li>-->
<!--    <li class="nav-item active">-->
<!--      <a class="nav-link" href="#western">western</a>-->
<!--    </li>-->
<!--     -->
<!--      </ul>-->
      
      
      <form class="d-flex" role="search" id="search-form" autocomplete="off">
        <input class="form-control me-2" type="search" id="search-input" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit" id="search-btn">Search</button>
      </form>
    </div>
  </div>
</nav>
`;


export function highlightActiveLink() {
	const currentPage = window.location.pathname;
	const discoverMoviesLink = document.querySelector("#discover-movies-link");
	const favoritesLink = document.querySelector("#favorites-link");

	if (currentPage.includes("index.html")) {
		discoverMoviesLink.classList.add("active");
		favoritesLink.classList.remove("active");
	} else if (currentPage.includes("Favorites.html")) {
		discoverMoviesLink.classList.remove("active");
		favoritesLink.classList.add("active");
	}
}

export function handleSearch(swiper) {
	const navbarContainer = document.querySelector("#navbar");
	navbarContainer.innerHTML = navbar;

	const searchForm = document.querySelector("#search-form");
	const searchInput = document.querySelector("#search-input");

	searchForm.addEventListener("submit", (event) => {
		event.preventDefault();

		const searchTerm = searchInput.value;
		const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${movie_key}&language=en-US
    &query=${searchTerm}&page=1&include_adult=false`;

		fetch(apiUrl)
			.then((response) => response.json())
			.then((data) => {
				const searchSwiperWrapper = document.querySelector(
					"#search-swiper .swiper-wrapper"
				);
				populateMovies(searchSwiperWrapper, data.results, null, swiper);

				// Initialize the Swiper instance
				swiper.update();
			})
			.catch((error) => console.log(error));
	});
}
