// Smooth Scrolling
document.querySelectorAll('header ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll Reveal Effect
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});

// Form Submission Alert
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Message Sent! Tayyaba will get back to you soon. ✨");
    this.reset();
});