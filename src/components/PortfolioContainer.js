import React, { useState } from "react";
import NavTabs from "./NavTabs";
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
    <div class="d-flex flex-column min-vh-100">
      {/* displays NavTabs & passes attributes for currentPage state selection & handling of page change function */}
      <header>
        <h1>Jordan Creech: Full-Stack Portfolio</h1>
        <NavTabs
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
