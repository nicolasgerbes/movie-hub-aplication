import { buscarFilmes } from "./api.js";
import { renderResults, renderLoading, renderError } from "./render.js";

const resultsContainer = document.getElementById("results");
const searchTitle = document.getElementById("search-title");

const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("q");

if (query) {
    carregarResultados(query);
} else {
    searchTitle.textContent = "Nenhum termo pesquisado.";
}

async function carregarResultados(termo) {
    searchTitle.textContent = `Resultados para: "${termo}"`;
    renderLoading(resultsContainer);

    try {
        const filmes = await buscarFilmes(termo);
        renderResults(filmes, resultsContainer);
    } catch (error) {
        console.error(error);
        renderError(resultsContainer);
    }
}