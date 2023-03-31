const image = document.querySelector(".image");
const display = document.querySelector(".display");

image.addEventListener("dblclick", (e) => {
    const x = e.offsetX;
    const y = e.offsetY;

    const div = document.createElement("div");
    div.className = "love_logo";
    // div.style.top = ((y / image.offsetHeight) * 100) + "%";
    // div.style.left = ((x / image.offsetWidth) * 100) + "%";
    div.style.top = y + "px";
    div.style.left = x + "px";

    image.appendChild(div);

    setTimeout(() => div.remove(), 500);
});