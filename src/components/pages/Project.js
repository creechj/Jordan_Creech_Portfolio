import React from "react";
// portfolio page displaying projects with links & info
export default function Project({ project }) {
  return (
      <figure class="project w-75 align-self-center">
        <figcaption>
          <details>
            <summary>{project.title}</summary>
            <p>
              {project.description}<br />
              <a href={project.repolink} target="_blank">Click here for project repository</a>
            </p>
          </details>
        </figcaption>
        <a
          href={project.imagelink}
          target="_blank"
        >
          <img
            class="projectimage img-fluid rounded"
            src={project.imagesrc}
            alt="Image of project"
          />
        </a>
      </figure>
  );
}
