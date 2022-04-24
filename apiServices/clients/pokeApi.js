const axios = require('axios');

const { filterSearch } = require('../models/utils')

async function performSearch(txtFilter)
{
    const pokemonApi = axios.create();
    var status = 0;
    var req = {
        code: 0,
        data: []
    }
    const result = [];    

    try{

      if(txtFilter === '') {
          
          const resultApi = await pokemonApi.get(`https://pokeapi.co/api/v2/pokemon/${txtFilter}`);
          status = resultApi.status;
          for(var i = 0 ; i < resultApi.data.results.length; i++)
          {
              const url = resultApi.data.results[i].url;
              
              const resultApiDet = await pokemonApi.get(url);
                  
              const pokemon = {
                  id: resultApiDet.data.id,
                  name: resultApiDet.data.name,
                  img: resultApiDet.data.sprites.other['official-artwork'].front_default
              }                
          
              result.push(pokemon);  
          }       
  
      }else {
        
        const resultUrl = await pokemonApi.get('https://pokeapi.co/api/v2/pokemon?limit=898&offset=0');              
        
        const resultFilter = filterSearch(resultUrl.data.results, txtFilter); 
        status = resultFilter.length == 0 ? 404 : resultUrl.status;
        for(var i = 0 ; i < resultFilter.length; i++) {
      
            const resultApi = await pokemonApi.get(resultFilter[i].url);
            const pokemon = {
                id: resultApi.data.id,
                name: resultApi.data.name,
                img: resultApi.data.sprites.other['official-artwork'].front_default
            }              
        
            result.push(pokemon);
        }    
      }
      req = {
          code: status,
          data: result  
      }
      return req;    
    }
    catch(e)
    {         
        req = {
            code: 500,
            data: []  
        }
        return req;                
    }   
}

module.exports = { performSearch }