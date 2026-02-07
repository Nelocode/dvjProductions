document.addEventListener('DOMContentLoaded', () => {
    console.log('DVJ Productions Maintenance Page Loaded');

    // Ensure video plays
    const video = document.getElementById('bg-video');
    if (video) {
        video.play().catch(error => {
            console.log('Video autoplay failed:', error);
        });
    }

    // Logo interactive effect
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

    // Web3Forms AJAX submission
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const formMessage = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Disable button and show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';
            formMessage.style.display = 'none';

            const formData = new FormData(form);

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });

                const result = await response.json();

                if (result.success) {
                    // Success
                    formMessage.textContent = '✅ ¡Gracias! Te avisaremos cuando estemos listos.';
                    formMessage.style.color = '#4ade80';
                    formMessage.style.display = 'block';
                    form.reset();
                } else {
                    // Error from API
                    formMessage.textContent = '❌ Hubo un error. Por favor intenta de nuevo.';
                    formMessage.style.color = '#ff003c';
                    formMessage.style.display = 'block';
                }
            } catch (error) {
                // Network error
                formMessage.textContent = '❌ Error de conexión. Por favor intenta de nuevo.';
                formMessage.style.color = '#ff003c';
                formMessage.style.display = 'block';
            }

            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Notificarme';
        });
    }
});
