// Ao carregar a página, verifica se o usuário salvou algum tema
// Se sim, aplica o tema salvo
// Se não, deixa o tema padrão

// Como eu detecto quando a página carregou?
document.addEventListener("DOMContentLoaded", function() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }
});


// Como eu detecto quando alguem clica no button?
// Ao clicar no button, disparo uma função
// Preciso verificar se body possui a classe dark
// Se tiver, eu removo a classe dark
// Se não tiver, eu adiciono a classe dark

const btnChangeTheme = document.getElementById("changeTheme");

btnChangeTheme.onclick = function() {
    const body = document.body;

    // precisamos salvar o tema que o usuário selecionou
    if ( body.classList.contains("dark") ) {
        body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    } else {
        body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
}
