<template>
  <div @click="selectNumber">{{ text }}</div>
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
