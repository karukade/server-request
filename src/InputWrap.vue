<template>
  <div>
    <div class="input-wrap">
      <div class="input-wrap__input">
        <slot name="input" />
      </div>
      <div class="input-wrap__side">
        <slot
          name="input-side"
        />
      </div>
    </div>
    <template v-if="isErr !== undefined">
      <div
        v-if="!Array.isArray(errmsg)"
        class="err"
      >
        {{ isErr ? errmsg : " " }}
      </div>
      <template v-else>
        <div
          v-for="(err, i) in errmsg"
          :key="i"
          class="err"
        >
          {{ err }}
        </div>
      </template>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.label {
  font-size: 16px;
  display: block;
  color: rgb(77, 77, 77);
  margin-bottom: 4px;
}
.input-wrap {
  display: flex;
  align-items: center;
  &__input {
    width: 100%;
    flex-shrink: 1;
    > * + * {
      margin-top: 16px;
    }
  }
  &__side {
    flex-shrink: 0;
  }
  > * + * {
    margin-left: 8px;
  }
}
.err {
  margin-top: 8px;
  font-size: 14px;
  color: #ff3e3e;
  min-height: 1.5em;
}
</style>

<script>
export default {
  props: ["isErr", "errmsg"]
}
</script>