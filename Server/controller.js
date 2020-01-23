const db = require('./models');

const controller = {};

controller.getRecipes = async (req, res, next) => {
  const queryStr = 'SELECT * FROM recipes';
  const recipes = await db.query(queryStr);
  res.locals.recipes = recipes.rows;
  next();
};

controller.getLists = async (req, res, next) => {
  const queryStr = 'SELECT * FROM recipelist';
  const lists = await db.query(queryStr);
  res.locals.lists = lists.rows;
  next();
};

controller.addRecipe = async (req, res, next) => {
  const { name, cooktime, rating } = req.body;
  const queryStr = `INSERT INTO recipes (name, cooktime, rating)
  VALUES ('${name}', '${cooktime}', ${rating});`;
  console.log(queryStr);
  await db.query(queryStr);
  next();
}

module.exports = controller;
