let valueRL = -45
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

let a = -45;
let b = -30;
// 마우스를 후에 상자의 기울기 저장

document.addEventListener("DOMContentLoaded", 
function(e) {
    document.addEventListener("mousedown", 
        function(e){
            firstX = e.pageX
            firstY = e.pageY
            down = true
        }
    )
    document.addEventListener("mousemove", 
        function(e){
            if(down){
                valueRL = (e.pageX - firstX) / 7;
                valueUD = (firstY - e.pageY) / 7;

                valueRL += a;
                valueUD += b;

                cube.style.transform = "rotateX(" + valueUD + "deg) rotateY("+ valueRL + "deg)"
            }
        }
    )
    document.addEventListener("mouseup", 
        function(e){
            a = valueRL;
            b = valueUD

            firstX = e.pageX
            firstY = e.pageY
            down = false
        }
    )

    
    document.addEventListener("touchstart", 
        function(e){
            down = true
            firstX = e.touches[0].pageX
            firstY = e.touches[0].pageY
        }
    )
    document.addEventListener("touchmove", 
        function(e){
            if(down){
                valueRL = (e.touches[0].pageX - firstX) / 7;
                valueUD = (firstY - e.touches[0].pageY) / 7;

                valueRL += a;
                valueUD += b;

                cube.style.transform = "rotateX(" + valueUD + "deg) rotateY("+ valueRL + "deg)"
            }
        }
    )
    document.addEventListener("touchend", 
        function(e){
            a = valueRL;
            b = valueUD

            down = false
            firstX = e.touches[0].pageX
            firstY = e.touches[0].pageY
        }
    )
}
)