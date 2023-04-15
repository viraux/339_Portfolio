// When tab is hit on the dropdown, show the pages to select
document.querySelector(".dropbtn").addEventListener("keydown",function(){
    if (event.key === 'Tab') {
        document.querySelector(".dropdown-content").style.display = "block"
    }
})

// when the final elemen of the pages is tabbed out, it hides the drop down again
document.querySelector(".last_page").addEventListener("keydown",function(){
    if (event.key === 'Tab') {
        document.querySelector(".dropdown-content").style.display = "none"
    }
})


// show the drop down when moused over
document.querySelector(".dropbtn").addEventListener("mouseover",function(){
    document.querySelector(".dropdown-content").style.display = "block"
    document.querySelector(".dropdown-content").style.backgrond = "#ddd"
})

// hide drop down when mouse leaves
document.querySelector(".dropdown").addEventListener("mouseleave",function(){
    document.querySelector(".dropdown-content").style.display = "none"
    document.querySelector(".dropdown-content").style.backgrond = "#ddd"

})
