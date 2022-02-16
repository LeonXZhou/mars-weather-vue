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
  justify-content: space-around;
}

.card {
  width: 18vw;
  border-radius: 10px;
  border-style: solid;
}

.card p {
  height: 16vw;
  overflow-y: scroll;
  overflow-x: hidden;
}

.card h1 {
  height: 6vw;

  font-size: 2.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  border-style: solid;
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