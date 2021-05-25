var express = require('express');
var router = express.Router();

const userController = require('../database/controllers/users');
const foodController = require('../database/controllers/food');
const waterController = require('../database/controllers/water');
const weightController = require('../database/controllers/weight');

router.get('/users', userController.getUser);
router.get('/food', foodController.getFood);
router.get('/water', waterController.getWater);
router.get('/weight', weightController.getWeight);
router.post('/weight', weightController.postWeight);
router.post('/users', userController.postUser)


router.post('/water', waterController.postWater);
router.post('/food', foodController.postFood);

router.delete('/food', foodController.deleteFood);

module.exports = router;