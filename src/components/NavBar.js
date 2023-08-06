import React from 'react'

const NavBar = () => {
  return (
    <div> <ul className="navbar">
    <li className={nav-items}>
        <a 
        className="linkText" 
        href="#aboutMe" 
        onClick={() => handlePageChange('aboutMe')}>About Me
        </a>
    </li>
    <li className={nav-items}>
        <a 
        className="linkText" 
        href="#portfolio" 
        onClick={() => handlePageChange('portfolio')}>Portfolio
        </a>
    </li>
    <li className={nav-items}>
        <a 
        className="linkText" 
        href="#contactMe" 
        onClick={() => handlePageChange('conactMe')}>Contact
        </a>
    </li>
    <li className={nav-items}>
        <a 
        className="linkText" 
        href="#resume" 
        onClick={() => handlePageChange('resume')}>Resume
        </a>
    </li>
</ul></div>
  )
}

export default NavBar