'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')
    
const tempClient = {
    nome: "Fernando",
    email: "fernandoleoni@gmail.com",
    celular: "11123459876",
    cidade: "São Roque"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClients) => localStorage.setItem('db_client', JSON.stringify(dbClients))
 
// CRUD

const createClient = (client) => {
    const dbClients = getLocalStorage()
    dbClients.push(client)
    setLocalStorage(dbClients)
}

const readClient = () => getLocalStorage()

const updateClient = (index, client) => {
    const dbClients = readClient()
    dbClients[index] = client
    setLocalStorage(dbClients)
}

const deleteClient = (index) => {
    const dbClients = readClient()
    dbClients.splice(index, 1)
    setLocalStorage(dbClients)
}

// Interação

const isValidFields() => {

}

const saveClient = () => {
    if (isValidFields()) {
        console.log("Cadastrando cliente")
    }
}

// Eventos

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar').addEventListener('click', saveClient)