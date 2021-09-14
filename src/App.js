import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import classes from './App.module.scss';
import BeerPage from './components/BeerPage/BeerPage';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <BrowserRouter>
      <div className={classes.mainSite}>
        <Sidebar />

        {/* Body Content */}
        <div className={classes.mainPage}>
          <Header />
          <BeerPage />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
