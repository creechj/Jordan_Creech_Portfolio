import { 
  FueGoals_Screenshot,
  WorkItOff_Screenshot,
  TechBlog_Screenshot,
  ECommerce_Screenshot,
  EmployeeTracker_Screenshot,
  WeatherApp_Screenshot
} from '../../assets'

const projects = [
  {
    imagelink: 'https://project1team5-def011f76af0.herokuapp.com/',
    imagesrc: FueGoals_Screenshot,
    title: 'FueGoals',
    description: 'Exercise-logging application for saving pending and completed activities. MySQL/Sequelize back-end with Handlebars dynamically-generated HTML. Uses Multer and AWS for uploading and storing user profile images Partner project - responsible for database design and functionality, API structure, and user experience.',
    repolink: 'https://github.com/creechj/FueGoals'
  },
  {
    imagelink: 'https://bootcampgroup1.github.io/Work_It_Off/index.html',
    imagesrc: WorkItOff_Screenshot,
    title: 'Work It Off',
    description: 'Allows users to compare a consumed calorie total for a selected quantity of food or beverage against an expended calory total for a selected duration of activities. Built using JavaScript, jQuery, HTML, and CSS. Developed with team - role focused on JavaScript/jQuery functionality and AJAX API calls.',
    repolink: 'https://github.com/creechj/Work_It_Off'
  },
  {
    imagelink: 'https://the-tech-blog-bcmvc-6b82048fd8e5.herokuapp.com/',
    imagesrc: TechBlog_Screenshot,
    title: 'Blog Site',
    description: 'Allows users to signup (or log back in) and post or comment on existing posts. MySQL/Sequelize back-end with Handlebars dynamically-generated HTML.',
    repolink: 'https://github.com/creechj/Tech_Blog'
  },
  {
    imagelink: 'https://drive.google.com/file/d/1qtF4RzTgpTOVPDOMXbyrIMj5umi7F24D/view',
    imagesrc: ECommerce_Screenshot,
    title: 'E-Commerce Back-end',
    description: 'Database and API structure for an e-commerce site. MySQL database using Sequelize for schema design and CRUD operations. Interfacing with the application is intended for Insomnia. Image links to video demonstration of application usage.',
    repolink: 'https://github.com/creechj/E-Commerce_Backend'
  },
  {
    imagelink: 'https://drive.google.com/file/d/1KsDM1fvilKXw_ER8mKIaHI4zv_BHjZev/view',
    imagesrc: EmployeeTracker_Screenshot,
    title: 'Employee Tracker',
    description: 'Node command line application for managing an employee database. Inquirer interface using JavaScript to interact with MySQL database. Image links to video demonstration of application usage.',
    repolink: 'https://github.com/creechj/Employee_Tracker'
  },
  {
    imagelink: 'https://creechj.github.io/Weather_App/',
    imagesrc: WeatherApp_Screenshot,
    title: 'Weather App',
    description: "Weather application using Open Weather's API to allow for search and display of locations' 5-day forecasts. Built using JavaScript, HTML, and CSS.",
    repolink: 'https://github.com/creechj/Weather_App'
  }
];

export default projects;