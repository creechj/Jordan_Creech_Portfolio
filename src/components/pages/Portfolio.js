import React from "react";
import Project from "./Project";
import projects from "./projects";
// portfolio page displaying projects with links & info
export default function Portfolio() {
  return (
    <section id="projects" class="d-flex justify-content-center flex-column">
      <h2 class="fs-4">Portfolio</h2>
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </section>
  );
}
