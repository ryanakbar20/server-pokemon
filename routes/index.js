var express = require("express");
var router = express.Router();

const pokemonController = require("../controllers/pokemon");

/* GET home page. */
router.get("/pokemon", pokemonController.listPokemon);
router.post("/pokemon", pokemonController.addPokemon);
router.put("/pokemon", pokemonController.renamePokemon);

module.exports = router;
