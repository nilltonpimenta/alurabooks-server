const {
    getTodosFavoritos,
    insereFavorito,
    deletaFavoritoPorID,
} = require("../services/favorito");

function getFavoritos(req, res) {
    try {
        //throw new Error("Teste");
        const livros = getTodosFavoritos();
        res.send(livros);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function postFavorito(req, res) {
    try {
        const id = req.params.id;
        insereFavorito(id);
        res.status(201);
        res.send("Livro inserido com sucesso!");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function deleteFavorito(req, res) {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            deletaFavoritoPorID(id);
            res.send("Item deletado com sucesso!");
        } else {
            res.send("ID inválido!");
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito,
};
