import React from 'react';
// about me page
export default function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <figure id="profilepicfig" class="col">
          {/* <!-- image linked to GitHub profile picture --> */}
          <img
            id="profilepic"
            class="img-fluid rounded mx-auto d-block"
            src="https://avatars.githubusercontent.com/u/127697449?v=4"
            alt="Profile picture of site owner: Jordan Creech"
          />
      </figure>
      <p>
      Analytical professional with experience in project management, reporting tools development, and system implementations. Formal education includes a bachelors comprised of Accounting and Information Systems, an entrepreneurial MBA, and a certificate for Full Stack Web Development from Northwestern University’s Coding Bootcamp. Eager problem solver with a persistent focus on information integrity and continuous improvement. Proficient in translating user needs into dynamic, comprehensive solutions.
      </p>
    </div>
  );
}
