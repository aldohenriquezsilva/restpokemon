import '@testing-library/jest-dom/dist/matchers'
const { filterSearch } = require('../apiServices/models/utils')

describe('Testing Filter', () => {

    test('Filter', async ()  => { 
        
        const data = [{
            id: 0,
            img: "",
            name: "pikchau",
        },
        {
            id: 1,
            img:"",
            name:"charmander"    
        },
        {
            id: 2,
            img:"",
            name:"ditto"    
        }];

        const filter = 't';
        const result = filterSearch(data, filter);
        expect( result ).toEqual( 
            expect.arrayContaining([ 
              expect.objectContaining(
                {
                  name: 'ditto',                  
                } 
              )
            ])
          );
    });
});