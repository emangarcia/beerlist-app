import data from "~~/data/beers.json";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const beerData = data.find((beer) => beer.id === Number(id));

  return beerData

});
