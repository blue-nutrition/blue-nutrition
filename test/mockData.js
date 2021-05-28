const users = [{
  userId: 5,
  email: 'user5@gmail.com',
  goals: {
    water: 100,
    calories: 2000,
    protein: 75,
    carbs: 150,
    fats: 50,
    goalWeight: null,
  }
}];

const water = [
  {
      "_id": "05-01",
      "dailyWater": 65
  },
  {
      "_id": "05-02",
      "dailyWater": 80
  },
  {
      "_id": "05-03",
      "dailyWater": 70
  },
  {
      "_id": "05-04",
      "dailyWater": 70
  },
  {
      "_id": "05-05",
      "dailyWater": 60
  },
  {
      "_id": "05-06",
      "dailyWater": 80
  },
  {
      "_id": "05-07",
      "dailyWater": 70
  },
  {
      "_id": "05-08",
      "dailyWater": 60
  },
  {
      "_id": "05-09",
      "dailyWater": 90
  },
  {
      "_id": "05-10",
      "dailyWater": 45
  },
  {
      "_id": "05-11",
      "dailyWater": 45
  },
  {
      "_id": "05-12",
      "dailyWater": 45
  },
  {
      "_id": "05-13",
      "dailyWater": 70
  },
  {
      "_id": "05-14",
      "dailyWater": 60
  },
  {
      "_id": "05-15",
      "dailyWater": 80
  },
  {
      "_id": "05-16",
      "dailyWater": 60
  },
  {
      "_id": "05-17",
      "dailyWater": 60
  },
  {
      "_id": "05-18",
      "dailyWater": 60
  },
  {
      "_id": "05-19",
      "dailyWater": 55
  },
  {
      "_id": "05-20",
      "dailyWater": 50
  },
  {
      "_id": "05-21",
      "dailyWater": 55
  },
  {
      "_id": "05-22",
      "dailyWater": 50
  },
  {
      "_id": "05-23",
      "dailyWater": 65
  },
  {
      "_id": "05-24",
      "dailyWater": 80
  },
  {
      "_id": "05-25",
      "dailyWater": 70
  }
];

const food = [
  {
      "_id": "04-25",
      "dailyCalories": 700,
      "dailyProtein": 23,
      "dailyCarbs": 70,
      "dailyFat": 11
  },
  {
      "_id": "04-26",
      "dailyCalories": 1300,
      "dailyProtein": 49,
      "dailyCarbs": 124,
      "dailyFat": 57
  },
  {
      "_id": "04-27",
      "dailyCalories": 1500,
      "dailyProtein": 41,
      "dailyCarbs": 115,
      "dailyFat": 31
  },
  {
      "_id": "04-28",
      "dailyCalories": 1500,
      "dailyProtein": 36,
      "dailyCarbs": 139,
      "dailyFat": 67
  },
  {
      "_id": "04-29",
      "dailyCalories": 1840,
      "dailyProtein": 54,
      "dailyCarbs": 90,
      "dailyFat": 57
  },
  {
      "_id": "04-30",
      "dailyCalories": 1500,
      "dailyProtein": 38,
      "dailyCarbs": 139,
      "dailyFat": 46
  },
  {
      "_id": "05-01",
      "dailyCalories": 2040,
      "dailyProtein": 64,
      "dailyCarbs": 114,
      "dailyFat": 62
  },
  {
      "_id": "05-02",
      "dailyCalories": 3040,
      "dailyProtein": 68,
      "dailyCarbs": 225,
      "dailyFat": 89
  },
  {
      "_id": "05-03",
      "dailyCalories": 1500,
      "dailyProtein": 36,
      "dailyCarbs": 139,
      "dailyFat": 67
  },
  {
      "_id": "05-04",
      "dailyCalories": 1140,
      "dailyProtein": 45,
      "dailyCarbs": 95,
      "dailyFat": 66
  },
  {
      "_id": "05-05",
      "dailyCalories": 3350,
      "dailyProtein": 66,
      "dailyCarbs": 173,
      "dailyFat": 92
  },
  {
      "_id": "05-06",
      "dailyCalories": 2540,
      "dailyProtein": 27,
      "dailyCarbs": 130,
      "dailyFat": 28
  },
  {
      "_id": "05-07",
      "dailyCalories": 1200,
      "dailyProtein": 51,
      "dailyCarbs": 134,
      "dailyFat": 79
  },
  {
      "_id": "05-08",
      "dailyCalories": 1940,
      "dailyProtein": 41,
      "dailyCarbs": 180,
      "dailyFat": 86
  },
  {
      "_id": "05-09",
      "dailyCalories": 2100,
      "dailyProtein": 35,
      "dailyCarbs": 124,
      "dailyFat": 24
  },
  {
      "_id": "05-10",
      "dailyCalories": 2000,
      "dailyProtein": 54,
      "dailyCarbs": 104,
      "dailyFat": 57
  },
  {
      "_id": "05-11",
      "dailyCalories": 1140,
      "dailyProtein": 19,
      "dailyCarbs": 145,
      "dailyFat": 70
  },
  {
      "_id": "05-12",
      "dailyCalories": 2240,
      "dailyProtein": 45,
      "dailyCarbs": 124,
      "dailyFat": 16
  },
  {
      "_id": "05-13",
      "dailyCalories": 2900,
      "dailyProtein": 55,
      "dailyCarbs": 154,
      "dailyFat": 32
  },
  {
      "_id": "05-14",
      "dailyCalories": 2240,
      "dailyProtein": 28,
      "dailyCarbs": 104,
      "dailyFat": 29
  },
  {
      "_id": "05-15",
      "dailyCalories": 1700,
      "dailyProtein": 54,
      "dailyCarbs": 134,
      "dailyFat": 57
  },
  {
      "_id": "05-17",
      "dailyCalories": 1500,
      "dailyProtein": 9,
      "dailyCarbs": 95,
      "dailyFat": 35
  },
  {
      "_id": "05-18",
      "dailyCalories": 1600,
      "dailyProtein": 51,
      "dailyCarbs": 135,
      "dailyFat": 36
  },
  {
      "_id": "05-19",
      "dailyCalories": 2350,
      "dailyProtein": 32,
      "dailyCarbs": 151,
      "dailyFat": 42
  },
  {
      "_id": "05-20",
      "dailyCalories": 2300,
      "dailyProtein": 36,
      "dailyCarbs": 104,
      "dailyFat": 47
  },
  {
      "_id": "05-21",
      "dailyCalories": 1500,
      "dailyProtein": 51,
      "dailyCarbs": 130,
      "dailyFat": 25
  },
  {
      "_id": "05-22",
      "dailyCalories": 1760,
      "dailyProtein": 42,
      "dailyCarbs": 139,
      "dailyFat": 23
  },
  {
      "_id": "05-23",
      "dailyCalories": 3000,
      "dailyProtein": 35,
      "dailyCarbs": 139,
      "dailyFat": 55
  },
  {
      "_id": "05-24",
      "dailyCalories": 2300,
      "dailyProtein": 150,
      "dailyCarbs": 215,
      "dailyFat": 65
  },
  {
      "_id": "05-25",
      "dailyCalories": 1150,
      "dailyProtein": 17,
      "dailyCarbs": 80,
      "dailyFat": 30
  }
];

module.exports = {users, water, food}