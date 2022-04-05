
import clients from '../apiServices/clients/pokeApi';

describe('Testing PokeApi.js', () => {

   afterAll(() => jest.setTimeout(30000));

    test('consulting with information', async ()  => { 
         const result = await clients.performSearch('pika');
         expect(typeof result).toBe('object');
    });

    test('consulting blank information', async ()  => {     
        const result = await clients.performSearch('');       
        expect(typeof result).toBe('object');
   },30000);

});

