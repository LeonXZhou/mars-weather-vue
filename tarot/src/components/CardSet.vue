<template >
  <TransitionGroup name="list" tag="div" class="cardSet">
    <div v-for="card in cards" :key="card">
      <Card :name="card.name" :desc="card.desc"></Card>
    </div>
  </TransitionGroup>
</template>

<script>
import Card from './Card.vue'
export default {
  name: "CardSet",
  props: {
    cards: Array,
  },
  components: { Card },
};
</script>

<style>
.cardSet {
  display: flex;
  justify-content: space-around;
}

.list-move,
.list-enter-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
.list-leave-active {
  opacity: 0;
  position: absolute;
}
</style>