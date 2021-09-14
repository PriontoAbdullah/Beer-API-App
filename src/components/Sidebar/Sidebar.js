import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faBars,
  faBeer,
  faTimes,
  faWineBottle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import logo from '../../images/logo.png';
import './Filter.scss';
import './Sidebar.scss';

const Sidebar = ({
  allABVBeers,
  sortByABV,
  sortByABVReverse,
  sortByMidABV,
  sortByLowABV,
  sortByHighABV,
  allIBUBeers,
  sortByIBU,
  sortByIBUReverse,
  sortByMidIBU,
  sortByLowIBU,
  sortByHighIBU,
  page,
}) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const getIcon = () => {
    return mobileMenu ? (
      <FontAwesomeIcon icon={faTimes} />
    ) : (
      <FontAwesomeIcon icon={faBars} />
    );
  };

  return (
    <nav
      className={`sideNav ${mobileMenu ? 'isMobileOpen' : 'isMobileClosed'}`}
    >
      <div className="menu">
        <div className="menu-logo">
          <img src={logo} alt="Logo" /> <span>Beer API APP</span>
          <span className="mobileMenu" onClick={() => toggleMenu()}>
            {getIcon()}
          </span>
        </div>
        <ul className="menu-list">
          {/* Alcohol Menu  */}
          <li className="menu-item" onClick={allABVBeers}>
            <span className="menu-title">
              <span>
                <FontAwesomeIcon icon={faWineBottle} />
              </span>
              Alcohol Vol (ABV):
            </span>
          </li>
          <li className="menu-item" onClick={sortByLowABV}>
            <span className="menu-link">Weak Alcohol</span>
          </li>
          <li className="menu-item" onClick={sortByMidABV}>
            <span className="menu-link">Medium Alcohol</span>
          </li>
          <li className="menu-item">
            <span className="menu-link" onClick={sortByHighABV}>
              Strong Alcohol
            </span>
          </li>
          <li className="menu-item" onClick={sortByABV}>
            <span className="menu-link">Low to High Alcohol</span>
          </li>
          <li className="menu-item" onClick={sortByABVReverse}>
            <span className="menu-link">High to Low Alcohol</span>
          </li>

          {/* Alcohol Filter  */}
          <div className="range-slider">
            <span className="range-text">(ABV): </span>
            <span className="range-values"></span>
            <input
              defaultValue="5.5"
              min="4.5"
              max="12.5"
              step="0.1"
              type="range"
            />
            <input
              defaultValue="7.5"
              min="4.5"
              max="12.5"
              step="0.1"
              type="range"
            />
          </div>

          {/* Bitterness Menu */}
          <li className="menu-item" onClick={allIBUBeers}>
            <span className="menu-title">
              <span>
                <FontAwesomeIcon icon={faBeer} />
              </span>
              Bitterness Vol (IBU):
            </span>
          </li>
          <li className="menu-item" onClick={sortByLowIBU}>
            <span className="menu-link">Weak Bitterness</span>
          </li>
          <li className="menu-item" onClick={sortByMidIBU}>
            <span className="menu-link">Medium Bitterness</span>
          </li>
          <li className="menu-item" onClick={sortByHighIBU}>
            <span className="menu-link">Strong Bitterness</span>
          </li>
          <li className="menu-item" onClick={sortByIBU}>
            <span className="menu-link">Low to High Bitterness</span>
          </li>
          <li className="menu-item" onClick={sortByIBUReverse}>
            <span className="menu-link">High to Low Bitterness</span>
          </li>

          {/* Bitterness Filter */}
          <div className="range-slider">
            <span className="range-text">(IBU): </span>
            <span className="range-values"></span>
            <input value="55" min="25" max="100" step="5" type="range" />
            <input value="75" min="25" max="100" step="5" type="range" />
          </div>

          {/* Pagination */}
          <div className="pagination">
            <li className="menu-item">
              <span id="prevPage" className="menu-title" disabled>
                <FontAwesomeIcon icon={faArrowCircleLeft} />
              </span>
              <span className="menu-page">Page: {page}</span>
              <span id="nextPage" className="menu-title">
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </span>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
