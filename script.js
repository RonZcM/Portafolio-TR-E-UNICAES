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
});
