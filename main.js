let cartes = document.querySelectorAll(".carte_header");
let slides = document.querySelectorAll(".silde");
let menu = document.querySelector(".main_menu");
let index = 0;
let paralaxe = document.querySelector(".contener_games");
let btns = document.querySelectorAll(".btn");
let links = document.querySelectorAll(".link");
let sous_menu = document.querySelector(".sous-menu");
let img_link = document.querySelectorAll(".img_link");

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
    verefication(cartes);
}
canSlide();

window.addEventListener("scroll", () =>{
    if(scrollY > 36){
        menu.classList.add("active");
    }
    else{
        menu.classList.remove("active")
    }
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

links.forEach(link =>{
    link.addEventListener("click", () =>{

        for(let i = 0; i < img_link.length; i++){

            let img = img_link[i];

            if(link.getAttribute("data-sous") == img.getAttribute("data-sous")){
                img.classList.toggle("active"); 
            }
            // else{
            //     img.classList.remove("active");
            // }

        }
        sous_menu.classList.toggle("active")
    })
})
// function canDisplay(){
//     for(let i = img_link.length; i > 0; i++){
//         let img = img_link[i];
//         if(img.classList.contains("active")){
//             sous_menu.classList.add("active")
//         }
//         else{
//             sous_menu.classList.remove("active");
//         }
//     }
// }