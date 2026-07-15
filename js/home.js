const form = document.getElementById("search-form");
const input = document.getElementById("search-input");

// Tela inicial
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const query = input.value.trim();
    if (!query) return;

    window.location.href = `resultados.html?q=${encodeURIComponent(query)}`;
});