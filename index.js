let navbar = document.querySelector(".nav");
let btn = document.querySelector(".btn");
let toast = document.querySelector(".toast-btn");
let toastCon = document.querySelector(".toast-container");
let texted = document.querySelector(".title");

btn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    btn.classList.toggle("active-btn");
})

// Toast

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

// Auto Write
let text = "Deleting Myself";
let index = 0;

function writeText() {
    texted.innerText = text.slice(0, index);
    index++;

    if(index > text.length) {
        index = 0;
    }
}

setInterval(writeText, 200)

let count = 0;
//Purple rain
function createHeart() {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.animationDuration = Math.random() * 100 + 2 + "s";
    heart.innerHTML =`<i class="bi bi-heart-fill"></i>`;
    document.body.appendChild(heart);
    count++;

    if(count == 25) {
        clearInterval(obj);
}

}

let obj = setInterval(createHeart, 200);