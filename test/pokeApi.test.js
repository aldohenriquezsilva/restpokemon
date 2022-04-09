
import clients from '../apiServices/clients/pokeApi';

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
     expect(result.code).toEqual(200);  
});

});

