import { useBeersStore } from "@/stores/beers";
import { storeToRefs } from "pinia";

export default function () {
  const beersStore = useBeersStore();
  beersStore.fetchData();
  const { beers } = storeToRefs(beersStore);

  return {
    beers,
  };
}
