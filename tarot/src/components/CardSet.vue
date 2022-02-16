<template >
  <TransitionGroup name="list" tag="div" class="cardSet">
    <div v-for="card in cards" :key="card">
      <div class="card">
        <h1>{{ card.name }}</h1>
        <p>{{ card.desc }}</p>
      </div>
    </div>
  </TransitionGroup>
</template>

<script>
export default {
  name: "Card",
  props: {
    cards: Array,
  },
};
</script>

<style>
.cardSet {
  display: flex;
}

.card{
  width: 10em;
  height: 20em;
}

.card p{
  height:12em;
  width:8em;
  overflow:scroll;
}




.list-move,
.list-enter-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-leave-active {
  opacity: 0;
  position: absolute;
}
</style>