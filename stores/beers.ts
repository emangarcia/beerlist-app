type Beer = {
  id: string;
  name: string;
  brewer: string;
  location: string;
  style: string;
  abv: string;
  ibu: string;
  description: string;
  image: string;
  reviews: Object[];
};

export const useBeersStore = defineStore("beers", {
  state: () => ({
    //create state for beers
    beers: <Beer[]>[],
  }),
  actions: {
    async fetchData() {
      //fetch beer data from api
      const { data, pending }: any = await useFetch("/api/beers");
      if (data.value) {
        this.beers = data.value;
      }
    }
  },
  getters: {
    beerCount: (state) => state.beers.length,
    getBeers: (state) => state.beers,
    getBeerById: (state) => {
      return (beerId) => state.beers.find((beer) => beer.id === beerId)
    }
  }
});
