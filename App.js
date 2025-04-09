const express = require("express");
const routerLivro = require("./routes/livro");

const app = express();

app.use("/livro", routerLivro);

const port = 8000;

app.listen(port, () => console.log(`Escutando a porta ${port}`));
