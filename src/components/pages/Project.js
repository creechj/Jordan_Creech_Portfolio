import React from "react";
// portfolio page displaying projects with links & info
export default function Project({ project }) {
  return (
      <figure class="project">
        <a
          href={project.imagelink}
          target="_blank"
        >
          <img
            class="projectimage img-fluid rounded mx-auto d-block"
            src={project.imagesrc}
            alt="Image of project"
          />
        </a>
        <figcaption>
          <details>
            <summary>{project.title}</summary>
            <p>
              {project.description}
              {project.repolink}
            </p>
          </details>
        </figcaption>
      </figure>
  );
}
