<template>
  <InputWrap
    :label="label"
    :is-err="isErr.flg"
    :errmsg="isErr.msg"
  >
    <template #input>
      <Input 
        :type="type"
        :label="label"
        :editable="editable"
        :value="value"
        @validated="validated"
        @input="oninput"
      />
    </template>
    <template #input-side>
      <span v-if="type === 'url'">.emarketing.ne.jp</span>
      <button
        v-if="isconfirm && editable"
        class="btn-edit"
        :disabled="isErr.flg"
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
import Input from "./Input"
import InputWrap from "./InputWrap"

export default {
  components: {
    Input,
    InputWrap
  },
  props: [
    "value",
    "type",
    "label",
    "isconfirm",
    "shouldvalidate"
  ],
  data() {
    return {
      editable: true,
      isErr: {flg: false, msg: null}
    }
  },
  watch: {
    isconfirm(val) {
      this.editable = !val
    }
  },
  methods: {
    switchInput() {
      this.editable = !this.editable
      // if(this.editable) this.$refs.input.focus()
    },
    oninput(value) {
      this.$emit("input", value)
    },
    validated(isErr) {
      this.isErr = isErr
      this.$emit("update", !this.isErr.flg)
    }
  }
}
</script>