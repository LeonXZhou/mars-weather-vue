<template>
  <div class="search">
    <form @submit.prevent="">
      <input type="text" v-model="search" />
    </form>
    <div class="results">
      <div v-for="card in cards" :key="card">
        <div class="card flip-card-back">
          <h1>{{ card.name }}</h1>
          <p>{{ card.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardSet from "./CardSet.vue";
export default {
  name: "Search",
  components: { CardSet },
  data() {
    return {
      search: "",
      timeoutSearch: null,
      cards: [],
    };
  },
  watch: {
    search() {
      if (this.timeoutSearch !== null) {
        clearTimeout(this.timeoutSearch);
      }
      this.timeoutSearch = setTimeout(() => {
        axios
          .get("https://rws-cards-api.herokuapp.com/api/v1/cards/search", {
            params: { name: this.search },
          })
          .then((response) => {
            this.cards = [...response.data.cards];
          })
          .catch((error) => {
            console.log("asdf");
            console.log(error);
          });
      }, 100);
    },
  },
};
</script>


<style scoped>
div.search {
  display: flex;
  flex-direction: column;
  align-items: center;
}

div.search form {
  display: flex;
  position: absolute;
  width: 100vw;
  top: 5vh;
  justify-content: center;
  align-items: center;
}
div.results {
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 90vw;
  overflow-y: auto;
  top:15vh;
}
</style>


