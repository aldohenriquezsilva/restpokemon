const { response, request } =  require('express');

const axios = require('axios');

const pokemonGet = (req, res = response) => {
    
    res.json({
        id: 10
    });
}

const pokemonPost = async (req = request, res = response)  => {

    const { txt_busqueda =""} = req.query; 
   
    //const result = await axios.get('https://pokeapi.co/api/v2/pokemon/');   

   // Make a request for a user with a given ID
    axios.get('https://pokeapi.co/api/v2/pokemon/'+ txt_busqueda)
    .then(function (response) {
        // handle success        
            res.json({            
                filtro: txt_busqueda,
                result: response.data
            });  
    })
    .catch(function (error) {
        // handle error
        console.log(error);
        })
    .then(function () {
        // always executed
    });  

}

module.exports = { pokemonGet, pokemonPost }