const { Router } = require('express');

const pokemonGet = require('../apiServices/controllers/pokemon.controller');

const router = Router();


router.get('/', pokemonGet)


module.exports = router;