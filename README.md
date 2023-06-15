<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

<div align="center">
  <img src="/README/signature.PNG" alt="Logo">
</div>
<h3 align="center">Quiz Master</h3>

  <p align="center">
    Welcome to my Quiz Master's code!
    <br/>
    Introducing "QuizMaster: The Ultimate Quiz Challenge"
    <br />
    <a href="https://github.com/RyanJKS/mern-quiz-app-app/tree/master/src"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://mern-quiz-app-nine.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/RyanJKS/mern-quiz-backend">View Backend Code</a>
    ·
    <a href="https://jhelan.dev/">View Portfolio Website</a>
    ·
    <a href="https://github.com/RyanJKS/mern-quiz-app-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/RyanJKS/mern-quiz-app-app/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#extra-packages">Extra Packages</a></li>
        <li><a href="#functionalities">Functionalities</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <!-- <li><a href="#roadmap">Roadmap</a></li> -->
    <li><a href="#contributing">Contributing</a></li>
    <!-- <li><a href="#license">License</a></li> -->
    <li><a href="#contact">Contact</a></li>
    <!-- <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

There are 2 parts to this whole project. This is the front end and the backend can be viewed using the link above.

QuizMaster is a fully responsive React app that will captivate your attention and leave you eager to explore more. This engaging quiz game combines the power of React with MongoDB and Node.js to offer a personalized experience like no other.

<!-- put gif video here og how it fully works -->

<div align="center">
  <img src="/README/intro.gif" alt="Usage GIF">
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![Bootstrap][Bootstrap.com]][Bootstrap-url]
- [![Material UI][Material-UI.js]][Material-UI-url]
- [![React Router][ReactRouter.js]][ReactRouter-url]
- [![NodeJS][NodeJS.js]][NodeJS-url]
- [![MongoDB][MongoDB.js]][MongoDB-url]
- [![MongoDB][Mongoose.js]][Mongoose-url]

### Extra Packages

- REST API (ASE Quiz) - Click <a href="https://rapidapi.com/AhmedSemih/api/ases-quiz-api1/"
                target="_blank"
                rel="noreferrer"> here</a> for Quiz Questions Documentation
- Bcrypt (Password Hashing)
- JSON Web Token (JWT Authentication)
- Axios
- Express
- Cors
- Material UI Icons
- React ChartJs 2
- Vercel (Deployment)

### Functionalities

- Users will have a personalized dashboard displaying charts and statistics.
- Users can register a unique username and password to access the game.
- Users should solve 10 quizzes in each game to test their knowledge.
- Users will be able to track their game completion time and number of correct answers.
- Users can compete on the leaderboard to showcase their quiz-solving skills.
- Users will have their account secured with bcrypt-hashed passwords.
- Users will have their intellectual property protected through JWT token authentication.
- Users should explore the variety of quiz categories available for an engaging experience.
- Users can view their progress and improvement over time through the line graph on the dashboard.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Upon entering the world of QuizMaster, you are prompted with a sample of the personalised dashboard, the leaderboard and an overview on how to navigate the page.

<div align="center">
  <img src="/README/intro.PNG" alt="Usage GIF">
</div>

You will then have the opportunity to create a unique username and password or use our demo account, which will grant you access to a vast array of quizzes and unlock a host of exciting features. Your credentials and gameplay statistics will be securely stored in the database, allowing you to track your progress and climb the ranks on the prestigious leaderboard.

<div align="center">
  <img src="/README/registration.PNG" alt="Usage GIF">
</div>

Once logged in, you are showed you custom leaderboard with time graph and points received on a doughnut chart.

<div align="center">
  <img src="/README/home.PNG" alt="Usage GIF">
</div>

One of the standout features of QuizMaster is the thrilling race against the clock. Each game presents you with 10 thought-provoking quizzes that challenge your knowledge across various subjects. The app meticulously tracks the time it takes for you to solve each game and the number of correct answers you achieve. Can you beat your own records and become the ultimate QuizMaster?

<div align="center">
  <img src="/README/game.PNG" alt="Usage GIF">
</div>

To support your development and provide valuable insights, QuizMaster offers a personalized dashboard on the homepage. Within this intuitive interface, you'll find a visually appealing doughnut chart that displays your total points won and lost, giving you a comprehensive overview of your performance. Additionally, a dynamic line graph showcases your average time taken for each game you've played, helping you identify areas for improvement and track your progress over time.

<div align="center">
  <img src="/README/updated-board.PNG" alt="Usage GIF">
</div>

To ensure the utmost security and protect your intellectual property, QuizMaster employs robust measures. User passwords are securely hashed using bcrypt, making them virtually impenetrable. Furthermore, the app utilizes JWT tokens, adding an extra layer of protection to safeguard your data and privacy.

Ready to embark on a thrilling journey of knowledge and competition? Join QuizMaster today, challenge yourself, and let your quest to become the ultimate QuizMaster begin!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

In order to get started you will need to do the libraries mentioned above and configure your repository using the following steps:

### Prerequisites

NPM is essential before any further steps are made since it is used to install all the necessary libraries for this project.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/RyanJKS/mern-quiz-app-app.git
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Jhelan Suggun - [@linkedIn](https://www.linkedin.com/in/jhelan-suggun-jks7n99/) - jksuggun@hotmail.co.uk

Project Link: [https://github.com/RyanJKS/mern-quiz-app-app](https://github.com/RyanJKS/mern-quiz-app-app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/RyanJKS/mern-quiz-app.svg?style=for-the-badge
[contributors-url]: https://github.com/RyanJKS/mern-quiz-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/RyanJKS/mern-quiz-app.svg?style=for-the-badge
[forks-url]: https://github.com/RyanJKS/mern-quiz-app/network/members
[stars-shield]: https://img.shields.io/github/stars/RyanJKS/mern-quiz-app.svg?style=for-the-badge
[stars-url]: https://github.com/RyanJKS/mern-quiz-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/RyanJKS/mern-quiz-app.svg?style=for-the-badge
[issues-url]: https://github.com/RyanJKS/mern-quiz-app/issues
[license-shield]: https://img.shields.io/github/license/RyanJKS/mern-quiz-app.svg?style=for-the-badge
[license-url]: https://github.com/RyanJKS/mern-quiz-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jhelan-suggun-jks7n99/
[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Material-UI.js]: https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=MUI&logoColor=white
[Material-UI-url]: https://mui.com/material-ui/getting-started/overview/
[ReactRouter.js]: https://img.shields.io/badge/ReactRouter-007FFF?style=for-the-badge&logo=React-Router&logoColor=white
[ReactRouter-url]: https://reactrouter.com/en/main
[NodeJS.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white
[NodeJS-url]: https://nodejs.org/en
[MongoDB.js]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
[Mongoose.js]: https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=Mongoose&logoColor=white
[Mongoose-url]: https://www.mongodb.com/
