let slideIndex = [1,1,1,1];


// showSlides(slideIndex);

function plusSlides(i,n,show) {
    console.log('going to next slide')
    showSlides(i,slideIndex[i] += n,show);
}

function currentSlide(i,n,show) {
    console.log('setting current slide')
    showSlides(i,slideIndex[i] = n,show);
}


function showSlides(index,n,show) {
    console.log('showing current slide')
    let i;
    let slides = document.getElementsByClassName(show);
    // let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex[index] = 1}
    if (n < 1) {slideIndex[index] = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex[index]-1].style.display = "block";
    // dots[slideIndex-1].className += " active";
  }



window.addEventListener('load',showSlides(0,slideIndex[0],'show1'));
window.addEventListener('load',showSlides(0,slideIndex[0],'show2'));
window.addEventListener('load',showSlides(0,slideIndex[0],'show3'));
window.addEventListener('load',showSlides(0,slideIndex[0],'show4'));

document.querySelector("#back1").addEventListener("click",function() { plusSlides(0,-1,'show1'); } );
document.querySelector("#next1").addEventListener("click",function() { plusSlides(0,1,'show1'); } );

document.querySelector("#back2").addEventListener("click",function() { plusSlides(1,-1,'show2'); } );
document.querySelector("#next2").addEventListener("click",function() { plusSlides(1,1,'show2'); } );

document.querySelector("#back3").addEventListener("click",function() { plusSlides(2,-1,'show3'); } );
document.querySelector("#next3").addEventListener("click",function() { plusSlides(2,1,'show3'); } );

document.querySelector("#back4").addEventListener("click",function() { plusSlides(3,-1,'show4'); } );
document.querySelector("#next4").addEventListener("click",function() { plusSlides(3,1,'show4'); } );




document.querySelector("#small_nav").addEventListener("change",function() {
  console.log("changing page");
  // window.location = this.value;
});