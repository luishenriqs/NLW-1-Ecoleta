/******************[BANCO DE DADOS]*******************
********************[SQLite3]***********************

NO BASH
    npm install sqlite3
    ---> "Instala o SQLite na aplicação"

****************************************************/



//***Importando dependências do npm (sqlite3) + Method: .verbose()
const sqlite3 = require("sqlite3").verbose()

//***Criando objetos para operar o banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

/*BANCO DE DADOS
//***Utilizando o objeto do banco de dados para operações
db.serialize(() => {
    //***Com comandos SQL***  
    //1 - Criar a tabela  ***OBS: 1- Tabela name: places, 2- Sinal de craze (``) permite quebra de linha
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //2 - Inserir dados na tabela
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
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "Papersider",
        "Rua Guilherme Gembbala, Jardim América",
        "Nº 658",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]

    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }
        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData)

    //3 - Consultar os dados da tabela  ***OBS: (SELECT *) ---> Seleciona todos os itens
    db.all(`SELECT id, name, items FROM places`, function(err, rows) {
        if (err) {
            return console.log(err)
        }

        console.log("Aqui estão seus registros:")
        console.log(rows)
    })

    //4 - Deletar os dados da tabela
    db.run(`DELETE FROM places WHERE id = ?`, [2], function(err) {
        if (err) {
            return console.log(err)
        }
        console.log("Registros deletados com sucesso")
    })
})

 */