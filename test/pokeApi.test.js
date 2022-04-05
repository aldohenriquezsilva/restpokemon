
import clients from '../apiServices/clients/pokeApi';

describe('Testing PokeApi.js', () => {

    test('consulting pika', async ()  => { 
         const result = await clients.performSearch('pika');
         expect(typeof result).toBe('object');
    });

    test('consulting blank', async ()  => { 
        const result = await clients.performSearch('');
        expect(typeof result).toBe('object');
   });

});

