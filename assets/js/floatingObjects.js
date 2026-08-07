const hero = document.querySelector("#header");
const objects = document.querySelectorAll(".glass-object");

let mouseX = 0;
let mouseY = 0;

window.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX / window.innerWidth - .5) * 20;
    mouseY = (e.clientY / window.innerHeight - .5) * 20;
});

function animate() {
    objects.forEach((obj, index) => {
        const speed = (index + 1) * 0.08;
        obj.style.transform = `
translate(
${mouseX * speed}px,
${mouseY * speed}px
)

rotate(${performance.now() * 0.002 * (index + 1)}deg)
`;
    });

    requestAnimationFrame(animate);
}

animate();