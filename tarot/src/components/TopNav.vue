<template>
  <nav>
    <NavItem
      @numberSelection="numberSelectionListener"
      text="1 Card"
      value="1"
    />
    <NavItem
      @numberSelection="numberSelectionListener"
      text="3 Card"
      value="3"
    />
    <NavItem
      @numberSelection="numberSelectionListener"
      text="5 Card"
      value="5"
    />
    <NavItem
      @numberSelection="numberSelectionListener"
      text="Search Card"
      value="search"
    />
  </nav>
</template>

<script>
import NavItem from "./NavItem.vue";
export default {
  name: "TopNav",
  components: { NavItem },
  methods: {
    numberSelectionListener(value) {
      this.$emit("numberSelection", value);
    },
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: black;
  width: 100vw;
  height: 5vh;

  position: fixed;
  top: 0;
  left: 0;
}
</style>