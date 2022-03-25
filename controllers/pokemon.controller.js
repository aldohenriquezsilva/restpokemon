const { response, request } =  require('express');

const axios = require('axios');

const pokemonGet = (req, res = response) => {
    
    res.json({
        id: 10
    });
}

const pokemonPost = async (req = request, res = response)  => {

    const { txt_busqueda =""} = req.query;
    const PokemonApi = axios.create();
    const ResultadoApi = await PokemonApi.get('https://pokeapi.co/api/v2/pokemon/'+ txt_busqueda);
   
    const result = [];    

    if(txt_busqueda === ''){
        
        for(var i = 0 ; i < ResultadoApi.data.results.length; i++)
        {
            const url = ResultadoApi.data.results[i].url;
            
            const ResultadoApiDet = await PokemonApi.get(url);

            const Pokemon = {
                id: ResultadoApiDet.data.id,
                name: ResultadoApiDet.data.name,
                img: ResultadoApiDet.data.sprites.front_default
            }                
        
            result.push(Pokemon);  
        }

        res.json({  
            result: result
        }); 

    }else {

        const Pokemon = {
            id: ResultadoApi.data.id,
            name: ResultadoApi.data.name,
            img: ResultadoApi.data.sprites.front_default
        }                
    
        result.push(Pokemon);

        res.json({  
            result: result
        });  
    }

   
}

module.exports = { pokemonGet, pokemonPost }