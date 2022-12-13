let nav = document.getElementById("navbar")

function animeScroll(){
    const windowTop = window.pageYOffset
    if(windowTop > 300 ){
        nav.classList.add("active")
    }else{
        nav.classList.remove("active")
    }
}

window.addEventListener("scroll", function(){
    animeScroll()
})

