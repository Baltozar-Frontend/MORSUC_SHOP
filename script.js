document.getElementById('buyButton').addEventListener('click', function() {
    alert('Выберите количество UC в нашем Telegram-канале: https://t.me/MORS_uc');
});



// Анимация при скролле
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.hero, .rates, .reviews').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
});

// Клик по кнопке "Купить UC"
document.getElementById('buyButton').addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
        window.open('https://t.me/MORS_uc');
    }, 200);
});
