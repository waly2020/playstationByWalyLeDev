let cartes = document.querySelectorAll(".carte_header");
let slides = document.querySelectorAll(".silde");
let menu = document.querySelector(".main_menu");
let index = 0;
let paralaxe = document.querySelector(".contener_games");
let btns = document.querySelectorAll(".btn");

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

window.addEventListener("scroll", e =>{
    if(scrollY > 36){
        menu.classList.add("active");
    }
    else{
        menu.classList.remove("active")
    }
    // console.log(scrollY);
})
btns.forEach(btn =>{
    btn.addEventListener("click", () =>{
       console.log(paralaxe);
      if(btn.classList.contains("slide-left")){
          paralaxe.classList.add("left");
      }else{
          paralaxe.classList.remove("left")
      }
    })
})