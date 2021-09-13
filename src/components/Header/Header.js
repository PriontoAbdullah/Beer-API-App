import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className="burger" id="burger">
        <div className="burger-menu"></div>
      </div>

      <section className="navbar">
        <Link to="/">
          <span className="navbar-title">Let's drink beer!</span>{' '}
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
