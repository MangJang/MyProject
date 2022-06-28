let moreView = true
let accountMenu = true

let item = document.querySelector(".item")
item.addEventListener("click",
    function(e) {
        if(moreView){
            document.querySelector(".item i")
            .setAttribute("class", "fa fa-light fa-angle-up")
            
            document.querySelector(".item span")
            .textContent = "간략히 보기"
            
            document.querySelector(".hide-guide a:nth-child(1)")
            .style.display = "block"
            
            document.querySelector(".hide-guide a:nth-child(2)")
            .style.display = "block"
            
            document.querySelector(".hide-guide a:nth-child(3)")
            .style.display = "block"
            
            document.querySelector(".hide-guide a:nth-child(4)")
            .style.display = "block"
            
            document.querySelector(".renderer")
            .style.gridTemplateRows = "repeat(10, 40px) 200px"
            
            document.querySelector(".hide-guide")
            .style.gridTemplateRows = "repeat(5, 40px)"
            
            moreView = false
        } else if(!moreView){
            document.querySelector(".item i")
            .setAttribute("class", "fa fa-light fa-angle-down")
            
            document.querySelector(".item span")
            .textContent = "더보기"
            
            document.querySelector(".hide-guide a:nth-child(1)")
            .style.display = ""
            
            document.querySelector(".hide-guide a:nth-child(2)")
            .style.display = ""
            
            document.querySelector(".hide-guide a:nth-child(3)")
            .style.display = ""
            
            document.querySelector(".hide-guide a:nth-child(4)")
            .style.display = ""
            
            document.querySelector(".renderer")
            .style.gridTemplateRows = ""
            
            document.querySelector(".hide-guide")
            .style.gridTemplateRows = ""

            moreView = true
        }
    }
)

window.addEventListener("resize", function() {
    if(window.innerWidth <= 1320) {
        document.querySelector(".item")
        .style.display = "none"
        if(true) {
            document.querySelector(".item i")
            .setAttribute("class", "fa fa-light fa-angle-down")
            
            document.querySelector(".item span")
            .textContent = "더보기"
            
            document.querySelector(".shorts-guide-hide")
            .style.display = ""
            
            document.querySelector(".renderer")
            .style.gridTemplateRows = ""
            
            document.querySelector(".hide-guide")
            .style.gridTemplateRows = ""
            
            document.querySelector(".hide-guide")
            .style.display = "none"
            
            document.querySelector(".hide-guide a")
            .style.display = "none"
        }
    }
    if(window.innerWidth > 1320) {
        document.querySelector(".renderer")
        .style.gridTemplateRows = "repeat(11, 40px)"

        document.querySelector(".item")
        .style.display = "block"
        if(moreView) {
            document.querySelector(".hide-guide")
            .style.gridTemplateRows = "repeat(1, 40px)"
        }else if (!moreView){
            document.querySelector(".renderer")
            .style.gridTemplateRows = "repeat(10, 40px) 200px"

            document.querySelector(".hide-guide")
            .style.gridTemplateRows = "repeat(5, 40px)"
            
            document.querySelector(".hide-guide a:nth-child(1)")
            .style.display = "block"
            
            document.querySelector(".item span")
            .textContent = "간략히 보기"

            document.querySelector(".item i")
            .setAttribute("class", "fa fa-light fa-angle-up")
        }
        document.querySelector(".hide-guide")
        .style.display = "block"
    }
})

let profile = document.querySelector(".profile")
profile.addEventListener("click",
    function(e) {
        if(accountMenu) {
            document.querySelector(".account-menu")
            .style.display = "block"
            accountMenu = false
        } else if(!accountMenu) {
            document.querySelector(".account-menu")
            .style.display = "none"
            accountMenu = true
        }
    }
)