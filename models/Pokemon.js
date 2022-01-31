const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  idPokemon: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);
module.exports = Pokemon;
