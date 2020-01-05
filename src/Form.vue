<template>
  <div>
    <LoadingModal
      :show="loading"
      :error="submitErr"
      @loaded="compleat"
    />
    <div
      v-show="!isSubmited"
      class="form-wrapper"
    >
      <template v-for="(input, index) in inputs">
        <div
          v-if="input.children"
          :key="index"
        >
          <span class="label">{{ input.label }}</span>
          <div class="multi-input-wrap">
            <template v-for="(child, childIndex) in input.children">
              <CheckBox
                v-if="child.checkbox"
                :key="childIndex"
                v-model="child.value"
                :type="child.key"
                :label="child.label"
                :isconfirm="isconfirm"
                :value="child.checkedValue"
              />
              <SwitchInput
                v-else
                :key="childIndex"
                v-model="child.value"
                :type="child.key"
                :label="child.label"
                :isconfirm="isconfirm"
                :shouldvalidate="'isValid' in child"
                @update="isValid => { updatestate(isValid, index, childIndex) }"
              />
            </template>
          </div>
        </div>
        <template v-else>
          <CheckBox
            v-if="input.checkbox"
            :key="index"
            v-model="input.value"
            :type="input.key"
            :label="input.label"
            :isconfirm="isconfirm"
            :value="input.checkedValue"
            :unchecked-value="input.uncheckedValue"
          />
          <SwitchInput
            v-else
            :key="index"
            v-model="input.value"
            :type="input.key"
            :label="input.label"
            :isconfirm="isconfirm"
            :shouldvalidate="'isValid' in input"
            @update="isValid => { updatestate(isValid, index) }"
          />
        </template>
      </template>
      <div
        v-if="!isconfirm"
        class="btn-wrap"
      >
        <button
          class="btn"
          :disabled="btnDisabled"
          @click="confirm"
        >
          入力内容を確認する
        </button>
      </div>
      <div
        v-else
        class="btn-wrap"
      >
        <button
          class="btn"
          :disabled="btnDisabled"
          @click="submit"
        >
          依頼を送信する
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SwitchInput from "./SwitchInput"
import CheckBox from "./CheckBox"
import LoadingModal from "./LodingModal"
import axios from "axios"

const domain = ".emarketing.ne.jp"

function genPostData(inputs) {
  return inputs.reduce((res, input) => {
    if (input.children) {
      res[input.key] = input.children.map(child => `${child.label}：${child.value}`).join("\n")
    } else {
      res[input.key] = input.key === "url" ? `${input.value}${domain}` : input.value
    }
    return res
  }, {})
}

function genIsValidObj(inputs) {
  return inputs.reduce((res, input) => {
    if (input.children) {
      input.children.reduce((res, child) => {
        if ("isValid" in child) res[child.key] = child.isValid
        return res
      }, res)
    } else {
      if ("isValid" in input) res[input.key] = input.isValid
    }
    return res
  }, {})
}

function optimizeInputsObj(inputs) {
  return inputs.map(input => {
    if (input.children) {
      input.children = input.children.map(child => unConfigurableKeyAndLabel(child))  
    }
    return unConfigurableKeyAndLabel(input)
  })
}

function unConfigurableKeyAndLabel(obj) {
  Object.defineProperties(obj, {
    key: {
      value: obj.key,
      configurable: false
    },
    label: {
      value: obj.label,
      configurable: false
    }
  })
  return obj
}

export default {
  components: {
    SwitchInput,
    CheckBox,
    LoadingModal
  },
  data() {
    return {
      inputs: [],
      isValid: {},
      isconfirm: false,
      isSubmited: false,
      submitErr: false,
      loading: false,
      res: null
    }
  },
  computed: {
    btnDisabled() {
      return this.inputs.every(input => input.isValid)
    }
  },
  watch: {
    isconfirm(val) {
      this.editable = !val
    }
  },
  created() {
    this.inputs = optimizeInputsObj([
      {
        key: "jobname",
        label: "案件名",
        value: "",
        isValid: false
      },
      {
        key: "requester",
        label: "氏名",
        value: "",
        isValid: false
      },
      {
        key: "requesterDepartment",
        label: "部署名",
        value: "",
        isValid: false
      },
      {
        key: "requesterMail",
        label: "メールアドレス",
        value: "",
        isValid: false
      },
      {
        key: "url",
        label: "希望URL",
        value: "",
        isValid: false
      },
      {
        key: "ftp",
        label: "FTP情報",
        isValid: false,
        children: [
          {
            key: "ftp_id",
            label: "ID",
            value: "",
            isValid: false
          },
          {
            key: "ftp_pass",
            label: "PASS",
            value: "",
            isValid: false
          }
        ]
      },
      {
        key: "basic",
        label: "basic認証",
        isValid: false,
        children: [
          {
            key: "basic_id",
            label: "ID",
            value: "",
            isValid: false
          },
          {
            key: "basic_pass",
            label: "PASS",
            value: "",
            isValid: false
          }
        ]
      },
      {
        key: "limit",
        label: "使用期限",
        value: ""
      },
      {
        key: "ssl",
        label: "SSL",
        value: "",
        checkedValue: "要",
        uncheckedValue: "不要",
        checkbox: true
      }
    ])
  },
  methods:{
    updatestate(isValid, index, childIndex = null) {
      let input = this.inputs[index]
      input = childIndex ? input.children[childIndex] : input
      input.isValid = isValid
      if (childIndex) {
        this.inputs[index].isValid = this.inputs[index].children(child => child.isValid)
      }
    },
    confirm() {
      this.isconfirm = true
      window.scroll(0, 0)
    },
    compleat() {
      if (this.res.status === "error") {
        this.$router.push("error")
        return
      }
      this.$router.push({name: "complete", params: { items: this.inputs }})
    },
    async submit() {
      this.loading = true
      const postData = genPostData(this.inputs)
      const {data} = await axios.post("main.php", postData)
      this.res = data
      this.submitErr = this.res.status === "error"
      this.loading = false
      this.isSubmited = true
    }
  }
}
</script>

<style lang="scss" scoped>
.label {
  display: inline-block;
  margin-bottom: 16px;
}
.multi-input-wrap {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  > * {
    width: 48%;
  }
}
</style>