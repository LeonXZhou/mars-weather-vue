<template>
  <TopNav @numberSelection="numberSelectionListener" />
  <div v-if="displayState !== 'search'">
    <div>{{ displayState }}</div>
  </div>
  
</template>

<script>
import axios from "axios";
import TopNav from "./components/TopNav.vue";
export default {
  name: "App",
  components: { TopNav },

  data() {
    return {
      cardInfo: {
        name: "leon",
        desc: "adsfasdf",
      },
      displayState: "default",
    };
  },

  created() {
    axios
      .get("https://rws-cards-api.herokuapp.com/api/v1/cards/random", {
        params: { n: 10 },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("asdf");
        this.cardInfo.name = "no internet :(";
        this.cardInfo.desc = "no internet :(";
        console.log(error);
      });
  },

  methods: {
    numberSelectionListener(value) {
      this.displayState = value;
    },
  },
};
</script>

<style>
</style>
