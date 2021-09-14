import React from 'react';
import classes from './Beer.module.scss';

const Beer = ({
  imageUrl,
  beerName,
  beerTagline,
  beerAbv,
  beerIbu,
  isInModal,
}) => {
  return (
    <>
      {/* Beer Data Modal */}
      {isInModal ? (
        <div
          className={classes.beerWrapper}
          style={{
            padding: '5px',
            height: '160px',
            backgroundColor: '#fff9eb',
          }}
        >
          <div className={classes.imgWrapper}>
            <img
              src={imageUrl || 'https://i.imgur.com/ZNLvABM.png'}
              alt={imageUrl}
            />
          </div>
          <div className={classes.detailsWrapper}>
            <div className={classes.beerName}>
              <h3 style={{ fontSize: '14px', color: '#ff7518' }}>
                {beerName.substr(0, 15)}
              </h3>
              {/* Beer ingredients */}
              <span className={classes.beerInfo} style={{ fontSize: '12px' }}>
                <span>ABV: {beerAbv}%</span>
                <span>IBU: {beerIbu}</span>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Beer Data Card */}
          <div
            className={classes.beerWrapper}
            style={{ padding: '20px', height: '280px' }}
          >
            <div className={classes.imgWrapper}>
              <img
                src={imageUrl || 'https://i.imgur.com/ZNLvABM.png'}
                alt={imageUrl}
              />
            </div>
            <div className={classes.detailsWrapper}>
              <div className={classes.beerName}>
                {/* Beer ingredients */}
                <span className={classes.beerInfo}>
                  <span>ABV: {beerAbv}%</span>
                  <span>IBU: {beerIbu}</span>
                </span>
                <h3>{beerName.substr(0, 20)}</h3>
              </div>
              <div className={classes.beerTagline}>
                <h5>
                  {beerTagline.substr(0, 25)}
                  {'...'}
                </h5>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Beer;
