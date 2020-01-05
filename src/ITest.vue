<template>
  <ITest2 v-model="input.value" />
</template>

<script>
import ITest2 from "./ITest2"

export default {
  components: {
    ITest2
  },
  props: ["input"]
}
</script>