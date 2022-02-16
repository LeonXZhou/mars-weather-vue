<template>
  <div class="navItem" @click="selectNumber">{{ text }}</div>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    text: String,
    value: [String, Number],
  },
  methods: {
    selectNumber() {
      this.$emit("numberSelection", this.value);
    },
  },
};
</script>

<style scoped>
.navItem {
  display: flex;
  align-items: center;

  height: 100%;
  padding-left: 10px;
  padding-right: 10px;

  color: white
}
.navItem:hover {
  background-color: transparent;
  background-color: rgb(44, 44, 44);
}
</style>
