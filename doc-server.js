/*******************[ATENÇÃO]***********************

PARA INICIAR O SERVIDOR E RODAR O PROGRAMA:
    1 - ABRA O BASH
    2 - $npm start

    O RESULTADO DEVER SER ESSE:
    
        > nlw@ start C:\Users\SORAIA\Desktop\Developer\nlw
        > nodemon src/server.js

        [nodemon] 2.0.4
        [nodemon] to restart at any time, enter `rs`
        [nodemon] watching path(s): *.*
        [nodemon] watching extensions: js,mjs,json
        [nodemon] starting `node src/server.js`
    
    AGORA O SERVER ESTA PRONTO PARA RODAR O PROGRAMA
****************************************************



*********************[BACK END]*********************
******************[SERVER EXPRESS]******************

NO BASH
    node -v => Mostra a versão do Node que esta instalada
    node + enter => Entra no terminal do Node
    npm -v => Mostra a versão do npm
****************************************************



***************[CRIANDO MÓDULOS]********************
***NODE PACKAGE MANANGER*** - Gerenciador de Dependências do Node

NO BASH 
    npm init -y
    ---> "Cria a package.json"

    npm install express
    ---> "Cria a node_modules" e a "package-lock.json"

    npm install nodemon -D 
    ---> "Re-start server a qualquer momento ao digitar 'rs + enter' "
****************************************************



************[ATALHO PARA O SERVER EXPRESS]**********

NO PACKAGE.JSON => (/src/package.json)

    "scripts": {
        "test": "echo /Error: no test especified/" && exit 1" ------->REMOVA ESSA LINHA

    "scripts": {
        "start": "nodemon src/server.js" ------->ADICIONE ESSA LINHA

    ***A partir de agora ===> npm start => Liga o servidor
****************************************************



****************[TEMPLATE ENGINE]*******************
***NUNJUCKS***

NO BASH 
    npm install nunjucks
    ---> "Oferece dinamismo ao html"

****************************************************



*************[CRIANDO O SERVIDOR EXPRESS]***********

NO SERVER.JS => (/src/server.js)

    const express = require("express")
    const server = express()
    server.use(express.static("public"))  ----->Pega arq. js, css e assets da pasta "public"

    const nunjucks = require("nunjucks")
    nunjucks.configure("src/views", {     ----->Nunjucks pega arq. html da pasta "views"
        express: server,                  ----->Ligando o nunjucks ao servidor
        noCache: true                     ----->Sem Cache durante o desenvolvimento
    })

    server.get("/", (req, res) => {                       ----->Configuração de rota
        return res.render("index.html")                   ----->Renderizando pelo nunjucks
    })
    server.get("/create-point", (req, res) => {           ----->Configuração de rota
        return res.render("create-point.html")            ----->Renderizando pelo nunjucks
    })
    server.get("/search", (req, res) => {                 ----->Configuração de rota
        return res.render("search-results.html")          ----->Renderizando pelo nunjucks
    })
    server.listen(3000)-------->O end. do server será: localhost:3000
****************************************************



OBS: 
    Configurações de preferências do JSON
    Ctrl+Shift+p => >Preferences: Open Settings(JSON)

    Dois clicks + Ctrl D => Permite digitação também no próx elemento

*/


/*******************[ATENÇÃO]***********************




****************************************************



*****************[BANCO DE DADOS]*******************
********************[SQLite3]***********************

NO BASH
    npm install sqlite3
    ---> "Instala o SQLite na aplicação"


****************************************************




*/