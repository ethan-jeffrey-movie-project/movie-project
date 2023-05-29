

const MovieInfo = ({name,value}) => {
	const infoName = name.replace(/\b\w/g, l => l.toUpperCase());
	return (
		`<div class="movie__${name}">
      <span class="info__head">${infoName}</span>
      ${value}
    </div>`
	);
};



function getMovieRating(rating) {
	let stars = [];
	for (let i = 1; i < 11; i++) {
		let klass = "fa fa-star";
		if (rating >= i && rating !== null) {
			klass = "fa fa-star checked";
		}
		stars.push(
			`<i style="direction: ${i % 2 === 0 ? "rtl" : "ltr"}" class="${klass}"></i>`
		);
	}
	return `<div class="movie__rating">${stars.join("")}</div>`;
}


const Movie = ({ infos }) => {
	const cast = infos.cast.map(actor => `<p key=${actor}>${actor}</p>`).join("");
	const rating = getMovieRating(Math.round(infos.rating));
	return `
    <div class="movie" style="background-image: url(${infos.poster})">
      <h2 class="movie__title">${infos.title}</h2>
      <span class="movie__description">${infos.description}</span>
      <div class="movie__infos">
        ${MovieInfo({ name: "duration", value: infos.duration })}
        ${MovieInfo({ name: "director", value: infos.director })}
        ${MovieInfo({ name: "year", value: infos.year })}
        ${MovieInfo({ name: "cast", value: cast })}
      </div>
      <div class="movie__imdb">
        ${rating}
        <a href=${infos.imdbLink} class="movie__imdb-button" target="_blank"> IMDb </a>
      </div>
    </div>
  `;
};

const movies = [
	{
		title: "Thor",
		description:
			"The powerful, but arrogant god Thor, is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
		duration: "124",
		year: "2011",
		director: "Kenneth Branagh",
		cast: ["Chris Hemsworth", "Anthony Hopkins", "Natalie Portman"],
		rating: 8.7,
		imdbLink: "https://www.imdb.com/title/tt0800369/",
		poster:
			"http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg",
	},
	{
		title: "Thor",
		description:
			"The powerful, but arrogant god Thor, is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
		duration: "124",
		year: "2011",
		director: "Kenneth Branagh",
		cast: ["Chris Hemsworth", "Anthony Hopkins", "Natalie Portman"],
		rating: 8.7,
		imdbLink: "https://www.imdb.com/title/tt0800369/",
		poster:
			"http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg",
	},
	{
		title: "Thor",
		description:
			"The powerful, but arrogant god Thor, is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
		duration: "124",
		year: "2011",
		director: "Kenneth Branagh",
		cast: ["Chris Hemsworth", "Anthony Hopkins", "Natalie Portman"],
		rating: 8.7,
		imdbLink: "https://www.imdb.com/title/tt0800369/",
		poster:
			"http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg",
	},

];

const App = (movies) => {
	const moviesList = movies.map((movie) => Movie({ infos: movie }));
	const container = document.querySelector(".movies__container");
	container.innerHTML = moviesList.join("");
};

App(movies);

