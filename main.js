/* ============================================================
   Cloud Psychiatry — Shared JavaScript (main.js)
   ============================================================ */

/* ── Mobile Menu ── */
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

/* ── Close menu on outside click ── */
document.addEventListener('click', function (e) {
    const nav = document.getElementById('navLinks');
    const btn = document.querySelector('.mobile-menu-btn');
    if (nav && btn && !nav.contains(e.target) && !btn.contains(e.target)) {
        nav.classList.remove('active');
    }
});

/* ── Header shadow on scroll ── */
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (header) {
        header.classList.toggle('scrolled', window.scrollY > 40);
    }
});

/* ── Active nav link ── */
(function setActiveNavLink() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (
            (href === 'index.html' && (page === 'index.html' || page === '')) ||
            (href !== 'index.html' && href === page)
        ) {
            link.classList.add('active');
        }
    });
})();

/* ── Contact anchor smooth scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            document.getElementById('navLinks')?.classList.remove('active');
        }
    });
});

/* ── Scroll Fade-in Animations ── */
const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);

document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));
