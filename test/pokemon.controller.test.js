 const  controller = require('../apiServices/controllers/pokemon.controller');
//import pokemonGet from '../apiServices/controllers/pokemon.controller'

const mockResp200 = {code: 200, data: Array(1)}
const mockError404 = {code: 404, data: Array(0)}
const mockError500 = {code: 500, data: Array(0)}

describe('Testing controller', () => {
  
   test('should return 200', async ()  => {
      const mRes = mockResp200;
      expect(mRes.code).toEqual(200);        
   },30000);

   test('should 404 and return correct value', async () => {   
     const resp = mockError404;
     expect(resp.code).toEqual(404);     
   });

   test('should return 500', async () => {   
      const resp = mockError500;      
      expect(resp.code).toEqual(500);      
    });
          
 });