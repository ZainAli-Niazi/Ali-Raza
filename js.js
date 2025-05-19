   // Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mobileMenu = document.querySelector('.mobile-menu');
        const mobileDropdownBtns = document.querySelectorAll('.mobile-dropdown-btn');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            // Change icon between bars and times
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Mobile Dropdown Toggle
        mobileDropdownBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const dropdown = btn.parentElement.nextElementSibling;
                dropdown.classList.toggle('active');
                
                // Rotate chevron icon
                const icon = btn.querySelector('i');
                icon.classList.toggle('fa-rotate-180');
            });
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = document.querySelectorAll('.mobile-nav-link:not(.mobile-dropdown-btn), .mobile-dropdown-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });






         document.addEventListener('DOMContentLoaded', function() {
            const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                
                question.addEventListener('click', () => {
                    // Close all other items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle current item
                    item.classList.toggle('active');
                });
            });
        });






          // Scroll to top button
            const scrollToTopBtn = document.querySelector('.scroll-to-top');
            
            window.addEventListener('scroll', function () {
                if (window.pageYOffset > 300) {
                    scrollToTopBtn.classList.add('active');
                } else {
                    scrollToTopBtn.classList.remove('active');
                }
            });
            
            scrollToTopBtn.addEventListener('click', function () {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });