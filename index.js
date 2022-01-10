let navbar = document.querySelector(".nav");
let btn = document.querySelector(".btn");
let toast = document.querySelector(".toast-btn");
let toastCon = document.querySelector(".toast-container");


btn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    btn.classList.toggle("active-btn");
})

//Toast

toast.addEventListener("click", () => {
createNotification();
})

function createNotification() {
    let notif = document.createElement("div");
    notif.classList.add("toasted");
    notif.innerText = "This is a notification !";
    toastCon.appendChild(notif);

    setTimeout(() => {
notif.remove();
    },3000)
}