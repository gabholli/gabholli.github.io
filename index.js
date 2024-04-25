const backToTopButton = document.getElementById("back-to-top-button")

// Function to handle the "scroll to top" button click
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // for smoothly scrolling
    });
};


backToTopButton.addEventListener('click', scrollToTop)
