import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './Spinner.scss';

const Spinner = () => {
  return (
    <div className="spinner">
      <Loader
        type="Oval"
        color="#ff7518"
        height={40}
        width={40}
        // timeout={3000} //3 secs
      />
    </div>
  );
};

export default Spinner;
