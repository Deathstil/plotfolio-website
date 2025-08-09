// Mobile Menu Toggle
        const menuBtn = document.getElementById('menu-btn');
        const navbar = document.getElementById('navbar');
        
        menuBtn.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menuBtn.innerHTML = navbar.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('#navbar a').forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Active link highlighting
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('#navbar a');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
        
        // Project hover effect for touch devices
        document.querySelectorAll('.project-item').forEach(project => {
            let isTouched = false;
            
            project.addEventListener('touchstart', function() {
                if (!isTouched) {
                    this.classList.add('hover');
                    isTouched = true;
                } else {
                    this.classList.remove('hover');
                    isTouched = false;
                }
            }, {passive: true});
        });
        
        // Initialize the website
        document.addEventListener('DOMContentLoaded', () => {
            console.log('Creative portfolio loaded successfully');
            
            // Add subtle animation to section titles
            const sectionTitles = document.querySelectorAll('.section-title');
            sectionTitles.forEach(title => {
                title.style.opacity = '0';
                title.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                    title.style.opacity = '1';
                    title.style.transform = 'translateY(0)';
                }, 300);
            });
        });