import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

// state handling - sets Portfolio as default page to render
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Portfolio');

  // renders respective page based on state (from navigation selection)
  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  // page handling function (used with NavTabs)
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* displays NavTabs & passes attributes for currentPage state selection & handling of page change function */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* displays result of renderPage function (navigation selection) */}
      {renderPage()}
    </div>
  );
}
