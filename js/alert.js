var alertDiv = document.getElementById("alert");
// let doneBefore = null
// to show alert box change display
document.querySelector(".showAlert").addEventListener("click", function() {
        alertDiv.style.display = "block";
})

// to hide alert box, make display none using JavaScript
const fadeaway = [
    { transform: "scale(1,1)" },
    { transform: "scale(0,0)" },
  ];

  
  const fadetime = {
    duration: 900,
    iterations: 1,
  };
  
  const alert = document.querySelector("#alert");

  
  window.addEventListener("keypress", () => {
        alert.animate(fadeaway, fadetime);
        setTimeout(function(){
            alertDiv.style.display = "none";
        }, 900);

  });

  alert.addEventListener("click", () => {
    alert.animate(fadeaway, fadetime);
    setTimeout(function(){
        alertDiv.style.display = "none";
    }, 900);

});



