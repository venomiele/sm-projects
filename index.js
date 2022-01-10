let navbar = document.querySelector(".nav");
let btn = document.querySelector(".btn");


btn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    btn.classList.toggle("active-btn");
})