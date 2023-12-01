const ham = document.querySelector("button.hamburger");
ham.addEventListener("click", () => {
    if (ham.classList.contains("active")) {
        ham.classList.remove("active");
        document.querySelector("nav#menu-wrap").classList.remove("show");
    } else {
        ham.classList.add("active");
        document.querySelector("nav#menu-wrap").classList.add("show");
    }
});

// const navItems = document.querySelectorAll(".nav-item");
// navItems.forEach((e) => {
//     e.addEventListener("click", () => {
//         document.querySelectorAll(".nav-item.active").forEach((e) => {
//             e.classList.remove("active");
//         });
//         e.classList.add("active");
//     });
// });