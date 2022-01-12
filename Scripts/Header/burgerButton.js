let getBurgerMenuButton = document.querySelector(".menu-button").addEventListener("click",()=>{
        let getlistItems = document.querySelector(".list-items");
            getlistItems.style.display = "block"
            getlistItems.style.background = "white"
            getlistItems.style.width = "100%"
            getlistItems.style.display = "flex"
            getlistItems.style.flexDirection = "column"
            getlistItems.style.justifyContent = "space-around"
            getlistItems.style.position = "relative"
            getlistItems.style.height = "372px"
            getlistItems.style.top = "-108px"
            getlistItems.style.zIndex= "1"
            getlistItems.style.borderBottomLeftRadius = "12px"
            getlistItems.style.borderBottomRightRadius = "12px"
                let getMediaATags = document.querySelectorAll(".media-a")
                    for(let i = 0; i < getMediaATags.length;i++){
                        getMediaATags[i].style.color = "black"
                    }
})
let getRemoveIcon = document.querySelector(".remove-menu-bar").addEventListener("click",()=>{
    let getlistItems = document.querySelector(".list-items");
            getlistItems.style.display = "none"
})

