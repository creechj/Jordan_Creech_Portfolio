import React from "react";




// navigation tabs with handler for page changes
function Nav({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid d-flex justify-content-end">
          <a class="navbar-brand" href=""
            ><h1>Jordan Creech: Full-Stack Portfolio</h1></a
          >
          <button
            class="navbar-toggler align-self-end"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item align-self-end">
          <a
            href="#aboutme"
            onClick={() => handlePageChange("AboutMe")}
            className={
              currentPage === "AboutMe"
                ? "nav-link active"
                : "nav-link text-decoration-none"
            }
          >
            About Me
          </a>
        </li>
        <li className="nav-item align-self-end">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio"
                ? "nav-link active"
                : "nav-link text-decoration-none"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item align-self-end">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact"
                ? "nav-link active"
                : "nav-link text-decoration-none"
            }
          >
            Contact
          </a>
        </li>
        <li className="nav-item align-self-end">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume"
                ? "nav-link active"
                : "nav-link text-decoration-none"
            }
          >
            Resume
          </a>
        </li>
      </ul>
      </div>
      </div>
    </nav>
  );
}

export default Nav;
