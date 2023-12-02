var main = document.querySelector(".main")
var crs = document.querySelector(".cursor")

main.addEventListener("mousemove" , function(move){
    crs.style.left = move.x + "px"
    crs.style.top = move.y + "px"
    crs.style.transition = "0.09s"
})