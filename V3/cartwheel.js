//
//
// 	/**
// 	* Prize data will space out evenly on the deal wheel based on the amount of items available.
// 	* @param text [string] name of the prize
// 	* @param color [string] background color of the prize
// 	* @param reaction ['resting' | 'dancing' | 'laughing' | 'shocked'] Sets the reaper's animated reaction
// 	*/
//
// 	const prizes = [
//
// 	{
// 		text: "10% Off Sticker Price",
// 		color: "hsl(197 30% 43%)",
// 		reaction: "dancing"
// 	},
// 	{
// 		text: "Free Car",
// 		color: "hsl(173 58% 39%)",
// 		reaction: "shocked"
// 	},
// 	{
// 		text: "No Money Down",
// 		color: "hsl(43 74% 66%)",
// 		reaction: "shocked"
// 	},
// 	{
// 		text: "Half Off Sticker Price",
// 		color: "hsl(27 87% 67%)",
// 		reaction: "shocked"
// 	},
// 	{
// 		text: "Free DIY Carwash",
// 		color: "hsl(12 76% 61%)",
// 		reaction: "dancing"
// 	},
// 	{
// 		text: "Eternal Damnation",
// 		color: "hsl(350 60% 52%)",
// 		reaction: "laughing"
// 	},
// 	{
// 		text: "Used Travel Mug",
// 		color: "hsl(91 43% 54%)",
// 		reaction: "laughing"
// 	},
// 	{
// 		text: "One Solid Hug",
// 		color: "hsl(140 36% 74%)",
// 		reaction: "dancing"
// 	}
// 	];
//
// 	const wheel = document.querySelector(".deal-wheel");
// 	const spinner = wheel.querySelector(".spinner");
// 	const trigger = wheel.querySelector(".btn-spin");
// 	const ticker = wheel.querySelector(".ticker");
// 	const reaper = wheel.querySelector(".grim-reaper");
// 	const prizeSlice = 360 / prizes.length;
// 	const prizeOffset = Math.floor(180 / prizes.length);
// 	const spinClass = "is-spinning";
// 	const selectedClass = "selected";
// 	const spinnerStyles = window.getComputedStyle(spinner);
// 	let tickerAnim;
// 	let rotation = 0;
// 	let currentSlice = 0;
// 	let prizeNodes;
//
// 	const createPrizeNodes = () => {
// 	prizes.forEach(({ text, color, reaction }, i) => {
// 		const rotation = ((prizeSlice * i) * -1) - prizeOffset;
//
// 		spinner.insertAdjacentHTML(
// 			"beforeend",
// 			`<li class="prize" data-reaction=${reaction} style="--rotate: ${rotation}deg">
//         <span class="text">${text}</span>
//       </li>`
// 		);
// 	});
// };
//
// 	const createConicGradient = () => {
// 	spinner.setAttribute(
// 		"style",
// 		`background: conic-gradient(
//       from -90deg,
//       ${prizes
// 			.map(({ color }, i) => `${color} 0 ${(100 / prizes.length) * (prizes.length - i)}%`)
// 			.reverse()
// 		}
//     );`
// 	);
// };
//
//
// 	const setupWheel = () => {
// 	createConicGradient();
// 	createPrizeNodes();
// 	prizeNodes = wheel.querySelectorAll(".prize");
// };
//
// 	const spinertia = (min, max) => {
// 	min = Math.ceil(min);
// 	max = Math.floor(max);
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// };
//
// 	const runTickerAnimation = () => {
// 	const values = spinnerStyles.transform.split("(")[1].split(")")[0].split(",");
// 	const a = values[0];
// 	const b = values[1];
// 	let rad = Math.atan2(b, a);
//
// 	if (rad < 0) rad += (2 * Math.PI);
//
// 	const angle = Math.round(rad * (180 / Math.PI));
// 	const slice = Math.floor(angle / prizeSlice);
//
// 	if (currentSlice !== slice) {
// 	ticker.style.animation = "none";
// 	setTimeout(() => ticker.style.animation = null, 10);
// 	currentSlice = slice;
// }
//
// 	tickerAnim = requestAnimationFrame(runTickerAnimation);
// };
//
// 	const selectPrize = () => {
// 	const selected = Math.floor(rotation / prizeSlice);
// 	prizeNodes[selected].classList.add(selectedClass);
// 	reaper.dataset.reaction = prizeNodes[selected].dataset.reaction;
// };
//
// 	trigger.addEventListener("click", () => {
// 	if (reaper.dataset.reaction !== "resting") {
// 	reaper.dataset.reaction = "resting";
// }
//
// 	trigger.disabled = true;
// 	rotation = Math.floor(Math.random() * 360 + spinertia(2000, 5000));
// 	prizeNodes.forEach((prize) => prize.classList.remove(selectedClass));
// 	wheel.classList.add(spinClass);
// 	spinner.style.setProperty("--rotate", rotation);
// 	ticker.style.animation = "none";
// 	runTickerAnimation();
// });
//
// 	spinner.addEventListener("transitionend", () => {
// 	cancelAnimationFrame(tickerAnim);
// 	trigger.disabled = false;
// 	trigger.focus();
// 	rotation %= 360;
// 	selectPrize();
// 	wheel.classList.remove(spinClass);
// 	spinner.style.setProperty("--rotate", rotation);
// });
//
// 	setupWheel();
//
	function displaySavedMovies() {
		fetch("https://vivid-flawless-almandine.glitch.me/movies")
			.then(response => response.json())
			.then(data => {
				const movieTitles = data.map(movie => movie.title);
				const modifiedPrizes = prizes.map((prize, index) => {
					if (movieTitles[index]) {
						prize.text = movieTitles[index];
					}
					return prize;
				});

				const spinner = document.querySelector(".spinner");
				spinner.innerHTML = ""; // Clear the existing prize nodes

				modifiedPrizes.forEach(({ text, color, reaction }, i) => {
					const rotation = ((prizeSlice * i) * -1) - prizeOffset;

					spinner.insertAdjacentHTML(
						"beforeend",
						`<li class="prize" data-reaction=${reaction} style="--rotate: ${rotation}deg">
            <span class="text">${text}</span>
          </li>`
					);
				});

				prizeNodes = wheel.querySelectorAll(".prize");
			})
			.catch(error => console.log(error));
	}
