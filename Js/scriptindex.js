document.addEventListener('DOMContentLoaded', () => {
    const ctt = document.getElementById("Contato");
    const menuContato = document.getElementById("menuContato");

    if (ctt && menuContato) {
        ctt.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); 
            menuContato.classList.toggle("ativo");
        });

        document.addEventListener('click', (e) => {
            if (!ctt.contains(e.target) && !menuContato.contains(e.target)) {
                menuContato.classList.remove("ativo");
            }
        });
    }
});