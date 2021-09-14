import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import { beersApi } from '../../api/beersApi';
import { findSimilarBeers } from '../../utils/comparing';
import Beer from '../Beer/Beer';
import Spinner from '../Spinner/Spinner';
import classes from './BeerDetails.module.scss';

const BeerDetails = ({ allBeers, statusModal, setStatusModal }) => {
  let { beerId } = useParams();
  const history = useHistory();
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [beer, setBeer] = useState(undefined);
  const [isRecBeersFetched, setisRecBeersFetched] = useState(false);
  const [recBeersArrayOfId, setRecBeersArrayOfId] = useState([]);

  useEffect(() => {
    document.body.classList.add('modal-open');
    async function fetchData() {
      const fetchedBeer = await beersApi.getBeer(beerId);
      setBeer(fetchedBeer[0]);
      setIsDataFetched(true);
      const fetchSimilarBeer = async (
        ibu,
        abv,
        ebc,
        ibuArea,
        abvArea,
        ebcArea
      ) => {
        const fetchedSimilarBeer = await beersApi.getSimilarBeers(
          (ibu - ibuArea).toFixed(1),
          (ibu + ibuArea).toFixed(1),
          (abv - abvArea).toFixed(1),
          (abv + abvArea).toFixed(1),
          (ebc - ebcArea).toFixed(1),
          (ebc + ebcArea).toFixed(1)
        );
        return fetchedSimilarBeer;
      };
      findSimilarBeers(
        fetchedBeer[0],
        fetchSimilarBeer,
        setRecBeersArrayOfId,
        setisRecBeersFetched
      );
    }
    fetchData();
    return () => {
      document.body.classList.remove('modal-open');
      setBeer(null);
      setIsDataFetched(false);
      setisRecBeersFetched(false);
    };
  }, [beerId]);

  function closeModal() {
    history.push('/');
    setStatusModal('close');
  }

  return (
    <div className={`${statusModal === 'open' ? 'visible' : 'hide'}`}>
      <div className={classes.overlay} onClick={closeModal}></div>
      <div className={classes.modal}>
        <div className={classes.beerDetails}>
          {isDataFetched ? (
            <div className={classes.details}>
              <div className={classes.beerImgWrapper}>
                <img src={beer.image_url || 'https://i.imgur.com/ZNLvABM.png'} alt="beer" />
              </div>
              <div className={classes.beerDetailsWrapper}>
                <div className={classes.beerName}>
                  <h2>{beer.name}</h2>
                </div>
                <div className={classes.beerTagline}>
                  <h3>{beer.tagline}</h3>
                </div>
                <div className={classes.separatorLine}>
                  <span></span>
                </div>
                <div className={classes.beerStandards}>
                  <h3>
                    <span>Ibu:</span>
                    {beer.ibu}
                  </h3>
                  <h3>
                    <span>Abv:</span>
                    {beer.abv}%
                  </h3>
                  <h3>
                    <span>Ebc:</span>
                    {beer.ebc}
                  </h3>
                </div>
                <div className={classes.beerDescription}>
                  <p>{beer.description}</p>
                </div>
                <div className={classes.foodPairing}>
                  <h3>Best served with:</h3>
                  <ul>
                    {beer.food_pairing.map((e, index) => (
                      <li key={index}>- {e}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className={classes.spinnerBeerWrapper}>
              <Spinner />
            </div>
          )}
          <div className={classes.recommendation}>
            <div>
              <h3>You might also like:</h3>
            </div>
            {isRecBeersFetched ? (
              <div className={classes.recommendedBeers}>
                <div className={classes.beersWrapper}>
                  {allBeers
                    .filter((beer) => {
                      return (
                        beer.id === recBeersArrayOfId[0] ||
                        beer.id === recBeersArrayOfId[1] ||
                        beer.id === recBeersArrayOfId[2]
                      );
                    })
                    .map((beer) => (
                      <Link key={beer.id} to={`/details/${beer.id}`}>
                        <Beer
                          imageUrl={beer.image_url}
                          beerName={beer.name}
                          beerAbv={beer.abv}
                          beerIbu={beer.ibu}
                          isInModal={true}
                        />
                      </Link>
                    ))}
                </div>
              </div>
            ) : (
              <div className={classes.spinner}>
                <Spinner />
              </div>
            )}
          </div>
          <div className={classes.buttonCloseModal}>
            <button onClick={closeModal}>
              <FontAwesomeIcon icon={faTimesCircle} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerDetails;
