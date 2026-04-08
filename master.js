function openSS(src) {
  document.getElementById('ssPopupImg').src = src;
  document.getElementById('ssOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSSOverlay() {
  document.getElementById('ssOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function closeSS(event) {
  if (event.target === document.getElementById('ssOverlay')) {
    closeSSOverlay();
  }
}

const buttons = document.querySelectorAll('.ctaBtn');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.href = 'https://www.leadalchemy.online/widget/bookings/discovery-call-013';
  });
});

document.addEventListener('DOMContentLoaded', () => {
    // ========================================
    // NUMBER ANIMATION (Your existing code)
    // ========================================
    function animateNumber(el) {
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '+';
        const prefix = el.dataset.prefix || '';
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                el.textContent = prefix + target + suffix;
                clearInterval(timer);
            } else {
                el.textContent = prefix + Math.floor(current) + suffix;
            }
        }, 16);
    }

    // ========================================
    // #6 - FADE IN ANIMATIONS ON SCROLL
    // ========================================
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate numbers if they exist
                const numbers = entry.target.querySelectorAll('[data-target]');
                numbers.forEach(num => animateNumber(num));
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.stat, .stat-card, .slide-up, .slide-left, .slide-right, .process-step, .slide-up-y, .fade-in-up, .glass-card').forEach(el => {
        observer.observe(el);
    });

    // ========================================
    // #1 - CURSOR GLOW (Enhanced & More Visible)
    // ========================================
    const glow = document.querySelector('.cursor-glow');
    
    if (glow) {
        let mouseX = 0;
        let mouseY = 0;
        let glowX = 0;
        let glowY = 0;
        const speed = 0.15; // Smooth following effect

        // Track mouse position
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Smooth animation loop
        function animateGlow() {
            glowX += (mouseX - glowX) * speed;
            glowY += (mouseY - glowY) * speed;
            
            glow.style.left = glowX + 'px';
            glow.style.top = glowY + 'px';
            
            requestAnimationFrame(animateGlow);
        }
        animateGlow();

        // Hide glow when mouse leaves window
        document.addEventListener('mouseleave', () => {
            glow.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            glow.style.opacity = '1';
        });
    }

    // ========================================
    // #7 - PARALLAX SCROLL FOR ORBS
    // ========================================
    const orb1 = document.querySelector('.orb-1');
    const orb2 = document.querySelector('.orb-2');
    const orb3 = document.querySelector('.orb-3');
    const orb4 = document.querySelector('.orb-4'); // If you add a 4th orb

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        if (orb1) orb1.style.transform = `translate(0, ${scrolled * 0.3}px)`;
        if (orb2) orb2.style.transform = `translate(0, ${scrolled * 0.5}px)`;
        if (orb3) orb3.style.transform = `translate(0, ${scrolled * 0.2}px)`;
        if (orb4) orb4.style.transform = `translate(0, ${scrolled * 0.4}px)`;
    });

    // ========================================
    // #2 - GLASSMORPHISM HOVER EFFECTS
    // ========================================
    document.querySelectorAll('.glass-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });


   // ========================================
    // #9 - MAGNETIC BUTTONS
    // ========================================
    document.querySelectorAll('.magnetic-btn').forEach(btn => {
        btn.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0)';
        });
    });


    // ========================================
    // #14 - RIPPLE EFFECT ON CLICK
    // ========================================
    document.querySelectorAll('.ripple-effect').forEach(element => {
        element.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });


    // ========================================
    // #13 - TILT EFFECT ON CARDS
    // ========================================
    document.querySelectorAll('.tilt-card').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2.5;
            const centerY = rect.height / 2.5;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });


    // ========================================
    // #35 - TYPEWRITER EFFECT
    // ========================================
    class Typewriter {
        constructor(element, words, wait = 3000) {
            this.element = element;
            this.words = words;
            this.txt = '';
            this.wordIndex = 0;
            this.wait = parseInt(wait, 10);
            this.isDeleting = false;
            this.type();
        }
        
        type() {
            const current = this.wordIndex % this.words.length;
            const fullTxt = this.words[current];
            
            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }
            
            this.element.innerHTML = `<span class="txt">${this.txt}</span><span class="cursor">|</span>`;
            
            let typeSpeed = 150;
            
            if (this.isDeleting) {
                typeSpeed /= 2;
            }
            
            if (!this.isDeleting && this.txt === fullTxt) {
                typeSpeed = this.wait;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.wordIndex++;
                typeSpeed = 500;
            }
            
            setTimeout(() => this.type(), typeSpeed);
        }
    }

    // Usage
    const typewriterEl = document.querySelector('.typewriter');
    if (typewriterEl) {
        const words = ['B2B Companies', 'Agency Owners', 'Coaches & Consultants'];
        new Typewriter(typewriterEl, words, 2000);
    }


    // ========================================
// #48 - HEAT MAP CURSOR EFFECT
// ========================================




        




    // ========================================
    // BONUS: Smooth scroll for anchor links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
