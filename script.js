
document.addEventListener('DOMContentLoaded', () => {
    console.log('DVJ Productions Maintenance Page Loaded');

    // Ensure video plays
    const video = document.getElementById('bg-video');
    if (video) {
        video.play().catch(error => {
            console.log('Video autoplay failed:', error);
            // Fallback UI or silent fail?
            // Usually due to browser policy. Muted autoplay usually works.
        });
    }

    // Optional: Add some interactive effects
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mousemove', (e) => {
            const { offsetWidth: width, offsetHeight: height } = logo;
            const { offsetX: x, offsetY: y } = e;
            const moveX = (x / width - 0.5) * 20;
            const moveY = (y / height - 0.5) * 20;
            logo.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

        logo.addEventListener('mouseleave', () => {
            logo.style.transform = 'translate(0, 0)';
        });
    }
});
