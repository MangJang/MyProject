let backboard = document.querySelector(".backboard")
backboard.addEventListener("click",
    function(e){
        let asdf = document.querySelector(".lore")

        asdf.style.top = ""
        backboard.style.display = "none"
    }
)


let nextButton = document.querySelectorAll(".element-box")
for(let i = 0; i < nextButton.length; i++) {
    nextButton[i].addEventListener("click", 
        function(e) {
            backboard.style.display = "block"
            let asdf = document.querySelector(".lore")

            asdf.style.top = "50%"



            let img = document.querySelector(".img")
            let num = nextButton[i].textContent
            input = num.replace(/[^a-z]/gi,"")
            img.setAttribute("src", "..\\element\\img\\" + input + ".png")

            document.querySelector(".lore-sign").
            textContent = input
            
            input = num.replace(/[^0-9]/gi,"")
            document.querySelector(".lore-number").
            textContent = input
            
            input = num.replace(/[^가-힣]/gi,"")
            document.querySelector(".lore-name").
            textContent = input
            
        }
    )
}

let exitButton = document.querySelector(".exitButton")
exitButton.addEventListener("click", 
    function(e){
        let asdf = document.querySelector(".lore")

        asdf.style.top = ""
        backboard.style.display = "none"
    }
)

document.addEventListener("DOMContentLoaded", 
    function(e) {
        document.addEventListener("keydown", 
            function(e){
                if(e.key === "Escape") {
                    let asdf = document.querySelector(".lore")
                    asdf.style.top = ""
                    backboard.style.display = "none"
                }
            }
        )
    }
)