//
//
//
//
// function displaySavedMovies() {
// 	fetch("https://vivid-flawless-almandine.glitch.me/movies")
// 		.then(response => response.json())
// 		.then(data => {
// 			console.log(data);
// 			// Iterate over the saved movies and create card elements to display the movie data
// 			data.forEach(movie => {
// 				console.log(movie.original_title);
// 			});
//
// 			// Initialize the Swiper instance
// 			const savedSwiper = new Swiper("#saved-swiper", {
// 				// Swiper configuration options
// 			});
// 		})
// 		.catch(error => console.log(error));
// }
// displaySavedMovies()


let prizes = [];

function createPrizesArray() {
	fetch("https://vivid-flawless-almandine.glitch.me/movies")
		.then(response => response.json())
		.then(movies => {
			prizes = movies.map(movie => ({
				text: movie.original_title,
				color: getRandomColor(),
				reaction: getRandomReaction(),
			}));
			setupWheel();
		})
		.catch(error => console.error(error));
}

createPrizesArray();

function getRandomColor() {
	const hue = Math.floor(Math.random() * 360);
	const saturation = Math.floor(Math.random() * 50) + 30;
	const lightness = Math.floor(Math.random() * 40) + 30;
	return `hsl(${hue} ${saturation}% ${lightness}%)`;
}

function getRandomReaction() {
	const reactions = ["resting", "dancing", "laughing", "shocked"];
	const randomIndex = Math.floor(Math.random() * reactions.length);
	return reactions[randomIndex];
}

