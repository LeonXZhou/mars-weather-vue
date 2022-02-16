<template>
  <TopNav @numberSelection="numberSelectionListener" />
  <div
    v-if="
      Number(displayState) === 1 ||
      Number(displayState) === 3 ||
      Number(displayState) === 5
    "
    class="cardSetContainer"
  >
    <CardSet :cards="cards" />
  </div>
</template>

<script>
import TopNav from "./components/TopNav.vue";
import CardSet from "./components/CardSet.vue";
import axios from "axios";
export default {
  name: "App",
  components: { TopNav, CardSet },

  data() {
    return {
      displayState: "default",
      cards:[],
    };
  },

  methods: {
    numberSelectionListener(value) {
      this.displayState = value;
      if (
        Number(this.displayState) === 1 ||
        Number(this.displayState) === 3 ||
        Number(this.displayState) === 5
      ) {
        axios
          .get("https://rws-cards-api.herokuapp.com/api/v1/cards/random", {
            params: { n: value},
          })
          .then((response) => {
            this.cards = [...response.data.cards];
          })
          .catch((error) => {
            console.log("asdf");
            console.log(error);
          });
      }
    },
  },
};
</script>

<style scoped>
.cardSetContainer{
  width:100vw;
  position: absolute;
  top: 20vh;
}
</style>
