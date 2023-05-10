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
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search" id="search-form" autocomplete="off">
        <input class="form-control me-2" type="search" id="search-input" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit" id="search-btn">Search</button>
      </form>
    </div>
  </div>
</nav>
`;

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
// let nmovieimage = `https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2`