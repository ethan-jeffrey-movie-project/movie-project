

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