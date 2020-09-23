
let viewport = document.getElementById("viewport").offsetWidth;
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");
let slider = document.querySelector("div.slider");
let viewSliders = document.querySelectorAll(".viewSlide");
let viewSlide = 0;

viewSliders[viewSlide].classList.add("hover");

btnNext.addEventListener("click", function () {
	
	viewSliders[viewSlide].classList.remove("viewSlide");
	
	if (viewSlide < 2) { 
		viewSlide++;
		viewSliders[viewSlide].classList.add("hover");
	} else { 
		viewSliders[viewSlide].classList.remove("hover");
		viewSlide = 0;
	}
	
	viewSliders[viewSlide].classList.add("viewSlide");
	slider.style.left = -viewSlide * viewport + "px";
});


btnPrev.addEventListener("click", function () {
	
	viewSliders[viewSlide].classList.remove("viewSlide");
	
	if (viewSlide > 0) { 
	
		viewSlide--;
		viewSliders[viewSlide].classList.add("hover");
	} else { 
		viewSlide = 2;
		viewSliders[viewSlide].classList.add("hover");
	}
	
	viewSliders[viewSlide].classList.add("viewSlide");
	slider.style.left = -viewSlide * viewport + "px";
});


let viewport1 = document.querySelector("#viewport1").offsetWidth;
let btnNext1 = document.querySelector("#next1");
let btnPrev1 = document.querySelector("#prev1");
let slider1 = document.querySelector("div.slider1");
let viewSliders1 = document.querySelectorAll(".viewSlide1");
let viewSlide1 = 0;




btnNext1.addEventListener("click", function () {

	if (viewSlide1 < 2) {
		viewSlide1++;
	
	} else {
		viewSlide1 = 0;
	}
	slider1.style.left = -viewSlide1 * viewport1 + "px";
});

btnPrev1.addEventListener("click", function () {

	if (viewSlide1 > 0) {
		viewSlide1--;
	} else {
		viewSlide1 = 2;
	}

	slider1.style.left = -viewSlide1 * viewport1 + "px";
});

