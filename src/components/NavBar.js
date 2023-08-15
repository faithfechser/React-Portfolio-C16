import React from 'react';

function NavBar({ setCurrentPage }) {
  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav className='nav'>
      <ul>
        <li onClick={() => handleNavClick("aboutMe")}>About Me</li>
        <li onClick={() => handleNavClick("portfolio")}>Portfolio</li>
        <li onClick={() => handleNavClick("resume")}>Resume</li>
        <li onClick={() => handleNavClick("contactMe")}>Contact</li>
      </ul>
    </nav>
  );
}

export default NavBar;
