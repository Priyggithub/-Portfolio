// Smooth scrolling functionality and highlight active section in the navigation bar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });

            // Remove active class from all navigation links
            document.querySelectorAll('a').forEach(link => {
                link.classList.remove('active');
            });

            // Add active class to the clicked navigation link
            this.classList.add('active');
        }
    });
});
