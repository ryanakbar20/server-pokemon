const Pokemon = require("../models/Pokemon");

module.exports = {
  listPokemon: async (req, res) => {
    try {
      const pokemon = await Pokemon.find();

      res.status(200).json({
        results: pokemon,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json("Error Internal Server");
    }
  },

  addPokemon: async (req, res) => {
    try {
      const { idPokemon, name, imageUrl, url } = req.body;

      const pokemon = await Pokemon.create({ idPokemon, name, imageUrl, url });

      res.status(200).json({ pokemon });
    } catch (error) {
      console.log(error.message);
      res.status(500).json("Error Internal Server");
    }
  },

  renamePokemon: async (req, res) => {
    try {
      const { name, idPokemon } = req.body;

      const pokemon = await Pokemon.findOne({ idPokemon });
      pokemon.name = name;
      await pokemon.save();

      res.status(200).json({ pokemon });
    } catch (error) {
      console.log(error.message);
      res.status(500).json("Error Internal Server");
    }
  },
};
