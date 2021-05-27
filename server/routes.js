var express = require('express');
var router = express.Router();

const userController = require('../database/controllers/users');
const foodController = require('../database/controllers/food');
const waterController = require('../database/controllers/water');
const weightController = require('../database/controllers/weight');
const goalsController = require('../database/controllers/goals');

router.get('/users', userController.getUser);
router.get('/food', foodController.getFood);
router.get('/dailyfood', foodController.getDailyFood);
router.get('/water', waterController.getWater);
router.get('/dailyWater', waterController.getDailyWater);
router.get('/dailyWeight', weightController.getDailyWeight);
router.get('/goals', goalsController.getGoals);

router.post('/weight', weightController.postWeight);
router.post('/users', userController.postUser)
router.post('/water', waterController.postWater);
router.post('/food', foodController.postFood);
router.post('/goals', goalsController.postGoals);

router.delete('/food', foodController.deleteFood);

router.put('/goals', goalsController.updateGoals);

module.exports = router;