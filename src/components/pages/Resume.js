import React from 'react';
// resume with option to download
export default function Resume() {
  return (
    <section>
      <h1>Resume</h1>
      <figure>
      <a
          href=""
          target="_blank"
        >
          <img
            class="projectimage img-fluid rounded mx-auto d-block"
            src="assets/JCreech_Resume.pdf"
            alt="Jordan's Resume"
          />
        </a>
      </figure>
    </section>
  );
}
