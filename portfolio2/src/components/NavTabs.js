import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  console.log(currentPage)
  return (
    <div class="tabs">
      <ul>
        <li>
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'tabs is-active' : 'tabs'}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'tabs is-active' : 'tabs'}
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'tabs is-active' : 'tabs'}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Home' ? 'tabs is-active' : 'tabs'}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;