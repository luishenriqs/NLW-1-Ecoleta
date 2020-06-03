// () => {} "Arrow function" - Função anonima declarada com flexa 


function populateUf() {
    const ufSelect = document.querySelector("select[name=uf]");

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
        .then(function(res) { return res.json() })
        //.then((res) => {return res.json()}) ----> Modelo "Arrow function"
        //.then(res => res.json()) ----> Arrow function reduzido
        .then(states => {

            for (const state of states) {
                ufSelect.innerHTML += `<Option value="${state.id}">${state.nome}</Option>`
            };

        });
};
populateUf()

function getCities(event) {
    const citySelect = document.querySelector("[name=city]"); //Busca o seletor de cidades

    const stateInput = document.querySelector("[name=state]"); //Input type hidden no html

    const ufValue = event.target.value; //Salvando o nº da uf selecionada

    const indexSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexSelectedState].text //selectedState into input hidden
    console.log(stateInput.value) //Valor no input hidden salvo para exportá-lo depois

    //Buscando as cidades de acordo com o nº da uf selecionada
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    fetch(url)
        .then(function(res) { return res.json() })
        //.then((res) => {return res.json()}) ----> Modelo "Arrow function"
        //.then(res => res.json()) ----> Arrow function reduzido
        .then(cities => {

            for (const city of cities) {
                citySelect.innerHTML += `<Option value="${city.id}">${city.nome}</Option>`
            };
            citySelect.disabled = false; //Habilita o seletor de cidades
        });


}

document
    .addEventListener("change", getCities)