import React, { useState } from "react";
import Nav from "./Nav";
import Portfolio from "./pages/Portfolio";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

// state handling - sets Portfolio as default page to render
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  // renders respective page based on state (from navigation selection)
  const renderPage = () => {
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  // page handling function (used with NavTabs)
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div class="d-flex row min-vh-100">
      {/* displays NavTabs & passes attributes for currentPage state selection & handling of page change function */}
      <header>
        {/* <h1 class="fs-2 fw-bold m-6 text-nowrap col col-lg-6 col-md-12 col-sm-12">Jordan Creech: Full-Stack Portfolio</h1> */}
        <Nav
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </header>
      {/* displays result of renderPage function (navigation selection) */}
      {renderPage()}
      <Footer />
    </div>
  );
}
