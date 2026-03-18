document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.term-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('data-target');
            if (!targetId) {
                console.warn('Нет атрибута data-target');
                return;
            }

            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                console.log('Прокрутка к элементу:', targetId);
            } else {
                console.warn('Элемент с ID "' + targetId + '" не найден');
            }
        });
    });
});
