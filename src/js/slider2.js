/*пытаюсь привязать индикатор к слаидам, что бы при клике на него открывался нужный слаид
   но не могу понять как именно их связать, надо как то их вместе связать
*/


let viewport1 = document.querySelector("#viewport1").offsetWidth;
let btnNext1 = document.querySelector("#next1");
let btnPrev1 = document.querySelector("#prev1");
let slider1 = document.querySelector("div.slider1");
let viewSliders1 = document.querySelectorAll(".viewSlide1");
let viewSlide1 = 0;


let elems = document.querySelectorAll("#elem").length;



/*
elems.forEach(function (entry) {
	entry.addEventListener("click", function (event) {
		event.preventDefault();
		console.log("click");
	})
})
*/

btnNext1.addEventListener("click", function(){
	
	if (viewSlide1 < 2){
		viewSlide1++;
	} else {
		viewSlide1 = 0;
	}
	slider1.style.left = -viewSlide1 * viewport1 + "px";
});


btnPrev1.addEventListener("click", function(){
	
	if (viewSlide1 > 0) {
		viewSlide1--;
	}else {
		viewSlide1 = 2;
	}
	slider1.style.left = -viewSlide1 * viewport1 + "px";
});

