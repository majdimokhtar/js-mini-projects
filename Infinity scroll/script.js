const imageContainer = document.querySelector(".image-container")
const loder = document.querySelector("#loader")
// every time we make request arr changes
let photosArray = []
let ready = false
let imageLoaded = 0
let totalImages = 0

// unsplash API
const count = 30;
const apiKey = "nD523GdWZ0yNc6cX-aS8n6XkzTCy-fx62XxN4YJFiC8"
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
// check if all img are loaded
function imgLoaded(){
    console.log(imageLoaded);
    imageLoaded++
    if (imageLoaded===totalImages) {
        ready=true
        loder.hidden = true
        console.log("ready = " ,ready);
    }
}

// fct set attribute
function setAttributes (element , attributes){
    for (const key in attributes){
        element.setAttribute(key , attributes[key] )
    }
}

// create links for links and pics
function displayPhotos(){
    imageLoaded = 0
    totalImages=photosArray.length
    console.log("totalImages",totalImages);
    photosArray.forEach((photo)=>{
        // create anchor tags
        const item = document.createElement("a")
        // item.setAttribute("href",photo.links.html)
        // item.setAttribute("target", "_blank")
        setAttributes(item , {
            href : photo.links.html,
            target : "_blank"
        })

        //create img
        const img = document.createElement("img")
        // img.setAttribute("src",photo.urls.regular)
        // img.setAttribute("alt",photo.alt_description)
        // img.setAttribute("title",photo.alt_description)
        setAttributes(img , {
            src : photo.urls.regular,
            alt : photo.alt_description,
            title : photo.alt_description
        } )

        //check when each is finish loading
        img.addEventListener("load" ,imgLoaded) 
        // put img inside a and both inside img container
        item.appendChild(img)
        imageContainer.appendChild(item)
    })
}
// get photos from unsplash
async function getPhotos(){
    try {
        const response = await fetch(apiUrl)
        photosArray = await response.json()
        console.log(photosArray);
        displayPhotos()
    } catch (error) {
        // catch err
    }
}
// loading more photos
window.addEventListener("scroll" ,()=>{
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready= false
        getPhotos()
        
    }
})



//on load
getPhotos()