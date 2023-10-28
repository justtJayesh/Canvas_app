/* Iteration 4: Make the Canvas App Functional */

// Face Plate
const button_face = document.getElementById("button-face-plate");
const face = document.getElementById("face-plate");
button_face.addEventListener("input", () => {
    face.style.fill = button_face.value;
});

// Helmet
const button_helmet = document.getElementById("button-helmet");
const helmet = document.getElementById("helmet");
button_helmet.addEventListener("input", () => {
    helmet.style.fill = button_helmet.value;
});

// Eyes
const button_eyes = document.getElementById("button-eyes");
const eyes = document.getElementById("eyes");
button_eyes.addEventListener("input", () => {
    eyes.style.fill = button_eyes.value;
});

// Background
const button_background = document.getElementById("button-background");
const background = document.getElementById("background");
button_background.addEventListener("input", () => {
    background.style.fill = button_background.value;
});
