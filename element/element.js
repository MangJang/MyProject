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
            if(input.length >= 5) {
                document.querySelector(".lore-name").
                style.letterSpacing = "-0.1em"
            } else {
                document.querySelector(".lore-name").
                style.letterSpacing = ""
            }

            document.querySelector(".value").
            textContent = Energy[i]
            
            document.querySelector(".explanation").
            textContent = explanation[i]

            let test = document.querySelector(".lore-element")
            test.style.height = test.offsetWidth + "px"
            
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

window.addEventListener("resize", function() {
    let test = document.querySelector(".lore-element")
    test.style.height = test.offsetWidth + "px"
    }
)

let Energy  = [
    "1", "2",
    "2, 1", "2, 2", "2, 3", "2, 4", "2, 5", "2, 6", "2, 7", "2, 8",
    "2, 8, 1", "2, 8, 2", "2, 8, 3", "2, 8, 4", "2, 8, 5", "2, 8, 6", "2, 8, 7", "2, 8, 8",
    "2, 8, 8, 1", "2, 8, 9, 2", "2, 8, 10, 2", "2, 8, 11, 2", "2, 8, 13, 1", "2, 8, 13, 2", "2, 8, 14, 2", "2, 8, 15, 2", "2, 8, 16, 2", "2, 8, 18, 1", "2, 8, 18, 2", "2, 8, 18, 3", "2, 8, 18, 4", "2, 8, 18, 5", "2, 8, 18, 6", "2, 8, 18, 7", "2, 8, 18, 8"
]

let explanation = [
    "인간이 현재까지 발견한 원소들 중에서 우주에서 가장 풍부하며, 가장 가볍고 간단한 구조를 가진 원자 번호가 가장 작은 원소다.",
    "상온에선 기체로 존재하며 단원자 분자인 비활성 기체이며 우주 전체에서 수소 다음으로 흔한 원소이지만 매우 가벼워서 지구 중력으로 잡을 수 없어 서서히 지구에서 우주 공간으로 빠져나간다. 따라서 지구에서는 아주 희소하다."
]