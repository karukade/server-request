<template>
  <InputWrap>
    <template #input>
      <label :class="['checkbox', !editable ? 'is-confirm' : '']">
        <input
          v-if="editable"
          type="checkbox"
          :checked="value === localChecked"
          class="checkbox__checkbox"
          @change="handleChange"
        >
        <span class="checkbox__label">
          {{ label }}
        </span>
      </label>
      <span v-if="!editable">{{ localChecked }}</span>
    </template>
    <template #input-side>
      <button
        v-if="isconfirm && editable"
        class="btn-edit"
        @click="switchInput"
      >
        OK
      </button>
      <button
        v-if="isconfirm && !editable"
        class="btn-edit"
        @click="switchInput"
      >
        編集
      </button>
    </template>
  </InputWrap>
</template>

<style lang="scss" scoped>
$focus-color: rgb(90, 171, 242);
$err-color: #ff3e3e;

.checkbox {
  padding-left: 30px;
  position: relative;
  &__label {
    &:before, &:after {
      display: block;
      position: absolute;
    }
    &:before {
      content: "";
      top: 0;
      bottom: 0;
      margin-top: auto;
      margin-bottom: auto;
      left: 0;
      width: 24px;
      height: 24px;
      border: 1px solid ;
      border-radius: 2px;
    }
    &:after {
      top: 4px;
      left: 5px;
      width: 14px;
      height: 7px;
      border-left: 2px solid #fff;
      border-bottom: 2px solid #fff;
      transform: rotate(-45deg)
    }
  }
  &__checkbox {
    display: none;
    &:checked + .checkbox__label {
      &:before {
        background-color: #000;
      }
      &:after {
        content: ""
      }
    }
  }
  &.is-confirm {
    color: rgb(148, 148, 148);
    font-size: 14px;
    display: block;
    padding-left: 0;
    .checkbox {
      &__label {
        &:before,&:after {
          content: normal
        }
      }
    }
  }
}
.btn-edit {
  margin-left: 8px;
  display: inline-block;
  border: none;
  background-color: rgb(58, 58, 58);
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 4px;
  font-size: 14px;
  line-height: 1;
  min-width: 48px;
  &:disabled {
    opacity: 0.3;
  }
}
</style>

<script>
import InputWrap from "./InputWrap"

export default {
  components: {
    InputWrap
  },
  model: {
    prop: "checked",
    event: "input"
  },
  props: [
    "value",
    "uncheckedValue",
    "checked",
    "isconfirm",
    "label",
    "type"
  ],
  data() {
    return {
      localChecked: this.$parent && this.$parent.$options.name === "CheckGroup" ? this.$parent.checked : this.checked,
      editable: true
    }
  },
  computed: {
    parent () {
      return ("$parent" in this && this.$parent.$options.name === "CheckGroup") ? this.$parent : null
    },
    computedLocalChecked: {
      get() {
        return this.parent ? this.parent.localChecked : this.localChecked
      },
      set(val) {
        if (this.parent) {
          this.parent.localChecked = val
        } else {
          this.localChecked = val
        }
      }
    }
  },
  watch: {
    computedLocalChecked(newVal) {
      this.$emit("input", newVal)
    },
    isconfirm(val) {
      this.editable = !val
    }
  },
  methods: {
    handleChange ({ target: { checked } }) {
      let localChecked = this.computedLocalChecked
      const value = this.value
      const isArr = Array.isArray(localChecked)
      const uncheckedValue = isArr ? null : this.uncheckedValue
      if (isArr) {
        const includes =  localChecked.includes(value)
        if (checked && !includes) {
          localChecked = localChecked.concat(value)
        } else if (!checked && includes) {
          localChecked = localChecked.filter(val => val !== value)
        } 
      } else {
        localChecked = checked ? value : uncheckedValue
      }
      this.computedLocalChecked = localChecked
    },
    switchInput() {
      this.editable = !this.editable
    }
  }
}
</script>