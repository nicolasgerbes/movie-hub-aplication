import { IMG_URL } from "./config.js";


// Renderização de images seguindo um layout

export function renderResults(filmes, container) {
    container.innerHTML = "";

    if (filmes.length === 0) {
        container.innerHTML = `<p class="text-zinc-400 col-span-full">Nenhum filme encontrado para essa busca.</p>`;
        return;
    }

    filmes.forEach((filme) => {
        const poster = filme.poster_path
            ? `${IMG_URL}${filme.poster_path}`
            : "https://via.placeholder.com/500x750?text=Sem+imagem";

        const card = document.createElement("div");
        card.className = "rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:scale-105 transition cursor-pointer";
        card.innerHTML = `
            <img src="${poster}" alt="${filme.title}" class="w-full h-auto">
            <div class="p-3">
                <h3 class="text-white font-bold text-sm truncate">${filme.title}</h3>
                <p class="text-zinc-400 text-xs">${filme.release_date ? filme.release_date.split("-")[0] : "N/A"}</p>
            </div>
        `;

        card.addEventListener("click", () => {
            window.location.href = `filme.html?id=${filme.id}`;
        });

        container.appendChild(card);
    });
}

export function renderLoading(container) {
    container.innerHTML = `<p class="text-zinc-400 col-span-full">Buscando...</p>`;
}

export function renderError(container) {
    container.innerHTML = `<p class="text-red-500 col-span-full">Erro ao buscar filmes.</p>`;
}