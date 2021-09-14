const setAreaToFetchedBeer = (
  ibuArea,
  abvArea,
  ebcArea,
  beer,
  fetchSimilarBeer,
  setRecBeersArrayOfId,
  setisRecBeersFetched
) => {
  // Set Area to fetched beer
  if (beer.ibu !== null || beer.abv !== null || beer.ebc !== null) {
    fetchSimilarBeer(
      beer.ibu,
      beer.abv,
      beer.ebc,
      ibuArea,
      abvArea,
      ebcArea
    ).then((beersArray) => {
      // Get Similar beer id from fetched beers
      const similarBeersId = beersArray
        .filter((b) => Number(b.id) !== Number(beer.id))
        .map((b) => {
          return b.id;
        });
      setRecBeersArrayOfId(similarBeersId);
      setisRecBeersFetched(true);
    });
  }
};

export const findSimilarBeers = (
  beer,
  fetchSimilarBeer,
  setRecBeersArrayOfId,
  setisRecBeersFetched
) => {
  // very low Alcohol beers
  if (
    0 < beer.ibu &&
    beer.ibu < 10 &&
    0 < beer.abv &&
    beer.abv < 5 &&
    0 < beer.ebc &&
    beer.ebc < 10
  ) {
    // Get area fetched beer
    setAreaToFetchedBeer(
      3,
      1,
      3,
      beer,
      fetchSimilarBeer,
      setRecBeersArrayOfId,
      setisRecBeersFetched
    );
  } else if (
    // low Alcohol beers
    10 < beer.ibu &&
    beer.ibu < 50 &&
    0 < beer.abv &&
    beer.abv < 10 &&
    10 <= beer.ebc &&
    beer.ebc < 50
  ) {
    setAreaToFetchedBeer(
      5,
      2,
      5,
      beer,
      fetchSimilarBeer,
      setRecBeersArrayOfId,
      setisRecBeersFetched
    );
  } else if (
    // medium Alcohol beers
    30 < beer.ibu &&
    beer.ibu < 100 &&
    0 < beer.abv &&
    beer.abv < 10 &&
    30 <= beer.ebc &&
    beer.ebc < 100
  ) {
    setAreaToFetchedBeer(
      20,
      3,
      20,
      beer,
      fetchSimilarBeer,
      setRecBeersArrayOfId,
      setisRecBeersFetched
    );
  } else if (
    // very medium high beers
    20 < beer.ibu &&
    beer.ibu < 300 &&
    5 < beer.abv &&
    beer.abv < 20 &&
    50 <= beer.ebc &&
    beer.ebc < 300
  ) {
    setAreaToFetchedBeer(
      20,
      4,
      40,
      beer,
      fetchSimilarBeer,
      setRecBeersArrayOfId,
      setisRecBeersFetched
    );
  } else if (
    // very high Alcohol beers
    50 < beer.ibu &&
    beer.ibu < 300 &&
    5 < beer.abv &&
    beer.abv < 20 &&
    10 <= beer.ebc &&
    beer.ebc < 300
  ) {
    setAreaToFetchedBeer(
      20,
      4,
      10,
      beer,
      fetchSimilarBeer,
      setRecBeersArrayOfId,
      setisRecBeersFetched
    );
  } else {
    // common Alcohol beers
    setAreaToFetchedBeer(
      5,
      2,
      5,
      beer,
      fetchSimilarBeer,
      setRecBeersArrayOfId,
      setisRecBeersFetched
    );
  }
};
