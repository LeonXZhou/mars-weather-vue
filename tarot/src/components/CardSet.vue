<template >
  <TransitionGroup name="list" tag="div" class="cardSet">
    <div v-for="card in cards" :key="card" class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
        </div>
        <div class="card flip-card-back">
          <h1>{{ card.name }}</h1>
          <p>{{ card.desc }}</p>
        </div>
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
  height: 28vw;
  border-radius: 10px;
  border-style: solid;
  transition: all 300ms ease-in-out;
}

.card p {
  height: 16vw;

  overflow-y: scroll;
  overflow-x: hidden;

  /* justify-content: center; */
  /* align-items: center; */
  text-align: center;

  margin: 0.5vw;
  /* padding:.5vw; */
  /* border-style: solid; */
}

.card h1 {
  height: 6vw;

  font-size: 2.5vw;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  /* border-style: solid; */
}

/* .card:hover {
  transform: scale(1.05);
} */


/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  width: 18vw;
  height: 28vw;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 18vw;
  height: 28vw;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  transform: rotateY(180deg);
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