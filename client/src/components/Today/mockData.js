const water = [
  {
      "_id": "60b11aad8f440811d2a67d19",
      "meal": "Breakfast",
      "userId": "103958845069917417321",
      "__v": 0,
      "date": "2021-05-28T16:30:37.281Z",
      "oz": 50
  },
  {
      "_id": "60b11ab28f440811d2a67d20",
      "meal": "Lunch",
      "userId": "103958845069917417321",
      "__v": 0,
      "date": "2021-05-28T16:30:52.840Z",
      "oz": 25
  },
  {
      "_id": "60b11ae88f440811d2a67d5c",
      "meal": "Dinner",
      "userId": "103958845069917417321",
      "__v": 0,
      "date": "2021-05-28T16:31:36.354Z",
      "oz": 10
  }
]

const water2 = [
    {
        "_id": "60b11aad8f440811d2a67d19",
        "meal": "Breakfast",
        "userId": "103958845069917417321",
        "__v": 0,
        "date": "2021-05-28T16:30:37.281Z",
        "oz": 50
    },
    {
        "_id": "60b11ab28f440811d2a67d20",
        "meal": "Lunch",
        "userId": "103958845069917417321",
        "__v": 0,
        "date": "2021-05-28T16:30:52.840Z",
        "oz": 50
    },
    {
        "_id": "60b11ae88f440811d2a67d5c",
        "meal": "Dinner",
        "userId": "103958845069917417321",
        "__v": 0,
        "date": "2021-05-28T16:31:36.354Z",
        "oz": 10
    }
  ]

const food = [
  {
      "_id": "60b10d0048e18905540dd8d9",
      "calories": 500,
      "protein": 5,
      "carbs": 20,
      "fat": 10,
      "foodName": "Oatmeal",
      "userId": "103958845069917417321",
      "meal": "Breakfast",
      "date": "2021-05-28T06:00:00.000Z",
      "__v": 0
  },
  {
      "_id": "60b11ae07e53de0af7094166",
      "calories": 600,
      "protein": 15,
      "carbs": 10,
      "fat": 20,
      "foodName": "Quiche",
      "userId": "103958845069917417321",
      "meal": "Lunch",
      "date": "2021-05-28T06:00:00.000Z",
      "__v": 0
  },
  {
      "_id": "60b11b037e53de0af7094167",
      "calories": 700,
      "protein": 15,
      "carbs": 15,
      "fat": 15,
      "foodName": "Pizza",
      "userId": "103958845069917417321",
      "meal": "Dinner",
      "date": "2021-05-28T06:00:00.000Z",
      "__v": 0
  }
]

const food2 = [
    {
        "_id": "60b10d0048e18905540dd8d9",
        "calories": 500,
        "protein": 55,
        "carbs": 120,
        "fat": 110,
        "foodName": "Oatmeal",
        "userId": "103958845069917417321",
        "meal": "Breakfast",
        "date": "2021-05-28T06:00:00.000Z",
        "__v": 0
    },
    {
        "_id": "60b11ae07e53de0af7094166",
        "calories": 600,
        "protein": 15,
        "carbs": 110,
        "fat": 120,
        "foodName": "Quiche",
        "userId": "103958845069917417321",
        "meal": "Lunch",
        "date": "2021-05-28T06:00:00.000Z",
        "__v": 0
    },
    {
        "_id": "60b11b037e53de0af7094167",
        "calories": 700,
        "protein": 100,
        "carbs": 15,
        "fat": 15,
        "foodName": "Pizza",
        "userId": "103958845069917417321",
        "meal": "Dinner",
        "date": "2021-05-28T06:00:00.000Z",
        "__v": 0
    }
  ]

const goals = [
    {
        "weight": {
            "met": false,
            "notified": false
        },
        "water": {
            "met": false,
            "notified": false
        },
        "calories": {
            "met": true,
            "notified": true
        },
        "protein": {
            "met": false,
            "notified": false
        },
        "carbs": {
            "met": false,
            "notified": false
        },
        "fats": {
            "met": false,
            "notified": false
        },
        "_id": "60b10ce048e18905540dd8d8",
        "userId": "103958845069917417321",
        "date": "2021-05-28T06:00:00.000Z",
        "__v": 0
    }
]

const deleteFood1 =   {
    "_id": "60b10d0048e18905540dd8d9",
    "calories": 500,
    "protein": 5,
    "carbs": 20,
    "fat": 10,
    "foodName": "Oatmeal",
    "userId": "103958845069917417321",
    "meal": "Breakfast",
    "date": "2021-05-28T06:00:00.000Z",
    "__v": 0
}

const deleteFood2 = [
    {
        "_id": "60b11ae07e53de0af7094166",
        "calories": 600,
        "protein": 15,
        "carbs": 10,
        "fat": 20,
        "foodName": "Quiche",
        "userId": "103958845069917417321",
        "meal": "Lunch",
        "date": "2021-05-28T06:00:00.000Z",
        "__v": 0
    },
    {
        "_id": "60b11b037e53de0af7094167",
        "calories": 700,
        "protein": 15,
        "carbs": 15,
        "fat": 15,
        "foodName": "Pizza",
        "userId": "103958845069917417321",
        "meal": "Dinner",
        "date": "2021-05-28T06:00:00.000Z",
        "__v": 0
    }
  ]

const goalsTwo = {
    "weight": {
        "met": false,
        "notified": false
    },
    "water": {
        "met": true,
        "notified": true
    },
    "calories": {
        "met": true,
        "notified": true
    },
    "protein": {
        "met": false,
        "notified": false
    },
    "carbs": {
        "met": true,
        "notified": true
    },
    "fats": {
        "met": true,
        "notified": true
    },
    "_id": "60b27a70ad7c4621cd8c8a19",
    "userId": "103958845069917417321",
    "date": "2021-05-29T06:00:00.000Z",
    "__v": 0
}

const goalsThree = {
    "weight": {
        "met": false,
        "notified": false
    },
    "water": {
        "met": true,
        "notified": true
    },
    "calories": {
        "met": true,
        "notified": true
    },
    "protein": {
        "met": true,
        "notified": true
    },
    "carbs": {
        "met": true,
        "notified": true
    },
    "fats": {
        "met": true,
        "notified": true
    },
    "_id": "60b27a70ad7c4621cd8c8a19",
    "userId": "103958845069917417321",
    "date": "2021-05-29T06:00:00.000Z",
    "__v": 0
}

module.exports = {water, food, food2, goals, goalsTwo, goalsThree, deleteFood1, deleteFood2, water2}