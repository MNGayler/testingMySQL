const express = require("express");
const router = express.Router();
const { FoodNutrients } = require('../models')



router.get('/', async (req, res) => {
    const listOfFoods = await FoodNutrients.findAll()
    res.json(listOfFoods);
});

router.post("/", async (req, res) => {
    try {
      const post = req.body;
      await FoodNutrients.create(post);
      res.json(post);
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        // Handle uniqueness constraint violation error
        console.error('Duplicate entry. Food name must be unique.', error);
        res.status(400).json({ error: 'Duplicate entry. Food name must be unique.' });
      } else {
        // Handle other types of errors
        console.error('An unexpected error occurred.', error);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      }
    }
  });
  





module.exports = router;