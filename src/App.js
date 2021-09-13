import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <BrowserRouter>
      <div className="mainSite">
        <Sidebar />

        {/* Body Content */}
        <div className="mainPage">
          <Header />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
