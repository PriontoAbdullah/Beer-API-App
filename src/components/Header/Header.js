import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';

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
        window.matchMedia('(max-width: 510px)').matches
          ? classes.mobileTop
          : null
      }`}
    >
      {/* Burger Menu */}
      <div className={classes.burger}>
        <div className={classes.burgerMenu}></div>
      </div>

      <section className={classes.navbar}>
        <Link to="/">
          <span className={classes.navbarTitle}>Let's drink beer!</span>
        </Link>

        {/* Search bar  */}
        <div className={classes.searchbar}>
          <input
            type="text"
            className={classes.active}
            placeholder="Search Beers..."
            name="search"
          />
          <div className={classes.icon}>
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
