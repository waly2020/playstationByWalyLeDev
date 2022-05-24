let cartes = document.querySelectorAll(".carte_header");
let slides = document.querySelectorAll(".silde");
let index = 0;

/**
 * 
 * @param {HTMLDivElement} items
 */
function verefication (slides){
    for(let i = 0; i < slides.length; i++){
        let slide = slides[i];
        slide.classList.remove("active");
    }
    for (let b = 0; b < slides.length; b++){
        let slide = slides[b];
        if(parseFloat(slide.getAttribute("data-slide")) == index){
            slide.classList.add("active");
        }
    }
}

function canSlide(){
    setTimeout("canSlide()",4000);
    index++;
    if(index >= 6){
        index = 1;
    };
    verefication(slides);
    verefication(cartes)
}
canSlide();