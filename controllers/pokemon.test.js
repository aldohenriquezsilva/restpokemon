import  { pokemonGet } from './pokemon.controller'
import '@testing-library/jest-dom/dist/matchers'

describe('prueba consulta', () => {
 
  test('consulta', async () => {

    const txtBusqueda = 'pika';

    const resultado = await pokemonGet( txtBusqueda );

    expect ( resultado ).toBe(txtBusqueda);

  });

})