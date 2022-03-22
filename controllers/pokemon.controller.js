const { response, request } =  require('express');

const pokemonGet = (req, res = response) => {
    
    res.json({
        id: 10
    });
}

const pokemonPost = (req = request, res = response) => {

    const { txt_busqueda =""} = req.query;

    res.json({
        msg: 'Post',
        txt_busqueda: txt_busqueda
    });
}

module.exports = { pokemonGet, pokemonPost }