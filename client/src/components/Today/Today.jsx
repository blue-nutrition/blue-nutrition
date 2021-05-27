import React, { useContext, useState, useEffect }from 'react';
import { AppContext } from '../../Context.jsx';
import AtAGlance from './AtAGlance.jsx';
import Meal from './Meal.jsx';
const axios = require('axios');
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const foodQuotesGoalsMet = [
  'If you keep good food in your fridge, you will eat good food - Errick McAdams, Personal Trainer',
  'Your diet is a bank account. Good food choices are good investments. - Bethany Frankel, Entrepreneur',
  'Success is the sum of small efforts, repeated day in and day out - Robert Collier, Author',
  "Sorry, there's no magic bullet. You gotta eat healty and live healthy to be healthy and look healthy. End of story. - Morgan Spurlock, Documentarian",
  "You might have to fight a battle more than once to win it - Margaret Thatcher, Former UK Prime Minister",
  "Take care of your body. It's the only place you have to live. - Jim Rohn, Author",
  "The only way to keep your health is to eat what you don't want, drink what you don't like, an do what you'd rather not - Mark Twain",
  "Those who think they have no time for healthy eating will sooner or later have to find time for illness - Edward Stanley"
]

const waterQuotes = [
  "Thousands have lived without love. Not one without water - W.H. Auden",
  "I believe that water is the only drink for a wise man. - Henry David Thoreau",
  "I watched the piles of feces go up the conveyor belt… They made their way through the machine… A few minutes later I took a long taste of the end result: a glass of delicious drinking water. ― Bill Gates"
]

