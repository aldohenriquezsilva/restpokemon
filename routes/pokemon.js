const { Router } = require('express');

const { pokemonGet, pokemonPost } = require('../controllers/pokemon.controller');

const router = Router();


router.get('/', pokemonGet)
router.post('/', pokemonPost)


module.exports = router;