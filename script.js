



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




/*TESTIMONIAL */

const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentSlide = 0;

function updateSlides(index) {
    // Remove active class from all
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Set new active
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides(currentSlide);
});

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides(currentSlide);
});

// Dot Navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlides(currentSlide);
    });
});

// Optional: Auto-play
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides(currentSlide);
}, 5000); // Changes every 5 seconds






// get in touch form


const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Stop page reload
    
    const data = new FormData(form);
    const submitBtn = document.getElementById("submitBtn");
    
    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            status.innerHTML = "Thanks! Your message has been sent.";
            status.className = "success";
            form.reset();
        } else {
            status.innerHTML = "Oops! There was a problem submitting your form.";
            status.className = "error";
        }
    } catch (error) {
        status.innerHTML = "Oops! Connectivity issue.";
        status.className = "error";
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = "Send Message";
    }
});