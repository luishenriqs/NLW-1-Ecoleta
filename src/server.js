const express = require("express") //----->Importando dependência do npm
const server = express()
const db = require("./database/db.js") //----->Importando banco de dados

//***Configurar pasta pública
//Arquivos estáticos
server.use(express.static("public"))

//***Habilitar o req.body na aplicação
//.use => Configurações no express
server.use(express.urlencoded({ extended: true }))

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

//***Console.log do BackEnd exibe os dados no terminal do bash

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})


server.post("/savepoint", (req, res) => {

    //***Inserir os dados no banco de dados

    const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if (err) {
            console.log(err)
            return res.send("Erro no cadastro")
        }
        console.log("Cadastrado com sucesso")
        console.log(this)



        return res.render("create-point.html", { saved: true })
    }

    db.run(query, values, afterInsertData)


})

//***req.query => query strings da URL
//***req.body => conteúdo da tag body


server.get("/search", (req, res) => {

    //***Pegar os dados do banco de dados
    db.all(`SELECT * FROM places`, function(err, rows) {
        if (err) {
            return console.log(err)
        }

        const total = rows.length

        //***Renderizar a pag search-results com os dados da tabela places do db.js
        return res.render("search-results.html", { places: rows, total })
    })
})


//***Ligar o servidor
server.listen(3000)