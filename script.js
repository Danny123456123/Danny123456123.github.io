document.getElementById("enlargeTextBtn").addEventListener("click", function() {
    document.body.classList.toggle("enlarged-text");
});

document.getElementById("changeColorsBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

document.getElementById("showAltTextBtn").addEventListener("click", function() {
    const images = document.querySelectorAll("img");
    images.forEach(image => {
        alert("Alt text: " + image.alt);
    });
});

// Profile Image Expansion
const profileImage = document.getElementById("profileImage");
profileImage.addEventListener("click", function() {
    profileImage.classList.toggle("expanded");
});

// Function to display alt-text when the button is clicked
function showAltText(imageId) {
    const altTextElement = document.getElementById('alt-text' + imageId.charAt(imageId.length - 1));
    const imageElement = document.getElementById(imageId);
    altTextElement.textContent = imageElement.alt;  // Set the alt text to the <p> tag
    altTextElement.style.display = 'block';  // Make the alt text visible
}
