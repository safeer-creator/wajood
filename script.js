// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('show');
        });
    }

    // Product filtering (for products.html)
    window.filterProducts = (category) => {
        const products = document.querySelectorAll('.product-card');
        products.forEach(product => {
            if (category === 'all' || product.dataset.category === category) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    };

    // Form validation (basic)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Form submitted! (In production, handle with backend)');
        });
    });
});