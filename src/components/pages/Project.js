import React from "react";
// portfolio page displaying projects with links & info
export default function Project() {
  return (
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
            <summary></summary>
            <p>
              
            </p>
          </details>
        </figcaption>
      </figure>
  );
}
