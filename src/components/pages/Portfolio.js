import React from "react";
// portfolio page displaying projects with links & info
export default function Portfolio() {
  return (
    <section id="projects" class="col-lg-6">
      <h2>Projects</h2>
      <figure class="project">
        <a
          href="https://project1team5-def011f76af0.herokuapp.com/"
          target="_blank"
        >
          <img
            class="projectimage img-fluid rounded mx-auto d-block"
            src="assets/images/FueGoals_Screenshot.png"
            alt="Image of project"
          />
        </a>
        <figcaption>
          <details>
            <summary>FueGoals</summary>
            <p>
              Exercise-logging application for saving pending and completed
              activities.
              <br />
              MySQL/Sequelize back-end with Handlebars dynamically-generated
              HTML. Uses Multer and AWS for uploading and storing user profile
              images
              <br />
              Partner project - responsible for database design and
              functionality, API structure, and user experience.
            </p>
          </details>
        </figcaption>
      </figure>
      <figure class="project">
        <a
          href="https://bootcampgroup1.github.io/Work_It_Off/index.html"
          target="_blank"
        >
          <img
            class="projectimage img-fluid rounded mx-auto d-block"
            src="assets/images/WorkItOff_Screenshot.png"
            alt="Image of project"
          />
        </a>
        <figcaption>
          <details>
            <summary>Work It Off</summary>
            <p>
              Allows users to compare a consumed calorie total for a selected
              quantity of food or beverage against an expended calory total for
              a selected duration of activities.
              <br />
              Built using JavaScript, jQuery, HTML, and CSS.
              <br />
              Developed with team - role focused on JavaScript/jQuery
              functionality and AJAX API calls.
            </p>
          </details>
        </figcaption>
      </figure>
      <figure class="project">
        <a
          href="https://the-tech-blog-bcmvc-6b82048fd8e5.herokuapp.com/"
          target="_blank"
        >
          <img
            class="projectimage img-fluid rounded mx-auto d-block"
            src="assets/images/TechBlog_Screenshot.png"
            alt="Image of project"
          />
        </a>
        <figcaption>
          <details>
            <summary>Blog Site</summary>
            <p>
              Allows users to signup (or log back in) and post or comment on
              existing posts.
              <br />
              MySQL/Sequelize back-end with Handlebars dynamically-generated
              HTML.
            </p>
          </details>
        </figcaption>
      </figure>
      <figure class="project">
        <a
          href="https://drive.google.com/file/d/1qtF4RzTgpTOVPDOMXbyrIMj5umi7F24D/view"
          target="_blank"
        >
          <img
            class="projectimage img-fluid rounded mx-auto d-block"
            src="assets/images/E-Commerce_Screenshot.png"
            alt="Image of project"
          />
        </a>
        <figcaption>
          <details>
            <summary>E-Commerce Back-end</summary>
            <p>
              Database and API structure for an e-commerce site.
              <br />
              MySQL database using Sequelize for schema design and CRUD
              operations.
              <br />
              Interfacing with the application is intended for Insomnia. Image
              links to video demonstration of application usage.
            </p>
          </details>
        </figcaption>
      </figure>
      <figure class="project">
        <a
          href="https://drive.google.com/file/d/1KsDM1fvilKXw_ER8mKIaHI4zv_BHjZev/view"
          target="_blank"
        >
          <img
            class="projectimage img-fluid rounded mx-auto d-block"
            src="assets/images/EmployeeTracker_Screenshot.png"
            alt="Image of project"
          />
        </a>
        <figcaption>
          <details>
            <summary>Employee Tracker</summary>
            <p>
              Node command line application for managing an employee database.
              <br />
              Inquirer interface using JavaScript to interact with MySQL
              database.
              <br />
              Image links to video demonstration of application usage.
            </p>
          </details>
        </figcaption>
      </figure>
      <figure class="project">
        <a href="https://creechj.github.io/Weather_App/" target="_blank">
          <img
            class="projectimage img-fluid rounded mx-auto d-block"
            src="assets/images/WeatherApp_Screenshot.png"
            alt="Image of project"
          />
        </a>
        <figcaption>
          <details>
            <summary>Weather App</summary>
            <p>
              Weather application using Open Weather's API to allow for search
              and display of locations' 5-day forecasts.
              <br />
              Built using JavaScript, HTML, and CSS.
            </p>
          </details>
        </figcaption>
      </figure>
    </section>
  );
}
