 const  controller = require('../apiServices/controllers/pokemon.controller');
//import pokemonGet from '../apiServices/controllers/pokemon.controller'
import clients from '../apiServices/clients/pokeApi';

const mockResp200 = { code: 200, data: Array(1) }
const mockError404 = { code: 404, data: Array(0) }
const mockError500 = { code: 500, data: Array(0) }

describe('Testing controller', () => {
  
   test('should return 200', async ()  => {
      //const mRes = mockResp200;
      //expect(mRes.code).toEqual(200);
      const txtFilter = 'pika';
      const mResFilt = await clients.performSearch(txtFilter);      
      expect(mResFilt.code).toBe(200); 
   },30000);

   test('should 404 and return correct value', async () => {   
     //const resp = mockError404;
     //expect(resp.code).toEqual(404);  
     const txtFilter = 'tester';
     const mResFilt = await clients.performSearch(txtFilter);
     expect(mResFilt.code).toBe(404);    
   });
          
 });