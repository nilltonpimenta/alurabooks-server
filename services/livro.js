const fs = require("fs");
const { json } = require("stream/consumers");

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"));
}

function getLivroPorId(id) {
    const livros = getTodosLivros();

    const livroFiltrado = livros.filter((livro) => livro.id === id)[0];
    return livroFiltrado;
}

function insereLivro(livroNovo) {
    const livros = getTodosLivros();

    const novaListaLivros = [...livros, livroNovo];

    fs.writeFileSync("livros.json", JSON.stringify(novaListaLivros));
}

function modificaLivro(mod, id) {
    let livrosAtuais = getTodosLivros();
    const indiceMod = livrosAtuais.findIndex((livro) => livro.id === id);

    const conteudoMod = { ...livrosAtuais[indiceMod], ...mod };

    livrosAtuais[indiceMod] = conteudoMod;

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais));
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
};
