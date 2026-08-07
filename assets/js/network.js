const canvas = document.createElement("canvas");

canvas.id = "network";

document.body.prepend(canvas);

const ctx = canvas.getContext("2d");

let w;
let h;

function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
}

resize();

window.addEventListener("resize", resize);

const particles = [];
const COUNT = 70;

for (let i = 0; i < COUNT; i++) {
    particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: 2 + Math.random() * 2
    });
}

function animate() {
    ctx.clearRect(0, 0, w, h);
    for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(18,214,64,.9)";
        ctx.fill();
    }

    for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 150) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = "rgba(18,214,64," + (1 - dist / 150) * 0.15 + ")";
                ctx.stroke();
            }
        }
    }

    requestAnimationFrame(animate);
}

animate();