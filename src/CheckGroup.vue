<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "CheckGroup",
  model: {
    prop: "checked",
    event: "input"
  },
  props: ["checked"],
  data() {
    return {
      localChecked: this.checked || []
    }
  },
  watch: {
    checked(newVal, oldVal) {
      this.localChecked = newVal
    },
    localChecked(newVal, oldVal) {
      this.$emit("input", newVal)
    }
  }
}
</script>