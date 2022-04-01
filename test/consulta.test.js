import clients from '../clients';

describe('Prueba en PokeApi.js', () => {

    test('prueba consulta', async ()  => { 
        const resultado = await clients.performSearch(); 
        console.log(resultado);       
    });
});

