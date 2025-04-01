// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init();
    
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenuBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }
    // Custom cursor effect
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (cursorDot && cursorOutline) {
        // Track mouse position globally for use in all event handlers
        let mouseX = 0;
        let mouseY = 0;
        
        window.addEventListener('mousemove', function(e) {
            // Update global mouse position
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Update dot position immediately
            cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
            
            // Update outline with slight delay for trailing effect
            setTimeout(() => {
                cursorOutline.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
            }, 50);
        });
        
        // Add hover effect for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .btn, .skill, .project-card, .social-link, .timeline-item, .education-item, .achievement-item, .form-group input, .form-group textarea');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(1.5)`;
                cursorOutline.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(1.5)`;
                cursorOutline.style.backgroundColor = 'rgba(108, 99, 255, 0.1)';
                cursorOutline.style.borderColor = 'rgba(108, 99, 255, 0.6)';
                el.classList.add('element-hovered');
            });
            
            el.addEventListener('mouseleave', () => {
                cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(1)`;
                cursorOutline.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(1)`;
                cursorOutline.style.backgroundColor = 'transparent';
                cursorOutline.style.borderColor = 'rgba(108, 99, 255, 0.5)';
                el.classList.remove('element-hovered');
            });
        });
    }
    
    // Navigation highlighting based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
    
    // Highlight active navigation link based on scroll position
    function highlightNavOnScroll() {
        let scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Shrink header on scroll
    const header = document.querySelector('header');
    function shrinkHeaderOnScroll() {
        if (window.scrollY > 100) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    }
    
    // Add scroll event listeners
    window.addEventListener('scroll', function() {
        highlightNavOnScroll();
        shrinkHeaderOnScroll();
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelector('input[placeholder="Subject"]').value;
            const message = this.querySelector('textarea').value;
            
            // Here you would typically send the data to a server
            // For now, we'll just show a success message
            alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`);
            
            // Reset form
            this.reset();
        });
    }
    
    // Add animation classes to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.timeline-item, .education-item, .achievement-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    // Call once on load
    animateOnScroll();
    
    // Call on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Add CSS class for animation
    const style = document.createElement('style');
    style.textContent = `
        .timeline-item, .education-item, .achievement-item {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .timeline-item.animate, .education-item.animate, .achievement-item.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .nav-links a.active {
            color: var(--primary-color);
        }
        
        .nav-links a.active::after {
            width: 100%;
        }
        
        header.shrink {
            padding: 10px 0;
        }
        
        header.shrink nav {
            padding: 10px 5%;
        }
    `;
    document.head.appendChild(style);
});