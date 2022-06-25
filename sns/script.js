let moreView = true

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
            .style.display = "none"
            
            document.querySelector(".hide-guide a:nth-child(2)")
            .style.display = "none"
            
            document.querySelector(".hide-guide a:nth-child(3)")
            .style.display = "none"
            
            document.querySelector(".hide-guide a:nth-child(4)")
            .style.display = "none"
            
            document.querySelector(".renderer")
            .style.gridTemplateRows = "repeat(10, 40px)"
            
            document.querySelector(".hide-guide")
            .style.gridTemplateRows = " repeat(1, 40px)"

            moreView = true
        }

    }
)