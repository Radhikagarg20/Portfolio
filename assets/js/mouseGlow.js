const glow = document.createElement("div");
glow.className = "mouse-glow";
document.body.appendChild(glow);

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateGlow() {
    glow.style.left = mouseX + "px";
    glow.style.top = mouseY + "px";
    requestAnimationFrame(animateGlow);
}

animateGlow();