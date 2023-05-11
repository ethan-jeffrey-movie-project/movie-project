//
//
//
// const Rating = ({rating}) => {
// 	let stars = [];
// 	for (let i = 1; i < 11; i++) {
// 		let klass = "fa fa-star";
// 		if (rating >= i && rating !== null) {
// 			klass = "fa fa-star checked";
// 		}
// 		stars.push(
// 			`<i style="direction: ${i%2===0 ? "rtl" : "ltr"}" class="${klass}"></i>`
// 		);
// 	}
// 	return (
// 		`<div class="movie__rating">${stars.join('')}</div>`
// 	);
// };
//
// const MovieInfo = ({name,value}) => (
// 	`<div class="movie__${name}">
//     <span class="info__head">${name.replace(/\b\w/g, l => l.toUpperCase())}</span>
//     ${value}
//   </div>`
// );
//
// const Movie = ({infos}) => {
// 	const cast = infos.cast.map(actor => (
// 		`<p key=${actor}>${actor}</p>`
// 	));
// 	return(
// 		`<div class="movie" style="background-image: url(${infos.poster})">
//       <h2 class="movie__title">${infos.title}</h2>
//       <span class="movie__description">${infos.description}</span>
//       <div class="movie__infos">
//         ${MovieInfo({name: 'duration', value: infos.duration})}
//         ${MovieInfo({name: 'director', value: infos.director})}
//         ${MovieInfo({name: 'year', value: infos.year})}
//         ${MovieInfo({name: 'cast', value: cast.join('')})}
//       </div>
//       <div class="movie__imdb">
//         ${Rating({rating: Math.round(infos.rating)})}
//         <a href=${infos.imdbLink} class="movie__imdb-button" target="_blank"> IMDb </a>
//       </div>
//     </div>`
// 	);
// };
//
// class App {
// 	constructor(infos){
// 		this.infos = infos;
// 		this.render();
// 	}
//
// 	render() {
// 		const moviesList = this.infos.map((movie)=> (
// 			Movie({infos: movie})
// 		));
// 		const container = document.querySelector('.movies__container');
// 		container.innerHTML = moviesList.join('');
// 	}
// }
//
// const infos = [
// 	{
// 		title: 'Thor',
// 		description: 'The powerful, but arrogant god Thor, is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.',
// 		duration: '124',
// 		year: '2011',
// 		director: 'Kenneth Branagh',
// 		cast: ['Chris Hemsworth','Anthony Hopkins','Natalie Portman'],
// 		rating: 8.7,
// 		imdbLink: 'https://www.imdb.com/title/tt0800369/',
// 		poster:  'http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg'
// 	},
// 	{
// 		title: 'The Shawshank Redemption',
// 		description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
// 		duration: '142',
// 		year: '1994',
// 		director: 'Frank Darabont',
// 		cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
// 		rating: 9.3,
// 		imdbLink: 'https://www.imdb.com/title/tt0111161/',
// 		poster: "https://ae01.alicdn.com/kf/HTB1xKI9PFXXXXXAXVXXq6xXFXXXG/Dropship-The-Shawshank-Redemption-Nostalgia-classic-movie-kraft-paper-bar-poster-Retro-Poster-decorative-painting.jpg"
// 	},
// 	{
// 		title: 'The Silence of the Lambs',
// 		description: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.',
// 		duration: '118',
// 		year: '1991',
// 		director: 'Jonathan Demme',
// 		cast: ['Jodie Foster', 'Anthony Hopkins', 'Lawrence A. Bonney'],
// 		rating: 8.6,
// 		imdbLink: 'https://www.imdb.com/title/tt0102926/',
// 		poster: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,677,1000_AL_.jpg"
// 	}]
//
// const app = new App(infos);
//
//
//

const MovieInfo = ({name,value}) => {
	const infoName = name.replace(/\b\w/g, l => l.toUpperCase());
	return (
		`<div class="movie__${name}">
      <span class="info__head">${infoName}</span>
      ${value}
    </div>`
	);
};

// const App = (infos) => {
// 	const moviesList = infos.map((movie) => (
// 		`<div class="movie" style="background-image: url(${movie.poster})">
//       <h2 class="movie__title">${movie.title}</h2>
//       <span class="movie__description">${movie.description}</span>
//       <div class="movie__infos">
//         ${MovieInfo({name: 'duration', value: movie.duration})}
//         ${MovieInfo({name: 'director', value: movie.director})}
//         ${MovieInfo({name: 'year', value: movie.year})}
//         ${MovieInfo({name: 'cast', value: movie.cast.map(actor => `<p>${actor}</p>`).join('')})}
//       </div>
//       <div class="movie__imdb">
//         ${Rating({rating: Math.round(movie.rating)})}
//         <a href=${movie.imdbLink} class="movie__imdb-button" target="_blank"> IMDb </a>
//       </div>
//     </div>`
// 	));
// 	const container = document.querySelector('.movies__container');
// 	container.innerHTML = moviesList.join('');
// };


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
		title: "The Shawshank Redemption",
		description:
			"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
		duration: "142",
		year: "1994",
		director: "Frank Darabont",
		cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
		rating: 9.3,
		imdbLink: "https://www.imdb.com/title/tt0111161/",
		poster:
			"https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
	},
	{
		title: "The Silence of the Lambs",
		description:
			"A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
		duration: "118",
		year: "1991",
		director: "Jonathan Demme",
		cast: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
		rating: 8.6,
		imdbLink: "https://www.imdb.com/title/tt0102926/",
		poster:
			"https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
	},
];

const App = (movies) => {
	const moviesList = movies.map((movie) => Movie({ infos: movie }));
	const container = document.querySelector(".movies__container");
	container.innerHTML = moviesList.join("");
};

App(movies);

