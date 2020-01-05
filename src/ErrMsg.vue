<template>
  <div>
    <div
      v-for="(err, i) in errs"
      :key="i"
    >
      {{ err }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    errs: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>>