<template>
  <div>
    <InputWrap
      :is-err="errs.length > 0"
      :errmsg="errs"
    >
      <template #input>
        <template v-for="(input, i) in localInputs">
          <div
            :key="i"
          >
            <Input 
              v-model="input.value"
              :type="input.key"
              :label="input.label"
              :editable="editable"
              :value="input.value"
              @validated="isErr => { onValidated(isErr, i) }"
              @blur="onBlur"
            />
          </div>
        </template>
      </template>
      <template #input-side>
        <button
          v-if="isconfirm && editable"
          class="btn-edit"
          :disabled="isErr"
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
        <button
          v-if="index > 0"
          class="btn-edit"
          @click="remove"
        >
          remove
        </button>
      </template>
    </InputWrap>
  </div>
</template>
<script>
import Input from "./Input"
import InputWrap from "./InputWrap"

export default {
  components: {
    Input,
    InputWrap
  },
  model: {
    prop: "value",
    event: "input"
  },
  props: ["isconfirm", "inputs", "index", "value"],
  data() {
    return {
      shouldupdate: false,
      editable: true,
      localInputs: this.inputs.map(input => {
        return {
          key: input.key,
          label: input.label,
          value: "",
          isErr: {flg: false, msg: null},
          isValid: false
        }
      })
    }
  },
  computed: {
    errs() {
      return this.localInputs.reduce((res, input) => {
        if (input.isErr.flg) res.push(input.isErr.msg)
        return res
      }, [])
    },
    isErr() {
      return this.errs.length > 0
    }
  },
  watch: {
    isconfirm(val) {
      this.editable = !val
    },
    value(val) {
      this.localInputs = this.inputs.map(input => {
        return {
          key: input.key,
          label: input.label,
          value: val[input.key]
        }
      })
    }
  },
  methods: {
    onValidated(isErr, index) {
      this.localInputs[index].isErr = isErr
      this.localInputs[index].isValid = !isErr.flg
      const isValid = this.localInputs.every(input => input.isValid)
      this.$emit("update", {key: this.index, isValid})
    },
    onBlur() {
      const value = this.localInputs.reduce((res, input) => {
        res[input.key] = input.value
        return res
      }, {})
      this.$emit("input", value)
    },
    switchInput() {
      this.editable = !this.editable
    },
    remove() {
      this.$emit("remove", this.index)
    }
  }
}
</script>

<style lang="scss" scoped>
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

