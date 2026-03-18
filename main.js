document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.term-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');
            if (!targetId) return;
            
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                console.log('Scrolled to:', targetId);
            }
        });
    });
});
