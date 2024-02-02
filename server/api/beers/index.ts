import data from "~~/data/beers.json";

export default defineEventHandler(async (event) => {
  // return all beers
  return data;
});
