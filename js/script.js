let nav = document.getElementById("navbar")
let aboutDiv = document.querySelector(".about-div")
console.log(aboutDiv);

function animeNavFixe(){
    const windowTop = window.pageYOffset
    if(windowTop > 300 ){
        nav.classList.add("active")
    }else{
        nav.classList.remove("active")
    }
}

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
    if(windowTop > aboutDiv.offsetTop){
        aboutDiv.classList.add("animate")
        aboutDiv.style.opacity = 1
    }else{
        aboutDiv.classList.remove("animate")
        aboutDiv.style.opacity = 0
    }
}

window.addEventListener("scroll", function(){
    animeNavFixe()
    animeScroll()
})

