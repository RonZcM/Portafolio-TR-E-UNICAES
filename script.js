document.addEventListener('DOMContentLoaded', () => {
    // Add subtle interactive hover effect on the glass panel
    const panel = document.querySelector('.glass-panel');
    
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
        
        panel.style.transform = `translateY(0) perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    // Reset transform when mouse leaves window
    document.addEventListener('mouseleave', () => {
        panel.style.transform = 'translateY(0) perspective(1000px) rotateY(0deg) rotateX(0deg)';
        panel.style.transition = 'transform 0.5s ease';
    });

    // Remove transition when moving for smoother effect
    document.addEventListener('mouseenter', () => {
        panel.style.transition = 'none';
    });

    // Dark Mode Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const moonIcon = document.querySelector('.moon-icon');
    const sunIcon = document.querySelector('.sun-icon');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
        } else {
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
        }
    });

    // Image Modal Logic
    const modal = document.getElementById("image-modal");
    const expandedImg = document.getElementById("expanded-image");
    const expandableImages = document.querySelectorAll(".expandable-image");
    const closeModal = document.querySelector(".close-modal");

    expandableImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            expandedImg.src = this.src;
            document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    // Scroll to Top Logic
    const scrollTopBtn = document.getElementById("scroll-top-btn");

    window.addEventListener("scroll", () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
