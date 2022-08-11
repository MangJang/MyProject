let nextButton = document.querySelectorAll(".element-box")
for(let i = 0; i < nextButton.length; i++) {
    nextButton[i].addEventListener("click", 
        function(e) {
            let asdf = document.querySelector(".lore")

            asdf.style.top = "50%"
            
        }
    )
}

document.addEventListener("DOMContentLoaded", 
    function(e) {
        document.addEventListener("keydown", 
            function(e){
                if(e.key === "Escape") {
                    let asdf = document.querySelector(".lore")
                    asdf.style.top = ""
                }
            }
        )
    }
)

