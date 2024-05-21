const backToTopButton = document.getElementById("back-to-top-button")

// Function to handle the "scroll to top" button click
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // for smooth scrolling
    });
};

if (backToTopButton) {
    backToTopButton.addEventListener('click', scrollToTop);
}

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.fade-in').classList.add('visible');
});