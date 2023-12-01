// Carousel or Front Image
const images = document.querySelectorAll(".carousel-images li");
const dots = document.querySelectorAll(".carousel-dots .dot");

let currentIndex = 0;

function showImage(index) {
    try {
        images.forEach((image) => image.classList.remove("active"));
        dots.forEach((dot) => dot.classList.remove("active"));
    
        images[index].classList.add("active");
        dots[index].classList.add("active");
    } catch (err) {
        // 
    }
}

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentIndex = index;
        showImage(currentIndex);
    });
});

showImage(currentIndex);
setInterval(changeImage, 5000);
const ham = document.querySelector("button.hamburger");
console.log(ham);

ham.addEventListener("click", () => {
    console.log("this");
    if (ham.classList.contains("active")) {
        ham.classList.remove("active");
        document.querySelector("nav#menu-wrap").classList.remove("show");
    } else {
        ham.classList.add("active");
        document.querySelector("nav#menu-wrap").classList.add("show");
    }
});



function getPrice() {
    const location = document.getElementById('loc');
    const area = document.getElementById('area');
    const bath = document.getElementById('bath');
    const bhk = document.getElementById('bhk');
    const location_value = location.value
    const area_value = area.value
    const bath_value = bath.value
    const bhk_value = bhk.value

    console.log(location_value);
    console.log(area_value);
    console.log(bath_value);
    console.log(bhk_value);
}


// API CALL FOR ML MODEL
// const API_TOKEN = "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"

// import fetch from "node-fetch";
// async function query(data) {
//     const response = await fetch(
//         "https://api-inference.huggingface.co/models/House_Prediction-Bengaluru_India",
//         {
//             headers: { Authorization: `Bearer ${API_TOKEN}` },
//             method: "POST",
//             body: JSON.stringify(data),
//         }
//     );
//     const result = await response.json();
//     return result;
// }
// query({ inputs: "The answer to the universe is [MASK]." }).then((response) => {
//     console.log(JSON.stringify(response));
// });