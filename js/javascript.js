let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".carousel-images img");
    slideIndex += step;

    // Prevent the images from looping
    if (slideIndex < 0) {
        slideIndex = 0; // Keep at first image
    } else if (slideIndex >= slides.length) {
        slideIndex = slides.length - 1; // Keep at last image
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

            // Check if it's the home-content section and animate images
            if (entry.target.id === 'home' && entry.isIntersecting) {
                const images = entry.target.querySelectorAll('.images img');
                images.forEach((img, index) => {
                    setTimeout(() => {
                        img.classList.add('animate'); // Add animation class to images
                    }, index * 300); // Stagger images by 300ms
                });
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));
};

document.addEventListener('DOMContentLoaded', animateOnScroll);

// JavaScript to handle the image swap every 3 seconds
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('#home .images img');
    let currentIndex = 0;

    // Function to show the next image
    const showNextImage = () => {
        // Remove the 'active' class from the current image
        images[currentIndex].classList.remove('active');
        
        // Update the index to the next image
        currentIndex = (currentIndex + 1) % images.length;

        // Add the 'active' class to the next image
        images[currentIndex].classList.add('active');
    };

    // Initially show the first image
    images[currentIndex].classList.add('active');

    // Swap images every 3 seconds
    setInterval(showNextImage, 3000);
});

// Open modal when an image is clicked (example: image in a gallery)
document.querySelectorAll('.portfolio-item img').forEach(img => {
    img.addEventListener('click', function() {
        const modal = document.getElementById('fullscreenModal');
        const modalImage = document.getElementById('modalImage');
        modal.style.display = 'flex';  // Show the modal
        modalImage.src = this.src;    // Set the image to the clicked one
    });
});

// Close modal when the close button is clicked
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('fullscreenModal').style.display = 'none';  // Hide the modal
});

// Optional: Navigation for the modal image (Left and Right Arrows)
document.getElementById('leftArrow').addEventListener('click', function() {
    // Logic for changing the modal image to the previous one
    // This will depend on how you're managing your images in the gallery
});

document.getElementById('rightArrow').addEventListener('click', function() {
    // Logic for changing the modal image to the next one
});

