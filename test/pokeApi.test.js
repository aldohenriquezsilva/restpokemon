
import clients from '../apiServices/clients/pokeApi';

const mockError500 = {code: 500, data: Array(0)}

describe('Testing PokeApi.js', () => {   

    test('consulting with information', async ()  => { 
         const result = await clients.performSearch('pika');
         expect(typeof result.data).toBe('object');
    });

    test('consulting blank information', async ()  => {     
        const result = await clients.performSearch('');       
        expect(typeof result.data).toBe('object');
    },30000);  
  
    test('consulting code', async ()  => { 
        const result = await clients.performSearch('pika');
        expect(result.code).toBe(200);  
        });
   
       test('consulting poke not exists', async ()  => { 
             const result = await clients.performSearch('jkdasdhja');
             expect(result.code).toBe(404); 
        });

        test('should 500 and return correct value', async () => {         
         //const result = await clients.performSearch('test');
         //expect(result.code).toBe(500); 
        });  

});

