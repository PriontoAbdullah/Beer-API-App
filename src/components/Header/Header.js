import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  return (
    <header
      className={`${
        window.matchMedia('(max-width: 510px)').matches ? 'mobileTop' : null
      }`}
    >
      {/* Burger Menu */}
      <div className="burger active" id="burger">
        <div className="burger-menu"></div>
      </div>

      <section className="navbar">
        <Link to="/">
          <span className="navbarTitle">Let's drink beer!</span>
        </Link>

        {/* Search bar  */}
        <div className="searchbar">
          <input
            type="text"
            className="active"
            placeholder="Search Beers..."
            name="search"
          />
          <div className="icon">
            <span>
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
