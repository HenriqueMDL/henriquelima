document.addEventListener("DOMContentLoaded", function() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }
});

const btnChangeTheme = document.getElementById("changeTheme");

if (btnChangeTheme) {
    btnChangeTheme.onclick = function() {
        const body = document.body;

        if (body.classList.contains("dark")) {
            body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    };
}

window.addEventListener("scroll", function() {
    const bg = document.querySelector(".parallax-bg");

    if (bg) {
        let scroll = window.scrollY;
        bg.style.transform = `translateY(-${scroll * 0.2}px)`;
    }
});
