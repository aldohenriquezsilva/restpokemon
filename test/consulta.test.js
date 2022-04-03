
import clients from '../apiServices/clients/pokeApi';

describe('Testing PokeApi.js', () => {

    test('consulting', async ()  => { 
         const result = await clients.performSearch('pika');
         expect(typeof result).toBe('object');
    });
});