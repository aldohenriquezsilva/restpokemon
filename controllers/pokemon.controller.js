const { response, request } =  require('express');

const axios = require('axios');

const pokemonGet = (req, res = response) => {
    
    res.json({
        id: 10
    });
}

const pokemonPost = async (req = request, res = response)  => {

    const { txt_busqueda =""} = req.query;
    const pokemonApi = axios.create();  
    
    const resultadoApi = await pokemonApi.get(`https://pokeapi.co/api/v2/pokemon/${txt_busqueda}`);
    
    const result = [];    

    if(txt_busqueda === ''){
        
        for(var i = 0 ; i < resultadoApi.data.results.length; i++)
        {
            const url = resultadoApi.data.results[i].url;
            
            const resultadoApiDet = await pokemonApi.get(url);
                
            const pokemon = {
                id: resultadoApiDet.data.id,
                name: resultadoApiDet.data.name,
                img: resultadoApiDet.data.sprites.other['official-artwork'].front_default
            }                
        
            result.push(pokemon);  
        }

        res.json({  
            result: result
        }); 

    }else {
        
        const pokemon = {
            id: resultadoApi.data.id,
            name: resultadoApi.data.name,
            img: resultadoApi.data.sprites.other['official-artwork'].front_default
        }                
    
        result.push(pokemon);

        res.json({  
            result: result
        });  
    }

   
}

module.exports = { pokemonGet, pokemonPost }