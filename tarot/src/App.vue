<template>
  <Card v-bind="cardInfo" />
</template>

<script>
import axios from "axios";
import Card from "./components/Card.vue";
export default {
  name: "App",
  components: { CardSet },

  data() {
    return {
      cardInfo: {
        name: "leon",
        desc: "adsfasdf",
      },
    };
  },

  created() {
    axios
      .get("https://rws-cards-api.herokuapp.com/api/v1/cards/random",{ params: { n: 10 } })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log('asdf');
        this.cardInfo.name = "no internet :(";
        this.cardInfo.desc = "no internet :(";
        console.log(error);
      });
  },
};
</script>

<style>
</style>
