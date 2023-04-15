// set variable name for alert element and also if reduced motion is on
const alertDiv = document.getElementById("alert");
const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;


// create animations to fade out and in along with duration
const fadeaway = [
    { transform: "scale(1,1)" },
    { transform: "scale(0,0)" },
  ];

const fadein = [
    { transform: "scale(0,0)" },
    { transform: "scale(1,1)" },
];

const fadetime = {
    duration: 900,
    iterations: 1,
};
  
// fade image in when the button is clicked
  document.querySelector(".showAlert").addEventListener("click", function() {
    if (isReduced === false) {
        alertDiv.animate(fadein, fadetime);
        alertDiv.style.display = "block";} 
        else {
            alertDiv.style.display = "block";
        }
   
})

  
// fade button out when e is pressed
window.addEventListener("keypress", () => {
    if (event.key === "e") {
    if (isReduced === false) {
        alertDiv.animate(fadeaway, fadetime);
        setTimeout(function(){
            alertDiv.style.display = "none";
        }, 800); } else {
            alertDiv.style.display = "none";
        }}

  });


//   also fade out when the element is clicked
alertDiv.addEventListener("click", () => {
    if (isReduced === false) {
    alertDiv.animate(fadeaway, fadetime);
    setTimeout(function(){
        alertDiv.style.display = "none";
    }, 800); } else {
        alertDiv.style.display = "none";
    }

});



