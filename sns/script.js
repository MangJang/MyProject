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