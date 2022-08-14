let valueRL = 0
let valueUD = -30
let cube = document.querySelector(".cube")

document.addEventListener("DOMContentLoaded", 
function(e) {
    document.addEventListener("keydown", 
        function(e){
            if(e.key === "ArrowRight") {
                valueRL-= 5
                cube.style.transform = "rotateX(" + valueUD + "deg) rotateY("+ valueRL + "deg)"
            } else if(e.key === "ArrowLeft") {
                valueRL+= 5
                cube.style.transform = "rotateX(" + valueUD + "deg) rotateY("+ valueRL + "deg)"
            } else if(e.key === "ArrowUp") {
                valueUD-= 5
                cube.style.transform = "rotateX(" + valueUD + "deg) rotateY("+ valueRL + "deg)"
            } else if(e.key === "ArrowDown") {
                valueUD+= 5
                cube.style.transform = "rotateX(" + valueUD + "deg) rotateY("+ valueRL + "deg)"
            }
        }
    )
}
)

let firstX = 0;
let firstY = 0;
let down = false

document.addEventListener("DOMContentLoaded", 
function(e) {
    document.addEventListener("mousedown", 
        function(e){
            down = true
            firstX = e.pageX
            firstY = e.pageY
            console.log(first)
        }
    )
    document.addEventListener("mouseup", 
        function(e){
            down = false
            firstX = e.pageX
            firstY = e.pageY
        }
    )
    document.addEventListener("mousemove", 
        function(e){
            if(down){
                valueRL = (e.pageX - firstX) / 10;
                valueUD = ((firstY - e.pageY) / 10) -30;

                cube.style.transform = "rotateX(" + valueUD + "deg) rotateY("+ valueRL + "deg)"
            }
        }
    )
}
)