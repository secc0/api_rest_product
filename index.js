import axios from "axios"

// determina URL que quer acessar
const URL = "https://abc.app/products"

// determina headers
const Headers = {
    "Content-Type": "aplication/json"
}


// cria função assincrona para pegar data
async function getData(URL, Headers){ //define quais parametros a função vai receber
    try{// try para aacessar a URL
        const data = await axios.get(URL, Headers)
        return data.data.listProducts 
    }catch(err){
        console.log(err)
    }
}

const data = await getData(URL, Headers) //chama a função passando os parametros que a função deseja receber

async function create(URL, Headers){
    const body = {
        "name": "Vinicius",
      "description": "Pinto branco",
      "category": "gorila",
      "price": 5,
      "quantityInStock": 1,
      "supplier": "Africa",
      "entryDate": "04/26/2002",
      "expirationDate": "logo"
    }
    try{
        const response = await axios.post(URL, body, Headers)
        console.log(response.data)
    }catch(err){
        console.error(err)
    }
}

async function deletar(URL, id, Headers){
    try{
        const response = await axios.delete(`${URL}/${id}`, Headers)
    }catch(err){
        console.error(err)
    }
}

data.forEach(element => {
    deletar(URL, element._id , Headers)
    console.log(element._id)
});




await create(URL, Headers)
