const express = require("express");
const routerLivro = require("./routes/livro");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/livros", routerLivro);

const port = 8000;

app.listen(port, () => console.log(`Escutando a porta ${port}`));
