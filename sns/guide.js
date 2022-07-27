let moreView = true

function moreViewChange(b){
    if (b){
        document.querySelector(".item i")
        .setAttribute("class", "fa fa-light fa-angle-down")
        
        document.querySelector(".item span")
        .textContent = "더보기"
        
        for(let i = 0; i < 4; i++){
            document.querySelector(".hide-guide a:nth-child(" + (i + 1) + ")")
            .style.display = ""
        }
        
        document.querySelector(".renderer")
        .style.gridTemplateRows = ""
        
        document.querySelector(".hide-guide")
        .style.gridTemplateRows = ""

        moreView = true
    } else if (!b){
        
        document.querySelector(".item i")
        .setAttribute("class", "fa fa-light fa-angle-up")
        
        document.querySelector(".item span")
        .textContent = "간략히 보기"
        
        for(let i = 0; i < 4; i++){
            document.querySelector(".hide-guide a:nth-child(" + (i + 1) + ")")
            .style.display = "block"
        }
        
        document.querySelector(".renderer")
        .style.gridTemplateRows = "repeat(10, 40px) 200px"
        
        document.querySelector(".hide-guide")
        .style.gridTemplateRows = "repeat(5, 40px)"

        moreView = false
    }
}



window.addEventListener("resize", function() {
    if(window.innerWidth <= 1320) {
        document.querySelector(".item")
        .style.display = "none"

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
    if(window.innerWidth > 1320) {
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
        .style.display = ""

        document.querySelector(".item")
        .style.display = "block"
    }
})