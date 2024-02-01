import data from "~~/data/beers.json";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  data.push(body);
  return data;
});
