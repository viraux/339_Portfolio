// creating a list with an index value for each slideshow
let slideIndex = [1,1,1,1];


// showSlides(slideIndex);

// move forward or back one slide based on index, number, current show, and dot
function plusSlides(i,n,show,dot) {
    console.log('going to next slide')
    showSlides(i,slideIndex[i] += n,show,dot);
}

// set current slide based on index, number, current show, and dot
function currentSlide(i,n,show,dot) {
    console.log('setting current slide')
    showSlides(i,slideIndex[i] = n,show,dot);
}


// show current slide based on index, number, current show, and dot
function showSlides(index,n,show,dot) {
    console.log('showing current slide')
    let i;
    let slides = document.getElementsByClassName(show);
    let dots = document.getElementsByClassName(dot);
    // console.log(dots)
    if (n > slides.length) {slideIndex[index] = 1}
    if (n < 1) {slideIndex[index] = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex[index]-1].style.display = "block";
    dots[slideIndex[index]-1].className += " active";
  }


// checks to show first slide for each show on load

window.addEventListener('load',showSlides(0,slideIndex[0],'show1','dot1'));
window.addEventListener('load',showSlides(0,slideIndex[0],'show2','dot2'));
window.addEventListener('load',showSlides(0,slideIndex[0],'show3','dot3'));
window.addEventListener('load',showSlides(0,slideIndex[0],'show4','dot4'));

// each set of two functions moves the slideshow forward and back depending on show and arrow pressed

document.querySelector("#back1").addEventListener("click",function() { plusSlides(0,-1,'show1','dot1'); } );
document.querySelector("#next1").addEventListener("click",function() { plusSlides(0,1,'show1','dot1'); } );

document.querySelector("#back2").addEventListener("click",function() { plusSlides(1,-1,'show2','dot2'); } );
document.querySelector("#next2").addEventListener("click",function() { plusSlides(1,1,'show2','dot2'); } );

document.querySelector("#back3").addEventListener("click",function() { plusSlides(2,-1,'show3','dot3'); } );
document.querySelector("#next3").addEventListener("click",function() { plusSlides(2,1,'show3','dot3'); } );

document.querySelector("#back4").addEventListener("click",function() { plusSlides(3,-1,'show4','dot4'); } );
document.querySelector("#next4").addEventListener("click",function() { plusSlides(3,1,'show4','dot4'); } );

