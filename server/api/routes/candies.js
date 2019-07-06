const router = require('express').Router();
const Candy = require('../../db/models/Candy'); //this works
//const {Candy} = require('../../models/') //this doesn't work (plain Candy doesn't either)
//GET api/candies
router.get('/', async (req, res, next) => {
  const allCandies = await Candy.findAll();

  res.json(allCandies);
});

module.exports = router;
