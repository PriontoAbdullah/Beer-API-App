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
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import logo from '../../images/logo.png';
import classes from './Sidebar.module.scss';

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
  valueABV,
  setValueABV,
  valueIBU,
  setValueIBU,
  prevPage,
  nextPage,
  page,
}) => {
  // responsive sidebar
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
      className={`${classes.sideNav} ${
        mobileMenu ? classes.isMobileOpen : classes.isMobileClosed
      }`}
    >
      <div className={classes.menu}>
        <div className={classes.menuLogo}>
          <img src={logo} alt="Logo" />
          <span>
            <a href="/">Beer API APP</a>
          </span>
          <span className={classes.mobileMenu} onClick={() => toggleMenu()}>
            {getIcon()}
          </span>
        </div>
        <ul className={classes.menuList}>
          {/* Alcohol Menu  */}
          <li className={classes.menuItem} onClick={allABVBeers}>
            <span className={classes.menuTitle}>
              <span>
                <FontAwesomeIcon icon={faWineBottle} />
              </span>
              Alcohol Vol (ABV):
            </span>
          </li>
          <li className={classes.menuItem} onClick={sortByLowABV}>
            <span className={classes.menuLink}>Weak Alcohol</span>
          </li>
          <li className={classes.menuItem} onClick={sortByMidABV}>
            <span className={classes.menuLink}>Medium Alcohol</span>
          </li>
          <li className={classes.menuItem}>
            <span className={classes.menuLink} onClick={sortByHighABV}>
              Strong Alcohol
            </span>
          </li>
          <li className={classes.menuItem} onClick={sortByABV}>
            <span className={classes.menuLink}>Low to High Alcohol</span>
          </li>
          <li className={classes.menuItem} onClick={sortByABVReverse}>
            <span className={classes.menuLink}>High to Low Alcohol</span>
          </li>

          {/* Alcohol Filter  */}
          <div className={classes.rangeSlider}>
            <InputRange
              step={0.5}
              maxValue={55}
              minValue={0}
              formatLabel={(valueABV) => `${valueABV} %`}
              value={valueABV}
              onChange={(valueABV) => setValueABV(valueABV)}
              onChangeComplete={(valueABV) => console.log(valueABV)}
            />
            <span className={classes.rangeText}>Filter by (ABV)</span>
          </div>

          {/* Bitterness Menu */}
          <li className={classes.menuItem} onClick={allIBUBeers}>
            <span className={classes.menuTitle}>
              <span>
                <FontAwesomeIcon icon={faBeer} />
              </span>
              Bitterness Vol (IBU):
            </span>
          </li>
          <li className={classes.menuItem} onClick={sortByLowIBU}>
            <span className={classes.menuLink}>Weak Bitterness</span>
          </li>
          <li className={classes.menuItem} onClick={sortByMidIBU}>
            <span className={classes.menuLink}>Medium Bitterness</span>
          </li>
          <li className={classes.menuItem} onClick={sortByHighIBU}>
            <span className={classes.menuLink}>Strong Bitterness</span>
          </li>
          <li className={classes.menuItem} onClick={sortByIBU}>
            <span className={classes.menuLink}>Low to High Bitterness</span>
          </li>
          <li className={classes.menuItem} onClick={sortByIBUReverse}>
            <span className={classes.menuLink}>High to Low Bitterness</span>
          </li>

          {/* Bitterness Filter */}
          <div className={classes.rangeSlider}>
            <InputRange
              step={1}
              maxValue={100}
              minValue={0}
              formatLabel={(valueIBU) => `${valueIBU} %`}
              value={valueIBU}
              onChange={(valueIBU) => setValueIBU(valueIBU)}
              onChangeComplete={(valueIBU) => console.log(valueIBU)}
            />
            <span className={classes.rangeText}>Filter by (IBU)</span>
          </div>

          {/* Pagination */}
          <div className={classes.pagination}>
            <li className={classes.menuItem}>
              <span onClick={prevPage} className={classes.menuTitle} disabled>
                <FontAwesomeIcon icon={faArrowCircleLeft} />
              </span>
              <span className={classes.menuPage}>Page: {page}</span>
              <span onClick={nextPage} className={classes.menuTitle}>
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
