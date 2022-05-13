const menuBars = document.querySelector("#menu-bars")
const overlay = document.querySelector("#overlay")
const nav1 = document.querySelector("#nav-1")
const nav2 = document.querySelector("#nav-2")
const nav3 = document.querySelector("#nav-3")
const nav4 = document.querySelector("#nav-4")
const nav5 = document.querySelector("#nav-5")
const navItems=[nav1,nav2,nav3,nav4 ,nav5]


function navAnimation (direction1,direction2){
    navItems.forEach((nav,i)=>{
        nav.classList.replace(`slide-${direction1}-${i+1}`,`slide-${direction2}-${i+1}`)
        console.log(`slide-${direction1}-${i+1}`,`slide-${direction2}-${i+1}`);
    })
}

function toggleNav(){
    // toggle open close
    menuBars.classList.toggle("change")
    // toggle menu
    overlay.classList.toggle("overlay-active")
    if (overlay.classList.contains("overlay-active")) {
        overlay.classList.replace("overlay-slide-left" ,"overlay-slide-right" )
        // animate in
        // nav1.classList.remove("slide-out-1")
        // nav1.classList.add("slide-in-1")
        // nav1.classList.replace("slide-out-1","slide-in-1")
        // nav2.classList.replace("slide-out-2" , "slide-in-2" )
        // nav3.classList.replace("slide-out-3" , "slide-in-3")
        // nav4.classList.replace("slide-out-4" , "slide-in-4")        
        // nav5.classList.replace("slide-out-5" ,"slide-in-5" )
        navAnimation("out","in")
        
    } else {
        overlay.classList.remove("overlay-slide-right")
        overlay.classList.add("overlay-slide-left")
        // animate out
        // nav1.classList.replace("slide-in-1","slide-out-1")
        // nav2.classList.replace("slide-in-2","slide-out-2")
        // nav3.classList.replace("slide-in-3","slide-out-3")
        // nav4.classList.replace("slide-in-4","slide-out-4" )
        // nav5.classList.replace("slide-in-5","slide-out-5")
        navAnimation("in","out")
    }
    console.log(overlay.classList);
}

// event listners

menuBars.addEventListener("click" ,toggleNav)
// nav1.addEventListener("click" ,toggleNav)
// nav2.addEventListener("click" ,toggleNav)
// nav3.addEventListener("click" ,toggleNav)
// nav4.addEventListener("click" ,toggleNav)
// nav5.addEventListener("click" ,toggleNav)
for(let nav of navItems){
    nav.addEventListener("click",toggleNav)
}

// dry code minus 20 line