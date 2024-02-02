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
};

export const useBeersStore = defineStore("beers", {
  state: () => ({
    //create state for beers
    beers: <Beer[]>[],
    beer: <Beer[]>[],
  }),
  actions: {
    async fetchData() {
      //fetch beer data from api
      const { data, pending }: any = await useFetch("/api/beers");
      if (data.value) {
        this.beers = data.value;
      }
    },
    async fetchBeer(id: string) {
      //fetch beer data from api
      const { data, pending }: any = await useFetch(`/api/beers/${id}`);
      if (data.value) {
        this.beer = data.value;
      }
    }
  },
  getters: {
    beerCount: (state) => state.beers.length,
    getBeers: (state) => state.beers,
    getBeer(state) {
      return (id) => state.beers.find((beer) => beer.id === id);
    }
  },
  persist: true,
});
