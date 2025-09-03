

document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling for navigation links

    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {

        anchor.addEventListener('click', function (e) {

            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({

                behavior: 'smooth'

            });

            // Close mobile menu after clicking a link

            if (navMenu.classList.contains('active')) {

                navMenu.classList.remove('active');

                menuToggle.querySelector('i').classList.remove('fa-times');

                menuToggle.querySelector('i').classList.add('fa-bars');

            }

        });

    });

    // Header active link and sticky behavior

    const header = document.querySelector('header');

    const sections = document.querySelectorAll('section');

    const navLinks = document.querySelectorAll('.nav-menu a');

    const updateActiveLink = () => {

        let current = '';

        sections.forEach(section => {

            const sectionTop = section.offsetTop - header.offsetHeight;

            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {

                current = section.getAttribute('id');

            }

        });

        navLinks.forEach(link => {

            link.classList.remove('active');

            if (link.getAttribute('href').includes(current)) {

                link.classList.add('active');

            }

        });

        if (window.scrollY > 0) {

            header.classList.add('scrolled');

        } else {

            header.classList.remove('scrolled');

        }

    };

    window.addEventListener('scroll', updateActiveLink);

    updateActiveLink();

    // Mobile menu toggle

    const menuToggle = document.querySelector('.menu-toggle');

    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {

        navMenu.classList.toggle('active');

        const icon = menuToggle.querySelector('i');

        if (navMenu.classList.contains('active')) {

            icon.classList.remove('fa-bars');

            icon.classList.add('fa-times');

        } else {

            icon.classList.remove('fa-times');

            icon.classList.add('fa-bars');

        }

    });

    // Hero section tagline animation

    const taglineElement = document.querySelector('.hero-text .tagline');

    const words = JSON.parse(taglineElement.dataset.words);

    let wordIndex = 0;

    let charIndex = 0;

    let isDeleting = false;

    const typingSpeed = 150;

    const deletingSpeed = 100;

    const delayBetweenWords = 1500;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (isDeleting) {

            taglineElement.textContent = currentWord.substring(0, charIndex--);

        } else {

            taglineElement.textContent = currentWord.substring(0, charIndex++);

        }

        let speed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentWord.length + 1) {

            speed = delayBetweenWords;

            isDeleting = true;

        } else if (isDeleting && charIndex === 0) {

            isDeleting = false;

            wordIndex = (wordIndex + 1) % words.length;

            speed = typingSpeed;

        }

        setTimeout(typeEffect, speed);

    }

    typeEffect();

    // Portfolio items data (replace with your actual projects)

    const portfolioProjects = [

        {

            image: 'https://source.unsplash.com/800x600/?video-editing,film',

            title: 'Video Editing Portfolio',

            description: 'A curated collection of my video editing and motion graphics work for various clients.',

            liveLink: '#',

            githubLink: '#'

        },

        {

            image: 'https://source.unsplash.com/800x600/?web-design,coding',

            title: 'Web Development Project',

            description: 'A responsive website built from scratch showcasing my front-end development skills.',

            liveLink: '#',

            githubLink: '#'

        },

        {

            image: 'https://source.unsplash.com/800x600/?graphic-design,photo-editing',

            title: 'Photo Editing & Graphic Design',

            description: 'A showcase of my photo retouching and graphic design work for branding and social media.',

            liveLink: '#',

            githubLink: '#'

        },

        {

            image: 'https://source.unsplash.com/800x600/?coding,programming',

            title: 'CS Algorithm Visualizer',

            description: 'An interactive tool developed in JavaScript to visualize common algorithms.',

            liveLink: '#',

            githubLink: '#'

        }

    ];

    // Function to render portfolio items

    const renderPortfolio = () => {

        const portfolioGrid = document.querySelector('.portfolio-grid');

        portfolioProjects.forEach(project => {

            const portfolioItemDiv = document.createElement('div');

            portfolioItemDiv.classList.add('portfolio-item');

            portfolioItemDiv.innerHTML = `

                <img src="${project.image}" alt="${project.title}">

                <div class="portfolio-info">

                    <h3>${project.title}</h3>

                    <p>${project.description}</p>

                    <div class="portfolio-links">

                        <a href="${project.liveLink}" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>

                        <a href="${project.githubLink}" target="_blank"><i class="fab fa-github"></i> GitHub</a>

                    </div>

                </div>

            `;

            portfolioGrid.appendChild(portfolioItemDiv);

        });

    };

    renderPortfolio();

    // Contact form submission (example)

    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {

        e.preventDefault();

        alert('Thank you for your message! I will get back to you soon.');

        contactForm.reset();

    });

});