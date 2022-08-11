let categoryX = 0

let nextButton = document.querySelector(".next-button")
nextButton.addEventListener("click", 
    function(e) {

        document.querySelector(".category").
        style.transitionDuration = "0.15s"
        let categoryWidth = document.querySelector(".category-container")
        .offsetWidth

        document.querySelector(".back").
        style.visibility = "visible"

        if(categoryX <= categoryWidth-1490){

            categoryX = categoryWidth-1650

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

        document.querySelector(".category").
        style.transitionDuration = "0.15s"
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