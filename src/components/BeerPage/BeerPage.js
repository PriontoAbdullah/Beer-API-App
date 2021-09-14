import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link, Route } from 'react-router-dom';
import Beer from '../Beer/Beer';
import BeerDetails from '../BeerDetails/BeerDetails';
import Spinner from '../Spinner/Spinner';
import classes from './BeerPage.module.scss';

const BeerPage = ({
  beers,
  isDataFetched,
  fetchMoreData,
  setStatusModal,
  allBeers,
  statusModal,
  page,
}) => {
  return (
    <div>
      {isDataFetched ? (
        <>
          <InfiniteScroll
            dataLength={beers.length}
            next={fetchMoreData}
            hasMore={page >= 5 ? false : true}
            loader={<Spinner />}
            className={classes.beersInfinityWrapper}
          >
            {beers.map((beer) => (
              <Link
                key={beer.id}
                to={`/details/${beer.id}`}
                onClick={() => setStatusModal('open')}
              >
                <Beer
                  key={beer.id}
                  imageUrl={beer.image_url}
                  beerName={beer.name}
                  beerTagline={beer.tagline}
                  beerAbv={beer.abv}
                  beerIbu={beer.ibu}
                  isInModal={false}
                />
              </Link>
            ))}
          </InfiniteScroll>

          <Route
            exact
            render={() => (
              <BeerDetails
                allBeers={allBeers}
                statusModal={statusModal}
                setStatusModal={setStatusModal}
              />
            )}
            path="/details/:beerId"
          ></Route>
        </>
      ) : (
        <div className={classes.spinner}>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default BeerPage;
