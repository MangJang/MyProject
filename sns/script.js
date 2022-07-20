let moreView = true
let accountMenu = true
let youtubeApp = true
let notificationMenu = true
let uploadMenu = true

document.addEventListener("DOMContentLoaded", 
    function(e) {
        document.addEventListener("keydown", 
            function(e){
                if(e.key === "Escape") {
                    accountMenuChange(true)
                    youtubeAppChange(true)
                    notificationMenuChange(true)
                    uploadMenuChange(true)
                }
            }
        )
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



let profile = document.querySelector(".profile-button")
profile.addEventListener("click",
    function(e) {
        if(accountMenu) {
            accountMenuChange(false)
            youtubeAppChange(true)
            notificationMenuChange(true)
            uploadMenuChange(true)
        } else if(!accountMenu) {
            accountMenuChange(true)
        }
    }
)

let app = document.querySelector(".youtube-app-button")
app.addEventListener("click",
    function(e) {
        if(youtubeApp){
            youtubeAppChange(false)
            accountMenuChange(true)
            notificationMenuChange(true)
            uploadMenuChange(true)
        } else if(!youtubeApp){
            youtubeAppChange(true)
        }
    }
)

let upload = document.querySelector(".upload-button")
upload.addEventListener("click",
    function(e) {
        if(uploadMenu){
            uploadMenuChange(false)
            accountMenuChange(true)
            notificationMenuChange(true)
            youtubeAppChange(true)
        } else if(!uploadMenu){
            uploadMenuChange(true)
        }
    }
)

let notification = document.querySelector(".notification-button")
notification.addEventListener("click", 
    function(e) {
        if(notificationMenu){
            notificationMenuChange(false)
            accountMenuChange(true)
            youtubeAppChange(true)
            uploadMenuChange(true)
        } else if(!notificationMenu){
            notificationMenuChange(true)
        }
    }
)


let item = document.querySelector(".item")
item.addEventListener("click",
    function(e) {
        if(moreView){
            moreViewChange(false)
        } else if(!moreView){
            moreViewChange(true)
        }
    }
)


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

function accountMenuChange(b){
    if (b){
        document.querySelector(".account-menu")
        .style.display = "none"
        
        accountMenu = true
    } else if(!b){
        document.querySelector(".account-menu")
        .style.display = "block"
        
        accountMenu = false
    }
}

function notificationMenuChange(b){
    if (b){
        document.querySelector(".notification-menu")
        .style.display = "none"
        
        notificationMenu = true
    } else if(!b){
        document.querySelector(".notification-menu")
        .style.display = "block"
        
        notificationMenu = false
    }
}



function uploadMenuChange(b){
    if (b){
        document.querySelector(".upload-menu")
        .style.display = "none"
        
        uploadMenu = true
    } else if(!b){
        document.querySelector(".upload-menu")
        .style.display = "block"
        
        uploadMenu = false
    }
}

function youtubeAppChange(b){
    if (b){
        document.querySelector(".youtube-app-menu")
        .style.display = "none"
        
        youtubeApp = true
    } else if(!b){
        document.querySelector(".youtube-app-menu")
        .style.display = "block"
        
        youtubeApp = false
    }
}