//(XMLHttpRequest) -> Nova requisição HTTP assíncronas com JS ( Técnica AJAX)
var xhr = new XMLHttpRequest();

//Abrindo conexão -> xhr.open("Método", "URL")
xhr.open("GET", "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome");

//Esperando pela resposta da requisição -> (load)
xhr.addEventListener("load", function() {


    //Testando se a requisição html foi bem sucedida
    if (xhr.status == 200) {

        var resposta = xhr.responseText;
        console.log(resposta);
        console.log(typeof resposta); //"typeof" mostra o tipo de resposta recebida

        //Os dados são recebidos no formato JSON (JS OBJECT NOTATION)
        //JSON.parse() -> Converte do formato JSON para JS
        var ufs = JSON.parse(resposta);
        console.log(ufs);
        console.log(typeof ufs);


    }
    //Caso requisição retorne erro exibe alerta!
    else {
        console.log("Erro na requisição")
    }
})

//Enviando a nova requisição
xhr.send()


//********************************************************