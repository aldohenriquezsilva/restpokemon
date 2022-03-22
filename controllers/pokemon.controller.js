const { response } =  require('express');

const pokemonGet = (req, res = response) => {
    res.json({
        id: 25,
        name: 'Pikachu',
        tipo: 'Electrico',
        img: 'http://'
    });
}

module.exports = { pokemonGet }