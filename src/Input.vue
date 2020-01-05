<template>
  <label>
    <div
      :class="[
        'switch-input',
        active ? 'is-active' : '',
        focus ? 'is-focus' : '',
        isErr.flg ? 'is-err' : '',
        !editable ? 'is-confirm' : ''
      ]"
    >
      <span
        v-if="label"
        class="switch-input__label"
      >
        {{ label }}
      </span>
      <input
        ref="input"
        type="text"
        class="switch-input__input"
        :readonly="!editable"
        :value="value"
        @input="oninput"
        @blur="onblur"
        @focus="onfocus"
      >
    </div>
  </label>
</template>

<script>
import validate from "./formValidation"

export default {
  props: ["type", "label", "editable", "value"],
  data() {
    return {
      isErr: {flg: false, msg: null},
      blured: false,
      focus: false,
      inputed: false,
    }
  },
  computed: {
    active() {
      return this.value !== "" || this.focus
    }
  },
  methods: {
    onblur(e) { 
      if (!this.blured && this.inputed) { 
        this.blured = true
        this.checkErr(e)
      }
      this.focus = false
      this.$emit("blur", e)
    },
    oninput(e) {
      if (!this.inputed) this.inputed = true
      this.$emit("input", e.target.value)
      if (this.blured) this.checkErr(e)
    },
    onfocus(e) {
      this.$emit("focus", e)
      this.focus = true
    },
    checkErr(e) {
      this.isErr = validate(this.type, e.target.value, this.label)
      this.$emit("validated", this.isErr)
    },
  }
}
</script>

<style lang="scss" scoped>
$focus-color: rgb(90, 171, 242);
$err-color: #ff3e3e;

.switch-input {
  padding: 4px 14px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 56px;
  border-radius: 4px;
  background-color: #eee;
  border: solid 1px transparent;
  &__label {
    padding-left: 4px;
    padding-right: 4px;
    color: #333;
    font-size: 14px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 12px;
    height: 1.2em;
    line-height: 1.2em;
    margin-top: auto;
    margin-bottom: auto;
    transition: transform 0.2s;
  }
  &__input {
    width: 100%;
    border: none;
    &:focus {
      outline: none;
    }
    &:read-only {
      font-size: 18px;
    }
  }
  &.is-focus.is-active {
    border-color: $focus-color;
    .switch-input__label {
      color: $focus-color;
    }
  }
  &.is-active {
    border-color: rgb(148, 148, 148);
    background-color: #fff;
    .switch-input__label {
      color: rgb(148, 148, 148);
      font-size: 14px;
      transform: translateY(-26px);
      background-color: #fff;
    }
  }
  &.is-confirm {
    border-radius: 0;
    padding: 0;
    border: none;
    border-bottom: 1px solid rgb(186, 186, 186);
    .switch-input__input {
      font-size: 18px;
    }
    .switch-input__label {
      color: rgb(148, 148, 148);
      font-size: 14px;
      background-color: #fff;
      transform: translate(-12px, -26px)
    }
  }
  &.is-err {
    border-color: $err-color !important;
    .switch-input__label {
      color: $err-color !important;
    }
  }
}
</style>