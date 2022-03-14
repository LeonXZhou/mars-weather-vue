<template>
  <TopNav @numberSelection="numberSelectionListener" />
  <div class="mainBody">
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
    <div v-if="displayState === 'search'">
      <Search></Search>
    </div>
  </div>
</template>

<script>
import TopNav from "./components/TopNav.vue";
import CardSet from "./components/CardSet.vue";
import Search from "./components/Search.vue";
import axios from "axios";

export default {
  name: "App",
  components: { TopNav, CardSet, Search },

  data() {
    return {
      displayState: "default",
      cards: [],
    };
  },

  created: function () {
      axios
        .get("https://rws-cards-api.herokuapp.com/api/v1/cards/random", {
          params: { n: 10 },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
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
            params: { n: value },
          })
          .then((response) => {
            this.cards = [...response.data.cards];
          })
          .catch((error) => {
            console.log("asdf");
            console.log(error);
          });
      }
      if (this.displayState === "search") {
        this.cards = [];
      }
    },
  },
};
</script>

<style scoped>
.cardSetContainer {
  width: 100vw;
}
.mainBody {
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 95vh;
  left: 0;
  top: 5vh;

  /* background-image: url("../public/Tarot/background.jpg"); */
  position: absolute;
}
</style>
