 const  controller = require('../apiServices/controllers/pokemon.controller');
//import pokemonGet from '../apiServices/controllers/pokemon.controller'
import clients from '../apiServices/clients/pokeApi';

const mockResp200 = { code: 200, data: Array(1) }
const mockError404 = { code: 404, data: Array(0) }
const mockError500 = { code: 500, data: Array(0) }

describe('Testing controller', () => {
  
   test('should return 200', async ()  => {
      const mRes = mockResp200;
      const mResFilt = await clients.performSearch('pika');
      expect(mRes.code).toEqual(200);      
      expect(mResFilt.code).toBe(200); 
   },30000);

   test('should 404 and return correct value', async () => {   
     const resp = mockError404;
     const mResFilt = await clients.performSearch('tester');
     expect(resp.code).toEqual(404);  
     expect(mResFilt.code).toBe(404);    
   });
          
 });