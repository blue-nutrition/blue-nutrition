<p align='center'>
  <img src='screenshots/Screen Shot 2021-06-02 at 2.19.24 PM.png'/>
</p>

## Features
- Create an account/login with Google
- Create/edit nutritional goals including weight, daily calories, and macros
- Add/edit food and water by meal each day to view daily goal progress
- Motivational messages appear upon reaching a goal
- View historical progress by day, week, month, and all time
- View average weight/calories/macros, as well as day-by-day historical breakdown in graph format

## Built with:
- Front end: React, MaterialUI
- Testing: Jest with React Testing Library, CircleCI
- Linter: ESLint
- Back end: Express, Axios, MongoDB with Mongoose
- Deployment: AWS EC2 Instance

## Preview:
<img src='screenshots/Screen Shot 2021-06-02 at 11.15.57 AM.png'/>
<img src='screenshots/Screen Shot 2021-06-02 at 11.18.39 AM.png'/>
<img src='screenshots/Screen Shot 2021-06-02 at 2.14.34 PM.png'/>
<img src='screenshots/image (1).png'>/
<img src='screenshots/image (2).png'>/
<img src='screenshots/image (3).png'>/
<img src='screenshots/image (4).png'>/

## Installation:
- From your terminal, `git clone https://github.com/blue-nutrition/blue-nutrition.git`
- Navigate to the main project directory
- `npm install`
- `npm run start-react`
- In a separate terminal, `npm run start`

## Usage:
Navigate to localhost:8080 after running the above commands.

## File Structure
```
.
├── circleci/
│   └── config.yml
├── client/
│   └── dist/
│   │   └── bundle.js
│   │   └── fonts.css
│   │   └── index.html
│   └── src/
│       └── index.jsx
│       └── theme.js
│       └── App.jsx
│       └── Context.jsx
│       └── components/
│           └── Goals/
│           └── Today/
│           └── TrackProgress/
│           └── Welcome/
│           └── NavBar.jsx
│           └── SalutAppBar.jsx
├── database/
│   └── controllers/
│   └── models/
│   └── index.js
├── server/
│   └── index.js
│   └── routes.js
├── .eslintrc
├── .gitignore
├── babel.config.json
├── index.js
├── package.json
├── README.md
└── webpack.config.js
```

