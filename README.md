# 🎬 MovieHub

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

O **MovieHub** é uma aplicação web de descoberta de filmes, construída para consumir dados em tempo real da API oficial do [TMDB (The Movie Database)](https://www.themoviedb.org/). O projeto oferece uma interface moderna, focada em performance e usabilidade.

## 🚀 Funcionalidades

- **Interface Responsiva:** Design otimizado para dispositivos móveis e desktop usando Tailwind CSS.
- **Destaque:** Seção Hero imersiva com imagens de alta qualidade.
- **Listagem Dinâmica:** Exibição de filmes populares com informações cruciais (título, ano e nota).
- **Busca:** Campo de pesquisa intuitivo para encontrar seus filmes favoritos.
- **Tema Dark:** Paleta de cores moderna focada em uma experiência de visualização confortável.

> 💡 Sugestões são bem-vindas! Sinta-se à vontade para abrir uma *issue* com novas ideias de funcionalidades.

## 🛠️ Tecnologias

- **HTML5:** Estrutura semântica.
- **Tailwind CSS:** Estilização responsiva.
- **JavaScript (ES6+):** Lógica de consumo da API (Fetch).
- **API TMDB:** Fonte de dados cinematográficos.

## ⚙️ Como Configurar

1. **Obtenha uma API Key:** Registre-se no [TMDB](https://www.themoviedb.org/), vá em **Configurações > API** e gere sua chave.
2. **Clone o projeto:**

   ```bash
   git clone https://github.com/nicolasgerbes/movie-hub-aplication
   ```
   
2. **Vá para o diretório**

 ```bash
   cd movie-hub-aplication
 ```

4. **Integração:** No seu arquivo `js/home.js`, substitua a variável da chave pela sua API Key para começar a buscar dados.

## 📂 Estrutura do Projeto

```
moviehub/
├── index.html
├── components/
├── css/
│   └── styles.css
├── js/
│   ├── api.js        # Lógica principal e chave da API
│   ├── config.js       # Lógica de busca
│   └── home.js        # Funções auxiliares
│   └── render.js       # Funções auxiliares
│   └── result       # Funções auxiliares
├── assets/
│   └── img/
└── README.md
```

> 📝 A estrutura acima é um modelo sugerido. Ajuste conforme a organização real do seu repositório.

## 💡 Sobre a API do TMDB

A API do TMDB é uma plataforma robusta que permite acesso a uma das maiores bases de dados de filmes do mundo. Ela funciona via requisições HTTP (GET) retornando objetos JSON, facilitando a criação de interfaces dinâmicas que se atualizam automaticamente com os lançamentos mais recentes do cinema.

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um **fork** do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`).
3. Faça o **commit** das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`).
4. Faça o **push** para a branch (`git push origin feature/nova-funcionalidade`).
5. Abra um **Pull Request**.

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, estudar e modificar.

---

*Projeto desenvolvido para fins educacionais.* 🎓
