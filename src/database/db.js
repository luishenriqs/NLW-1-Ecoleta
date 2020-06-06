//***Importando dependências do npm (sqlite3) + Method: .verbose()
const sqlite3 = require("sqlite3").verbose()

//***Criando objetos para operar o banco de dados
const db = new sqlite3.Database("./src/database/database.db")

//***Utilizando o objeto do banco de dados para operações
db.serialize(() => {
    //***Com comandos SQL***  
    //1 - Criar a tabela  ***OBS: Sinal de craze (``) permite quebra de linha
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
        "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
        "Colectoria",
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

    //3 - Consultar os dados da tabela


    //4 - Deletar os dados da tabela


})