import  { performSearch } from './pokeApi'
import '@testing-library/jest-dom/dist/matchers'

describe('prueba consulta', () => {
 
  test('consulta', async () => {

    const txtBusqueda = 'pika';

    const resultado = await performSearch( txtBusqueda );

    console.log(resultado);

  });

})