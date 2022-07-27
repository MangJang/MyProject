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
        document.querySelector(".back").
        style.visibility = "visible"

        if(categoryX <= -188){
            categoryX = -348

            document.querySelector(".next").
            style.visibility = "hidden"
        } else {
            categoryX-= 160
        }

        document.querySelector(".category").
        style.transform = "translateX(" + categoryX + "px)"
    }
)

let backButton = document.querySelector(".back-button")
backButton.addEventListener("click", 
    function(e) {
        document.querySelector(".next").
        style.visibility = "visible"

        if(categoryX >= -160) {
            categoryX = 0

            document.querySelector(".back").
            style.visibility = "hidden"
        } else {
            categoryX+= 160
        }

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

let comment = document.querySelector(".commentInput")
comment.addEventListener("focus", 
    function(e){
        document.querySelector(".commentAdd").
        style.height = 80
        
        document.querySelector(".commentCancel").
        style.display = "block"
        
        document.querySelector(".commentUpload").
        style.display = "block"
        
    }
)

let commentCancelButton = document.querySelector(".commentCancel")
commentCancelButton.addEventListener("click", 
    function(e){
        document.querySelector(".commentAdd").
        style.height = ""
        
        document.querySelector(".commentCancel").
        style.display = "none"
        
        document.querySelector(".commentUpload").
        style.display = "none"

        comment.value = ''

        document.querySelector(".commentUpload").
        style.backgroundColor = ""
        
        document.querySelector(".commentUpload").
        style.color = ''
        
        document.querySelector(".commentUpload").
        style.cursor = ''
        
    }
)

comment.addEventListener("input", 
    function(e){
        if(comment.value == ''){
            document.querySelector(".commentUpload").
            style.backgroundColor = ''
            
            document.querySelector(".commentUpload").
            style.color = ''
            
            document.querySelector(".commentUpload").
            style.cursor = ''
        } else {
            document.querySelector(".commentUpload").
            style.backgroundColor = "#065fd4"
            
            document.querySelector(".commentUpload").
            style.color = "white"
            
            document.querySelector(".commentUpload").
            style.cursor = "pointer"
        }
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