const wheel = document.querySelector(".deal-wheel");
const spinner = wheel.querySelector(".spinner");
const trigger = wheel.querySelector(".btn-spin");
const ticker = wheel.querySelector(".ticker");
const reaper = wheel.querySelector(".grim-reaper");
const prizeSlice = 360 / prizes.length;
const prizeOffset = Math.floor(180 / prizes.length);
const spinClass = "is-spinning";
const selectedClass = "selected";
const spinnerStyles = window.getComputedStyle(spinner);
let tickerAnim;
let rotation = 0;
let currentSlice = 0;
let prizeNodes;

// const createPrizeNodes = () => {
// 	prizes.forEach(({ text, color, reaction }, i) => {
// 		const rotation = ((prizeSlice * i) * -1) - prizeOffset;
//
// 		spinner.insertAdjacentHTML(
// 			"beforeend",
// 			`<li class="prize" data-reaction=${reaction} style="--rotate: ${rotation}deg">
//         <span class="text">${text}</span>
//       </li>`
// 		);
// 	});
// };

const setupWheel = () => {
	const prizeSlice = 360 / prizes.length;
	const prizeOffset = Math.floor(180 / prizes.length);
	createConicGradient(prizeSlice, prizeOffset);
	createPrizeNodes(prizeSlice, prizeOffset);
	prizeNodes = wheel.querySelectorAll(".prize");
};

const createPrizeNodes = (prizeSlice, prizeOffset) => {
	prizes.forEach(({ text, color, reaction }, i) => {
		const rotation = ((prizeSlice * i) * -1) - prizeOffset;
		spinner.insertAdjacentHTML(
			"beforeend",
			`<li class="prize" data-reaction=${reaction} style="--rotate: ${rotation}deg">
                <span class="text">${text}</span>
            </li>`
		);
	});
};

const createConicGradient = () => {
	spinner.setAttribute(
		"style",
		`background: conic-gradient(
      from -90deg,
      ${prizes
			.map(({ color }, i) => `${color} 0 ${(100 / prizes.length) * (prizes.length - i)}%`)
			.reverse()
		}
    );`
	);
};

// const setupWheel = () => {
// 	createConicGradient();
// 	createPrizeNodes();
// 	prizeNodes = wheel.querySelectorAll(".prize");
// };

const spinertia = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const runTickerAnimation = () => {
	const values = spinnerStyles.transform.split("(")[1].split(")")[0].split(",");
	const a = values[0];
	const b = values[1];
	let rad = Math.atan2(b, a);

	if (rad < 0) rad += (2 * Math.PI);

	const angle = Math.round(rad * (180 / Math.PI));
	const slice = Math.floor(angle / prizeSlice);

	if (currentSlice !== slice) {
		ticker.style.animation = "none";
		setTimeout(() => ticker.style.animation = null, 10);
		currentSlice = slice;
	}

	tickerAnim = requestAnimationFrame(runTickerAnimation);
};

const selectPrize = () => {
	const selected = Math.floor(rotation / prizeSlice);
	prizeNodes[selected].classList.add(selectedClass);
	reaper.dataset.reaction = prizeNodes[selected].dataset.reaction;
};

trigger.addEventListener("click", () => {
	if (reaper.dataset.reaction !== "resting") {
		reaper.dataset.reaction = "resting";
	}

	trigger.disabled = true;
	rotation = Math.floor(Math.random() * 360 + spinertia(2000, 5000));
	prizeNodes.forEach((prize) => prize.classList.remove(selectedClass));
	wheel.classList.add(spinClass);
	spinner.style.setProperty("--rotate", rotation);
	ticker.style.animation = "none";
	runTickerAnimation();
});

spinner.addEventListener("transitionend", () => {
	cancelAnimationFrame(tickerAnim);
	trigger.disabled = false;
	trigger.focus();
	rotation %= 360;
	selectPrize();
	wheel.classList.remove(spinClass);
	spinner.style.setProperty("--rotate", rotation);
});

setupWheel();
