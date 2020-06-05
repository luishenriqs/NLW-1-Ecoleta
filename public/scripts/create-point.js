// () => {} "Arrow function" - Função anonima declarada com flexa 

const ufSelect = document.querySelector("select[name=uf]"); //Busca o seletor de estados

const stateInput = document.querySelector("[name=state]"); //Busca o input type hidden no html

const citySelect = document.querySelector("[name=city]"); //Busca o seletor de cidades

const colletedItems = document.querySelector("[name=items]"); //Busca o input type hidden no html


populateUf()

//document.addEventListener("change", getCities) //Escuta qualquer mudança no document
selectUf.addEventListener("change", getCities) //Escuta qualquer mudança no selectUf


//**************************[Function]**************************
//***Carregando as 27 UFs

function populateUf() {

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
//**************************************************************


//**************************[Function]**************************
function getCities(event) {

    const ufValue = event.target.value; //Salvando o nº da uf selecionada
    console.log(ufValue)

    const indexSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexSelectedState].text //selectedState into input hidden
    console.log(stateInput.value) //Valor no input hidden salvo para exportá-lo depois

    //Buscando as cidades de acordo com o nº da uf selecionada
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a cidade</option> "; //Limpando conteúdo em caso de pesquisa anterior
    citySelect.disabled = true; //Desabilita o seletor de cidades antes de carregar novamente

    fetch(url)
        .then(function(res) { return res.json() })
        //.then((res) => {return res.json()}) ----> Modelo "Arrow function"
        //.then(res => res.json()) ----> Arrow function reduzido
        .then(cities => {

            for (const city of cities) {
                citySelect.innerHTML += `<Option value="${city.nome}">${city.nome}</Option>`
            };
            citySelect.disabled = false; //Habilita o seletor de cidades
        });
}
//**************************************************************

//**********************[Itens de Coleta]***********************

const itemsToCollect = document.querySelectorAll(".items-grid li");

//Ouvidor de eventos para cada um dos ítens do grid
for (const items of itemsToCollect) {
    items.addEventListener("click", handleSelectedItem)
}

let selectedItems = []

function handleSelectedItem(event) {

    const itemLi = event.target
    itemLi.classList.toggle("selected") //"classList.toggle()"-> Add or Remove class
    const itemId = itemLi.dataset.id; //Id do item clicado

    //***.findIndex -> Identifica o índice do elemento dentro do array
    //***item -> item dentro do array "selectedItems"
    //***itemId -> item clicado (event)

    //***"item" e "itemId" são iguais? Ou seja, o ítem clicado ja esta dentro do array?
    //***Se sim, a função vai retornar o índice do ítem (caso esteja no array)
    //***Se não, a função vai retornar "-1" se o itemId (ítem clicado) não estiver no array

    /*
    //*****Long Function******
    const alreadySelected = selectedItems.findIndex(function(item) {
        const itemFound = item == itemId
        return itemFound   
    })
    //************************

    //*****Arrow Function*****
    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId
        return itemFound
    })
    //************************
    */

    //*****Short Function*****
    const alreadySelected = selectedItems.findIndex(item => item == itemId);
    //************************


    //***Selecionando ítens]***

    //***if => Clicar em ítem (itemId) que já esta no array => .filter remove
    //***else => Clicar em ítem (itemId) que não esta no array => .push adiciona
    //***"selectedItems" => Return dos ítens adicionados menos os que forem removidos

    //***.filter -> Filtra (remove) quando return false
    //***Return True =>  (São diferentes) => Não filtra(não remove)
    //***Return False => (Não são diferentes, são iguais) => Filtra(remove)  

    if (alreadySelected >= 0) {
        const filteredItems = selectedItems.filter(item => {
            itemIsDifferent = item != itemId
            return itemIsDifferent
        })
        selectedItems = filteredItems
    } else {
        selectedItems.push(itemId)
    }
    colletedItems.value = selectedItems

    console.log(selectedItems) //Tempo real da atualização do selectedItems

};
//**************************************************************