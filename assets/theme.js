document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('[data-before-after]');

    sliders.forEach(slider => {
        const handle = slider.querySelector('[data-slider-handle]');
        const line = slider.querySelector('[data-slider-line]');
        const afterImage = slider.querySelector('.after-image');

        if (!handle || !line || !afterImage) return;

        function updateSlider(value) {
            const percentage = value;
            line.style.left = percentage + '%';
            afterImage.style.clipPath = `inset(0 0 0 ${percentage}%)`;
        }

        handle.addEventListener('input', function(e) {
            updateSlider(e.target.value);
        });

        updateSlider(50);
    });
});
