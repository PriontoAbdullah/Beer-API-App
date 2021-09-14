import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link, Route } from 'react-router-dom';
import Beer from '../Beer/Beer';
import BeerDetails from '../BeerDetails/BeerDetails';
import NotFound from '../NotFound/NotFound';
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
          {/* Infinity Scroll */}
          <InfiniteScroll
            dataLength={beers.length}
            next={fetchMoreData}
            hasMore={page >= 4 ? false : true}
            loader={<Spinner />}
            className={classes.beersInfinityWrapper}
          >
            {/* Get all Beer data */}
            {beers.map((beer) => (
              <Link
                key={Math.random() * beer.id}
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
            {/* If no beers data found */}
            {beers.length === 0 && <NotFound />}
          </InfiniteScroll>

          {/* Get the beer details */}
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
        // Loading spinner
        <div className={classes.spinner}>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default BeerPage;
