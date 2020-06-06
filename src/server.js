const express = require("express") //----->Importando dependência do npm
const server = express()

//***Configurar pasta pública
//Arquivos estáticos
server.use(express.static("public"))

//***Utilizando template engine => (Permite html dinâmico)
//***const nunjucks = require("nunjucks") => Requisitando o nunjucks instalado no npm
const nunjucks = require("nunjucks")

//Configuração nunjucks("Pastas com html", "{propriedades}")
nunjucks.configure("src/views", {
    express: server, //Ligando o nunjucks ao servidor
    noCache: true //Sem Cache durante o desenvolvimento
})


//***Renderizar as paginas html
//O (.render) do servidor passa pelo nunjucks onde estão os arq. html
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})


//***Ligar o servidor
server.listen(3000)