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