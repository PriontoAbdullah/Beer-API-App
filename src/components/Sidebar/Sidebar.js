import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faBeer,
  faWineBottle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../images/logo.png';
import './Filter.scss';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <nav className="sideNav">
      <div className="menu">
        <div className="menu-logo">
          <img src={logo} alt="Logo" /> <span>Beer API APP</span>
        </div>
        <ul className="menu-list">
          {/* Alcohol Menu  */}
          <li className="menu-item">
            <a href="#0" className="menu-title">
              <span>
                <FontAwesomeIcon icon={faWineBottle} />
              </span>
              Alcohol Vol (ABV):
            </a>
          </li>
          <li className="menu-item">
            <a href="#0" className="menu-link">
              Weak Alcohol
            </a>
          </li>
          <li className="menu-item">
            <a href="#0" className="menu-link">
              Medium Alcohol
            </a>
          </li>
          <li className="menu-item">
            <a href="#0" className="menu-link">
              Strong Alcohol
            </a>
          </li>
          <li className="menu-item">
            <a href="#0" className="menu-link">
              Low to High Alcohol
            </a>
          </li>
          <li className="menu-item">
            <a href="#0" className="menu-link">
              High to Low Alcohol
            </a>
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
          <li className="menu-item">
            <a href="#0" className="menu-title">
              <span>
                <FontAwesomeIcon icon={faBeer} />
              </span>
              Bitterness Vol (IBU):
            </a>
          </li>
          <li className="menu-item">
            <a href="#0" className="menu-link">
              Weak Bitterness
            </a>
          </li>
          <li className="menu-item">
            <a href="#0" className="menu-link">
              Medium Bitterness
            </a>
          </li>
          <li className="menu-item">
            <a href="#0" className="menu-link">
              Strong Bitterness
            </a>
          </li>
          <li className="menu-item">
            <a href="#0" className="menu-link">
              Low to High Bitterness
            </a>
          </li>
          <li className="menu-item">
            <a href="#0" className="menu-link">
              High to Low Bitterness
            </a>
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
              <span className="menu-page">Page: 1</span>
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
