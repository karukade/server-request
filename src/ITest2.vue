<template>
  <input
    :value="value"
    type="text"
    @input="onInput"
  >
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "input"
  },
  props: ["value"],
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value)
    }
  }
}
</script>