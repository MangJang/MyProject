let moreLore = false

let moreLoreButton = document.querySelector(".moreLore")
moreLoreButton.addEventListener("click", 
    function(e) {
        if(!moreLore) {
            document.querySelector(".lore")
            .style.height = "138"
    
            moreLoreButton.textContent = "간략히"
    
            moreLore = true
        }else if(moreLore) {
            document.querySelector(".lore")
            .style.height = ""
    
            moreLoreButton.textContent = "더보기"
    
            moreLore = false
        }
    }
)

let categoryX = 0

let nextButton = document.querySelector(".next-button")
nextButton.addEventListener("click", 
    function(e) {
        categoryX-= 160
        document.querySelector(".category").
        style.transform = "translateX(" + categoryX + "px)"
    }
)












document.addEventListener("DOMContentLoaded", 
    function(e) {
        let p = document.querySelector(".date")
        date = new Date()
        year = date.getFullYear()
        month = date.getMonth() + 1
        day = date.getDate()

        p.textContent = year + ". " + month + ". " + day
        
    }
)

