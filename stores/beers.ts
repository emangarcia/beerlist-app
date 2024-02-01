type Beer = {
  id: string;
  name: string;
  brewer: string;
  location: string;
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
    },
  },
  getters: {
    beerCount: (state) => state.beers.length,
    getBeers: (state) => state.beers,
  },
});
