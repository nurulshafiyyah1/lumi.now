const images = document.querySelectorAll('.portfolio-image');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        showImage();
        lightbox.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

function showImage() {
    lightboxImage.src = images[currentIndex].src;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
});


lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".carousel-images img");
    slideIndex += step;

    if (slideIndex < 0) {
        slideIndex = 0; 
    } else if (slideIndex >= slides.length) {
        slideIndex = slides.length - 1; 
    }

    const carousel = document.querySelector(".carousel-images, '#home .images img'");
    carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
}

const animateOnScroll = () => {
    const sections = document.querySelectorAll('.section-content, .services-container, #home .home-content');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }

            
            if (entry.target.id === 'home' && entry.isIntersecting) {
                const images = entry.target.querySelectorAll('.images img');
                images.forEach((img, index) => {
                    setTimeout(() => {
                        img.classList.add('animate');
                    }, index * 300); 
                });
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));
};

document.addEventListener('DOMContentLoaded', animateOnScroll);

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('#home .images img');
    let currentIndex = 0;

    const showNextImage = () => {
        images[currentIndex].classList.remove('active');
        
        currentIndex = (currentIndex + 1) % images.length;

        images[currentIndex].classList.add('active');
    };

    images[currentIndex].classList.add('active');

    setInterval(showNextImage, 3000);
});

document.querySelectorAll('.portfolio-item img').forEach(img => {
    img.addEventListener('click', function() {
        const modal = document.getElementById('fullscreenModal');
        const modalImage = document.getElementById('modalImage');
        modal.style.display = 'flex';  
        modalImage.src = this.src;   
    });
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('fullscreenModal').style.display = 'none';  
});

document.getElementById('leftArrow').addEventListener('click', function() {
});

document.getElementById('rightArrow').addEventListener('click', function() {
});
