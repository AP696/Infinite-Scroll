const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];


// Unsplash API 
const count = 10;
const apiKey = 'RDIfL8h6BXJigPIx27CvZIAMyzabP2X5T9CtiBeZja4';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Create Elements For Links & Photos, Add to DOM
function diaplayPhotos() {
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> to link to Unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // Create <img> for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
        // Put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);

    });
}

// Get photots from Unsplass API
async function getPhotots() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        diaplayPhotos()
    } catch (error){
        // Catch error here
    }
}

// On Load
getPhotots()
//iweguf
bwedecberfur4g
