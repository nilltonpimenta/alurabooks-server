const fs = require("fs");

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync("favoritos.json"));
}

function deletaFavoritoPorID(id) {
    let livros = getTodosFavoritos();
    const livrosFiltrados = livros.filter((livro) => livro.id !== id);

    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados));
}

function insereFavorito(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const favoritos = getTodosFavoritos();

    const livroInserido = livros.find((livro) => livro.id === id);

    const novaListaLivrosFavoritos = [...favoritos, livroInserido];

    fs.writeFileSync(
        "favoritos.json",
        JSON.stringify(novaListaLivrosFavoritos)
    );
}

module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorID,
    insereFavorito,
};
