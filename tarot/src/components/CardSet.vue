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