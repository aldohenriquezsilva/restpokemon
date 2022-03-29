const axios = require('axios');

const { filterSearch } = require('../utils')

async function performSearch(txtBusqueda)
{
    const pokemonApi = axios.create(); 
    const result = [];    

    if(txtBusqueda === '') {
        
        const resultadoApi = await pokemonApi.get(`https://pokeapi.co/api/v2/pokemon/${txtBusqueda}`);

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

    }else {
        
        const resultadoUrl = await pokemonApi.get('https://pokeapi.co/api/v2/pokemon?limit=898&offset=0');        

        const resultado = filterSearch(resultadoUrl.data.results, txtBusqueda);  
        for(var i = 0 ; i < resultado.length; i++) {
      
            const resultadoApi = await pokemonApi.get(resultado[i].url);
            const pokemon = {
                id: resultadoApi.data.id,
                name: resultadoApi.data.name,
                img: resultadoApi.data.sprites.other['official-artwork'].front_default
            }              
        
            result.push(pokemon);
        }    
    }    
    
    return result;
}

module.exports = { performSearch }