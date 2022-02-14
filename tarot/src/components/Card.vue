<template>
  <div class="card">
    <div>{{ name }}</div>
    <div>{{ desc }}</div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    name: String,
    desc: String,
  },
};

</script>

<style scoped>
.card {
  border-color: aqua;
  border-style: solid;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  border-radius: 10px;

  width: 10em;
  height: 13em;
}
.card:hover {
  border-color: blueviolet;
}

.card > div {
  border-color: blueviolet;
  border-style: solid;
}
</style>
