document.querySelector(".dropbtn").addEventListener("keydown",function(){
    if (event.key === 'Tab') {
        document.querySelector(".dropdown-content").style.display = "block"
    }
})

document.querySelector(".last_page").addEventListener("keydown",function(){
    if (event.key === 'Tab') {
        document.querySelector(".dropdown-content").style.display = "none"
    }
})


document.querySelector(".dropbtn").addEventListener("mouseover",function(){
    document.querySelector(".dropdown-content").style.display = "block"
    document.querySelector(".dropdown-content").style.backgrond = "#ddd"
})

document.querySelector(".dropdown").addEventListener("mouseleave",function(){
    document.querySelector(".dropdown-content").style.display = "none"
    document.querySelector(".dropdown-content").style.backgrond = "#ddd"

})
