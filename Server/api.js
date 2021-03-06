const express = require('express');
const controller = require('./controller.js');

const router = express.Router();

router.get('/recipes', controller.getRecipes,
  (req, res) => {
    res.status(200).json(res.locals.recipes);
    // console.log(res.locals);
  });

router.post('/addRecipe',
  controller.addRecipe,
  controller.getRecipes,
  (req, res) => {
    res.status(200).json(res.locals.recipes);
    // res.status(200).json(res.locals.recipes);
  });

module.exports = router;
