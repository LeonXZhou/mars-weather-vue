<template>
  <div class="flip-card" :class="flipped" @click="flip()">
    <div class="flip-card-inner">
      <div class="flip-card-front"></div>
      <div class="card flip-card-back">
        <h1>{{ name }}</h1>
        <p>{{ desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",

  data() {
    return {
      flipped: "",
    };
  },

  props: {
    name: String,
    desc: String,
  },

  methods: {
    flip() {
      this.flipped = "flip-card-clicked";
    },
  },
};
</script>

<style scoped>
.card {
  width: 18vw;
  height: 28vw;
  border-radius: 10px;
  border-style: solid;
  transition: all 300ms ease-in-out;
}

.card p {
  height: 16vw;

  overflow-y: auto;
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

/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  width: 18vw;
  height: 28vw;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
  background-color: transparent;
  border-radius: 10px;
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  border-radius: 10px;
  position: relative;
  width: 18vw;
  height: 28vw;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  background-image: url("../../public/Tarot/back.jpg");
  background-position: center;
}

.flip-card:hover {
  transform: scale(1.05);
  box-shadow: 8px 8px rgba(0,0,0,0.3);
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card-clicked .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  border-radius: 10px;
  position: absolute;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  background-color: white;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  border-radius: 10px;
  color: black;
}

/* Style the back side */
.flip-card-back {
  transform: rotateY(180deg);
}
</style>
