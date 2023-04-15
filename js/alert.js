const alertDiv = document.getElementById("alert");
const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

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
  
  const alert = document.querySelector("#alert");

  document.querySelector(".showAlert").addEventListener("click", function() {
    if (isReduced === false) {
        alert.animate(fadein, fadetime);
        alertDiv.style.display = "block";} 
        else {
            alertDiv.style.display = "block";
        }
   
})

  
window.addEventListener("keypress", () => {
    if (event.key === "e") {
    if (isReduced === false) {
        alert.animate(fadeaway, fadetime);
        setTimeout(function(){
            alertDiv.style.display = "none";
        }, 800); } else {
            alertDiv.style.display = "none";
        }}

  });


alert.addEventListener("click", () => {
    if (isReduced === false) {
    alert.animate(fadeaway, fadetime);
    setTimeout(function(){
        alertDiv.style.display = "none";
    }, 800); } else {
        alertDiv.style.display = "none";
    }


});



