<template>
  <label>
    <span>テスト</span>

    <input
      type="checkbox"
      :value="value"
      :checked="parent ? localChecked.includes(value) : checked === value"
      @change="handleChange"
    >
    <slot />
  </label>
</template>

<script>
export default {
  model: {
    prop: "checked",
    event: "input"
  },

  props: {
    value: {},
    checked: {},
    uncheckedValue: ""
  },

  data() {
    return {
      localChecked: this.$parent && this.$parent.$options.name === "CheckGroup" ? this.$parent.checked : this.checked
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
    }
  }
}
</script>