import React from 'react';
// about me page
export default function AboutMe() {
  return (
    <div class="row px-3">
      <h2 class="fs-4 col-12">About Me</h2>
      <figure id="profilepicfig" class="col-lg-6 col-sm-12">
          {/* <!-- image linked to GitHub profile picture --> */}
          <img
            id="profilepic"
            class="img-fluid rounded mx-auto d-block"
            src="https://avatars.githubusercontent.com/u/127697449?v=4"
            alt="Profile picture of site owner: Jordan Creech"
          />
      </figure>
      <p class="col-lg-6">
      Analytical professional with experience in project management, reporting tools development, and system implementations. Formal education includes a bachelors comprised of Accounting and Information Systems, an entrepreneurial MBA, and a certificate for Full Stack Web Development from Northwestern University’s Coding Bootcamp. Eager problem solver with a persistent focus on information integrity and continuous improvement. Proficient in translating user needs into dynamic, comprehensive solutions.
      </p>
    </div>
  );
}
