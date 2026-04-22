document.addEventListener('DOMContentLoaded', () => {
    // Efeito de Fade-in ao carregar a página
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 1.2s ease";
        document.body.style.opacity = "1";
    }, 100);

    // Scroll Suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === "#") return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, 
                    behavior: 'smooth'
                });
            }
        });
    });
});