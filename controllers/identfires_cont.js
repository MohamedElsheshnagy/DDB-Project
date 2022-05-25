const Identifier = require('../models/identfires');

const createID = async (req, res) => {
    try {
      const ids = await Identifier.create(req.body);
      res.status(201).json({
        success: true,
        ids,
      });
    } catch (error) {
      res.status(500).json(error.message);
    }
  };

  module.exports={createID}