const Today = () => {
  const { today, tomorrow, userId, userGoals } = useContext(AppContext);
  const [water, setWaterData] = useState({});
  const [totalWater, setTotalWater] = useState(0);
  const [food, setFoodData] = useState({'Breakfast': [], 'Lunch': [], 'Dinner': []});
  const [totalCals, setTotalCals] = useState(0);
  const [totalFat, setTotalFat] = useState(0);
  const [totalCarbs, setTotalCarbs] = useState(0);
  const [totalProtein, setTotalProtein] = useState(0);
  const [goalsStatus, setGoalsStatus] = useState({});
  const [waterModal, setWaterModal] = React.useState(false);
  const [calorieModal, setCalorieModal] = React.useState(false);
  const [fatModal, setFatModal] = React.useState(false);
  const [carbModal, setCarbModal] = React.useState(false);
  const [proteinModal, setProteinModal] = React.useState(false);
  const [quote, setQuote] = React.useState(false);


  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: 'white',
      boxShadow: theme.shadows[5],
      width: '400px',
      padding: '1.5rem'
    },
    modalPaper: {
      backgroundColor: 'white',
      boxShadow: theme.shadows[5],
      width: '400px',
      padding: '1.5rem'
    }
  }));

  const classes = useStyles();

  const handleWaterClose = () => {
    setWaterModal(false);
  };

  const handleCalorieClose = () => {
    setCalorieModal(false);
  };

  const handleFatClose = () => {
    setFatModal(false);
  };

  const handleCarbClose = () => {
    setCarbModal(false);
  };

  const handleProteinClose = () => {
    setProteinModal(false);
  };

  const getWater = () => {
    axios.get('/data/water', { params: {userId: userId, startDate: today, endDate: tomorrow}})
    .then((response) => {
      let formattedWaterData = { 'Breakfast': 0, 'Lunch': 0, 'Dinner': 0};
      let waterTotal = 0;
      response.data.forEach((res) => {
        formattedWaterData[res.meal] = res.oz
        waterTotal += res.oz;
      })
      setWaterData(formattedWaterData);
      setTotalWater(waterTotal);
      if (waterTotal >= userGoals.water && goalsStatus.water.met === false && goalsStatus.water.notified === false && waterModal === false) {
        setQuote(waterQuotes[Math.floor(Math.random()*waterQuotes.length)]);
        let newGoalsStatus = {...goalsStatus};
        newGoalsStatus.water.met = true;
        newGoalsStatus.water.notified = true;
        axios.put('/data/goals', newGoalsStatus)
        .then((response) => {
          setGoalsStatus(response.data);
          setWaterModal(true);
        })
        .catch((err) => {
          console.log(err);
        })
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const getFood = () => {
    axios.get('/data/food', { params: {userId: userId, startDate: today, endDate: tomorrow}})
    .then((response) => {
      let formattedFoodData = { 'Breakfast': [], 'Lunch': [], 'Dinner': []};
      let calorieTotal = 0;
      let fatTotal = 0;
      let proteinTotal = 0;
      let carbTotal = 0;
      response.data.forEach((res) => {
        formattedFoodData[res.meal].push(res);
        calorieTotal += res.calories;
        fatTotal += res.fat;
        proteinTotal += res.protein;
        carbTotal += res.carbs;
      })

      setFoodData(formattedFoodData);
      setTotalCals(calorieTotal);
      setTotalFat(fatTotal);
      setTotalProtein(proteinTotal);
      setTotalCarbs(carbTotal);


      if (calorieTotal >= userGoals.calories && goalsStatus.calories.met === false && goalsStatus.calories.notified === false && calorieModal === false) {
        setQuote(foodQuotesGoalsMet[Math.floor(Math.random()*foodQuotesGoalsMet.length)]);
        console.log('Calorie total')

        let newGoalsStatus = JSON.parse(JSON.stringify(goalsStatus))
        newGoalsStatus.calories.met = true;
        newGoalsStatus.calories.notified = true;
        setGoalsStatus(newGoalsStatus);
        axios.put('/data/goals', newGoalsStatus)
        .then(() => {
          setCalorieModal(true);
        })
        .catch((err) => {
          console.log(err);
        })
      }

      if (fatTotal >= userGoals.fats) {
        setQuote(foodQuotesGoalsMet[Math.floor(Math.random()*foodQuotesGoalsMet.length)]);
        console.log('Fat total');
        console.log(goalsStatus);
        if (goalsStatus["fats"].met === false && goalsStatus["fats"].notified === false && fatModal === false) {
          let newGoalsStatus = JSON.parse(JSON.stringify(goalsStatus))
          newGoalsStatus["fats"].met = true;
          newGoalsStatus["fats"].notified = true;
          setGoalsStatus(newGoalsStatus);
          axios.put('/data/goals', newGoalsStatus)
          .then(() => {
            setFatModal(true);
          })
          .catch((err) => {
            console.log(err);
          })
        }
      }

      if (proteinTotal >= userGoals.protein) {
        setQuote(foodQuotesGoalsMet[Math.floor(Math.random()*foodQuotesGoalsMet.length)]);
        console.log('Protein total');
        console.log(goalsStatus);
        if (goalsStatus["protein"].met === false && goalsStatus["protein"].notified === false && proteinModal === false) {
          let newGoalsStatus = JSON.parse(JSON.stringify(goalsStatus))
          newGoalsStatus["protein"].met = true;
          newGoalsStatus["protein"].notified = true;
          setGoalsStatus(newGoalsStatus);
          axios.put('/data/goals', newGoalsStatus)
          .then(() => {
            setProteinModal(true);
          })
          .catch((err) => {
            console.log(err);
          })
        }
      }
      if (carbTotal >= userGoals.carbs) {
        setQuote(foodQuotesGoalsMet[Math.floor(Math.random()*foodQuotesGoalsMet.length)]);
        console.log('Carb total');
        console.log(goalsStatus);
        if (goalsStatus["carbs"].met === false && goalsStatus["carbs"].notified === false && fatModal === false) {
          let newGoalsStatus = JSON.parse(JSON.stringify(goalsStatus))
          newGoalsStatus["carbs"].met = true;
          newGoalsStatus["carbs"].notified = true;
          setGoalsStatus(newGoalsStatus);
          axios.put('/data/goals', newGoalsStatus)
          .then(() => {
            setCarbModal(true);
          })
          .catch((err) => {
            console.log(err);
          })
        }
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    axios.get('/data/goals', {params: {userId: userId, startDate: today, endDate: tomorrow}})
    .then((response) => {
      if (response.data.length === 0) {
        axios.post('/data/goals', {userId: userId, startDate: today})
        .then((response) => {
          setGoalsStatus(response.data);
          console.log('initializing new goals')
        })
      } else {
        setGoalsStatus(response.data[0]);
        console.log('getting previous goals')
      }
    })
  },[])

  useEffect(() => {
    getWater();
    getFood();
  }, [])


  return (
    <div className={'mainContainer'}>
      <AtAGlance water={totalWater} calories={totalCals} fat={totalFat} carbs={totalCarbs} protein={totalProtein}/>
      <Meal name={"Breakfast"} water={water['Breakfast']} food={food['Breakfast']} reRenderWater={getWater.bind(this)} reRenderFood={getFood.bind(this)}/>
      <Meal name={"Lunch"} water={water['Lunch']} food={food['Lunch']} reRenderWater={getWater.bind(this)} reRenderFood={getFood.bind(this)}/>
      <Meal name={"Dinner"} water={water['Dinner']} food={food['Dinner']} reRenderWater={getWater.bind(this)} reRenderFood={getFood.bind(this)}/>
      <Modal
          className={classes.modal}
          open={waterModal}
          onClose={handleWaterClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          >
              <div className={classes.modalPaper}>
                <div>You have met your water goal for today!</div><br/>
                <div><i>{quote}</i></div>
                <Button onClick={handleWaterClose}>Ok</Button>
              </div>
        </Modal>
        <Modal
          className={classes.modal}
          open={calorieModal}
          onClose={handleCalorieClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          >
              <div className={classes.modalPaper}>
                <div>You have met your calorie goal for today!</div><br/>
                <div><i>{quote}</i></div>
                <Button onClick={handleCalorieClose}>Ok</Button>
              </div>
        </Modal>
        <Modal
          className={classes.modal}
          open={fatModal}
          onClose={handleFatClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          >
              <div className={classes.modalPaper}>
                <div>You have met your fat goal for today!</div><br/>
                <div><i>{quote}</i></div>
                <Button onClick={handleFatClose}>Ok</Button>
              </div>
        </Modal>
        <Modal
          className={classes.modal}
          open={carbModal}
          onClose={handleCarbClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          >
              <div className={classes.modalPaper}>
                <div>You have met your carb goal for today!</div><br/>
                <div><i>{quote}</i></div>
                <Button onClick={handleCarbClose}>Ok</Button>
              </div>
        </Modal>
        <Modal
          className={classes.modal}
          open={proteinModal}
          onClose={handleProteinClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          >
              <div className={classes.modalPaper}>
                <div>You have met your protein goal for today!</div><br/>
                <div><i>{quote}</i></div>
                <Button onClick={handleProteinClose}>Ok</Button>
              </div>
        </Modal>
    </div>
  )
};

export default Today;