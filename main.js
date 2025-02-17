document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Modo Oscuro";
    toggleButton.classList.add("toggle-dark-mode");
    document.body.appendChild(toggleButton);

    // Función para alternar modo oscuro
    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
    });

    // Aplicar modo oscuro si estaba activado anteriormente
    if (localStorage.getItem("dark-mode") === "true") {
        document.body.classList.add("dark-mode");
    }
});
