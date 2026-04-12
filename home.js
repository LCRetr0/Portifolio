document.addEventListener('DOMContentLoaded', function() {

    const todosLinks = document.querySelectorAll('.sessao-link');
    
    todosLinks.forEach(function(link) {

        link.addEventListener('mouseenter', function() {
            link.style.transform = 'translateY(-5px) scale(1.05)';
            link.style.transition = 'all 0.3s ease';
            link.style.color = '#ffffff';  // Verde neon
            link.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
            link.style.boxShadow = '0 10px 25px rgba(255, 255, 255, 0.4)';
            link.style.padding = '12px 20px';
            link.style.borderRadius = '25px';
            link.style.background = 'rgba(255,255,255,0.1)';
        });
        

        link.addEventListener('mouseleave', function() {
            link.style.transform = 'translateY(0) scale(1)';
            link.style.color = '';
            link.style.textShadow = '';
            link.style.boxShadow = '';
            link.style.padding = '';
            link.style.borderRadius = '';
            link.style.background = '';
        });
        
        if (link.id === 'Home') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                link.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    link.style.transform = 'translateY(0) scale(1)';
                }, 150);
                
                alert('🏠 Você já está na Home!\n\n• Obrigado por ter visitado :)');
            });
        }
    });
});