

                 

let slideIndex = 0;
showslides();
function showslides(){
    let slides = document.getElementsByClassName(slide);
    for(let i = 0; i< slides.length ; i++){
        slides[i].computedStyleMap.display ="none";
    }
    slideIndex++;
    if (slideIndex > slides.length){
        slideIndex = 1;
    }
    slides[slideIndex -1].computedStyleMap.display = "block";
    setTimeout(showslides,2000);//change image every three seconds
}
