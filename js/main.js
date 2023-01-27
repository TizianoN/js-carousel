/***********************************************
 ON LOAD
 ***********************************************/

const images = [
	"img/a.jpg",
	"img/b.jpg",
	"img/c.jpg",
	"img/d.jpg",
	"img/e.jpg",
];

const slidesContainerEl = document.querySelector(".items");
const buttonNextEl = document.querySelector(".next");
const buttonPrevEl = document.querySelector(".prev");

let activeImage = 0;

for (let i = 0; i < images.length; i++) {
	const currentImage = images[i];

	let slideClasses = "item";
	if (i == activeImage) {
		slideClasses += " active";
	}

	const slide = `
	<div class="${slideClasses}">
		<img src="${currentImage}" alt="">
	</div>`;

	slidesContainerEl.innerHTML += slide;
}









/***********************************************
 ON CLICK DEL TASTO PREV
 ***********************************************/

buttonPrevEl.addEventListener(
	"click",
	function () {
		// recupero tutte le slides (come oggetti)
		const slides = document.querySelectorAll(".item");
		// console.log(slides);

		// dalla slide con indice activeImage rimuovo la classe active
		slides[activeImage].classList.remove("active");

		// decremento activeimage
		activeImage--;

		// se sono fuori dal range dell'array, 
		if (activeImage < 0) {
			activeImage = slides.length - 1;
		}
		console.log(activeImage);

		// alla slide con indice activeImage aggiungo la classe active
		slides[activeImage].classList.add("active");
	}
)




/***********************************************
 ON CLICK DEL TASTO NEXT
 ***********************************************/

buttonNextEl.addEventListener(
	"click",
	function () {
		// recupero tutte le slides (come oggetti)
		const slides = document.querySelectorAll(".item");
		console.log(slides);

		// dalla slide con indice activeImage rimuovo la classe active
		slides[activeImage].classList.remove("active");

		// incremento activeimage
		activeImage++;

		// se sono fuori dal range dell'array, resetto active
		if (activeImage >= slides.length) {
			activeImage = 0;
		}

		// alla slide con indice activeImage aggiungo la classe active
		slides[activeImage].classList.add("active");
	}
)