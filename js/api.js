import { API_KEY, BASE_URL } from "./config.js";

// Requisições HTTP da API 
export async function buscarFilmes(termo) {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(termo)}`
    );

    if (!response.ok) throw new Error("Erro na requisição");

    const data = await response.json();
    return data.results;
}