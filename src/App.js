import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { beersApi } from './api/beersApi';
import classes from './App.module.scss';
import BeerPage from './components/BeerPage/BeerPage';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  // initial states
  const perPage = 80;
  const [page, increasePage] = useState(1);
  const [beers, setBeers] = useState([]);
  const [allBeers, setAllBeers] = useState([]);
  const [statusModal, setStatusModal] = useState('close');
  const [isDataFetched, setIsDataFetched] = useState(false);

  // function for scroll to top of the page
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  // function for fetching data more per page
  const fetchMoreData = () => {
    async function fetchData() {
      const fetchedBeers = await beersApi.getBeers(
        page === 6 ? 1 : page + 1,
        perPage
      );
      const concated = beers.concat(fetchedBeers);
      setBeers(concated);
      increasePage(page + 1);
    }
    fetchData();
  };

  // search beer name
  const handleChange = (event) => {
    const keyword = event.target.value;

    // if search filed has keyword
    if (keyword !== '') {
      async function fetchData() {
        const fetchedBeers = await beersApi.getSearchBeers(
          keyword.toLowerCase()
        );
        // set search data to state
        setBeers(fetchedBeers);
        setIsDataFetched(true);
      }
      fetchData();

      // if search filed has no keyword
    } else {
      async function fetchData() {
        const fetchedBeers = await beersApi.getBeers(page, perPage);
        // get all data from api
        setBeers(fetchedBeers);
        setIsDataFetched(true);
      }
      fetchData();
    }
  };

  // get all Alcohol beers from api
  const allABVBeers = () => {
    const abvAllBeers = allBeers.filter(
      (beer) => beer.abv >= 0 && beer.abv <= 55
    );
    setBeers(abvAllBeers);
    scrollToTop();
  };

  // get all Medium Alcohol beers from api
  const sortByMidABV = () => {
    const abvMediumBeers = allBeers.filter(
      (beer) => beer.abv >= 4.5 && beer.abv <= 7.5
    );
    setBeers(abvMediumBeers);
    scrollToTop();
  };

  // get all Low Alcohol beers from api
  const sortByLowABV = () => {
    const abvWeakBeers = allBeers.filter((beer) => beer.abv < 4.5);
    setBeers(abvWeakBeers);
    scrollToTop();
  };

  // get all High Alcohol beers from api
  const sortByHighABV = () => {
    const abvStrongBeers = allBeers.filter((beer) => beer.abv > 7.5);
    setBeers(abvStrongBeers);
    scrollToTop();
  };

  // get all Alcohol beers shorting by Low to High
  const sortByABV = () => {
    const sortedABVLowBeers = allBeers
      .filter((beer) => beer.abv >= 0 && beer.abv <= 55)
      .sort((a, b) => a.abv - b.abv);
    setBeers(sortedABVLowBeers);
    scrollToTop();
  };

  // get all Alcohol beers shorting by High to Low
  const sortByABVReverse = () => {
    const sortedABVHighBeers = allBeers
      .filter((beer) => beer.abv >= 0 && beer.abv <= 55)
      .sort((a, b) => b.abv - a.abv);
    setBeers(sortedABVHighBeers);
    scrollToTop();
  };

  // get all Alcohol beers from api
  const allIBUBeers = () => {
    const ibuAllBeers = allBeers.filter(
      (beer) => beer.ibu >= 0 && beer.ibu <= 100
    );
    setBeers(ibuAllBeers);
    scrollToTop();
  };

  // get all Medium Alcohol beers from api
  const sortByMidIBU = () => {
    const ibuMediumBeers = allBeers.filter(
      (beer) => beer.ibu >= 35 && beer.ibu <= 75
    );
    setBeers(ibuMediumBeers);
    scrollToTop();
  };

  // get all Low Alcohol beers from api
  const sortByLowIBU = () => {
    const ibuWeakBeers = allBeers.filter((beer) => beer.ibu < 35);
    setBeers(ibuWeakBeers);
    scrollToTop();
  };

  // get all High Alcohol beers from api
  const sortByHighIBU = () => {
    const ibuStrongBeers = allBeers.filter((beer) => beer.ibu > 75);
    setBeers(ibuStrongBeers);
    scrollToTop();
  };

  // get all Alcohol beers shorting by Low to High
  const sortByIBU = () => {
    const sortedIBULowBeers = allBeers
      .filter((beer) => beer.ibu >= 0 && beer.ibu <= 100)
      .sort((a, b) => a.ibu - b.ibu);
    setBeers(sortedIBULowBeers);
    scrollToTop();
  };

  // get all Alcohol beers shorting by High to Low
  const sortByIBUReverse = () => {
    const sortedIBUHighBeers = allBeers
      .filter((beer) => beer.ibu >= 0 && beer.ibu <= 100)
      .sort((a, b) => b.ibu - a.ibu);
    setBeers(sortedIBUHighBeers);
    scrollToTop();
  };

  // get all beers from api with hooks
  useEffect(() => {
    // function for fetching data per page
    async function fetchData() {
      const fetchedBeers = await beersApi.getBeers(page, perPage);
      setBeers(fetchedBeers);
      setIsDataFetched(true);
    }

    // unction for all fetching data
    async function fetchAllData() {
      const fetchedBeers = await beersApi.getAllBeers();
      setAllBeers(fetchedBeers);
    }

    fetchData();
    fetchAllData();

    // component did unmount
    return () => {
      setIsDataFetched(false);
    };
  }, [page]);

  return (
    <BrowserRouter>
      <div className={classes.mainSite}>
        <Sidebar
          allABVBeers={allABVBeers}
          sortByABV={sortByABV}
          sortByABVReverse={sortByABVReverse}
          sortByMidABV={sortByMidABV}
          sortByLowABV={sortByLowABV}
          sortByHighABV={sortByHighABV}
          allIBUBeers={allIBUBeers}
          sortByIBU={sortByIBU}
          sortByIBUReverse={sortByIBUReverse}
          sortByMidIBU={sortByMidIBU}
          sortByLowIBU={sortByLowIBU}
          sortByHighIBU={sortByHighIBU}
          page={page}
        />

        {/* Body Content */}
        <div className={classes.mainPage}>
          <Header handleChange={handleChange} />
          <BeerPage
            beers={beers}
            allBeers={allBeers}
            statusModal={statusModal}
            setStatusModal={setStatusModal}
            isDataFetched={isDataFetched}
            fetchMoreData={fetchMoreData}
            page={page}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
