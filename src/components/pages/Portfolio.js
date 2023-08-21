import React from "react";
import Project from "./Project";
import projects from "./projects";
// portfolio page displaying projects with links & info
export default function Portfolio() {
  return (
    <section id="projects" class="col-lg-6">
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </section>
  );
}
