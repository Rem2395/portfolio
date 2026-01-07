// Fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .hero-content').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Simple Typewriter Effect Simulation
const typewriter = document.querySelector('.typewriter');
if (typewriter) {
    const text = typewriter.innerText;
    typewriter.innerText = '';
    let i = 0;
    function type() {
        if (i < text.length) {
            typewriter.innerText += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    type();
}