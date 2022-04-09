//const  pokemonGet = require('../apiServices/controllers/pokemon.controller');
import pokemonGet from '../apiServices/controllers/pokemon.controller'

describe('Testing controller', () => {
  
     test('send params', async ()  => { 
        
        const mReq = { query: { txtFilter: "pika" } };
        const mRes = [];
        await pokemonGet(mReq, mRes);
        expect(mRes.code).toEqual(200);        
     },30000);
      
 });