const toggleSwitch = document.querySelector("input[type='checkbox']")
const nav = document.querySelector("#nav")
const toggleIcon = document.querySelector("#toggle-icon")
const image1 = document.querySelector("#image1")
const image2 = document.querySelector("#image2")
const image3 = document.querySelector("#image3")
const textBox = document.querySelector("#text-box")

//image mode
function imageMode(color){
    image1.src =`img/undraw_proud_coder_${color}.svg`
    image2.src =`img/undraw_feeling_proud_${color}.svg`
    image3.src =`img/undraw_conceptual_idea_${color}.svg`
}


// cleaner code
function toggleDarkLightMode (darkMode) {
    nav.style.backgroundColor = darkMode ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255 / 50%)"
    textBox.style.backgroundColor = darkMode ? "rgb(255 255 255 /50%)" : "rgb(0 0 0  /50%)"
    toggleIcon.children[0].textContent = darkMode? "Dark Mode" : "Light Mode"
    darkMode ? toggleIcon.children[1].classList.replace("fa-sun","fa-moon") : 
    toggleIcon.children[1].classList.replace("fa-moon" , "fa-sun")
    darkMode ? imageMode("dark") : imageMode("light")
}



// //dark mode

// function darkMode (){
//     nav.style.backgroundColor = "rgb(0 0 0 / 50%)"
//     textBox.style.backgroundColor = "rgb(255 255 255 /50%)"
//     toggleIcon.children[0].textContent = "Dark Mode"
//     toggleIcon.children[1].classList.replace("fa-sun","fa-moon")
//     imageMode("dark")
// }
// //light mode
// function lightMode (){
//     nav.style.backgroundColor = "rgb(255 255 255 / 50%)"
//     textBox.style.backgroundColor = "rgb(0 0 0  /50%)"
//     toggleIcon.children[0].textContent = "light Mode"
//     toggleIcon.children[1].classList.replace("fa-moon" , "fa-sun")
//     imageMode("light")
// }

//event listner
function switchTheme(e){
if (e.target.checked) {
    document.documentElement.setAttribute("data-theme","dark")
    localStorage.setItem("theme" , "dark")
    toggleDarkLightMode(true)
} else {
    document.documentElement.setAttribute("data-theme","light")
    localStorage.setItem("theme" ,"light")
    toggleDarkLightMode(false)
}
}
toggleSwitch.addEventListener("change",switchTheme)


//check local storage for theme
const currentTheme = localStorage.getItem("theme")
if (currentTheme) {
    document.documentElement.setAttribute("data-theme",currentTheme)
    if(currentTheme==="dark"){
        toggleSwitch.checked = true
        toggleDarkLightMode(true)
    }
}