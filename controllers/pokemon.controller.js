const { response, request } =  require('express');

const axios = require('axios');

const pokemonGet = (req, res = response) => {
    
    res.json({
        id: 10
    });
}

const pokemonPost = (req = request, res = response) => {

    const { txt_busqueda =""} = req.query; 
   
    const resp = axios.get('https://pokeapi.co/api/v2/pokemon/');   

    res.json({            
        filtro: txt_busqueda,
        result: resp
    });  
}

module.exports = { pokemonGet, pokemonPost }