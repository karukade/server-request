<template>
  <div class="form-wrapper">
    <h1>WebDavアカウント申請</h1>
    <h2>申請者情報</h2>
    <template v-for="(input, index) in inputs">
      <SwitchInput
        :key="`input-${index}`"
        v-model="input.value"
        :type="input.key"
        :label="input.label"
        :isconfirm="isconfirm"
        :shouldvalidate="'isValid' in input"
        @update="isvalid => updateInputState(isvalid, index)"
      />
    </template>
    <template v-for="(key, rowIndex) in Object.keys(rows)">
      <section
        :key="`rows-${rowIndex}`"
        class="form-wrapper"
      >
        <h2>{{ key === "addAcounts" ? "アカウントの追加申請" : "アカウントの削除申請" }}</h2>
        <template v-for="(row, index) in rows[key]">
          <InputWrap
            :key="`row-${index}`"
            :is-err="!row.isValid"
            :errmsg="row.errs"
          >
            <template #input>
              <div class="btn-wrap-right">
                <button
                  v-if="isconfirm && row.editable"
                  class="btn-edit"
                  :disabled="!row.isValid"
                  @click="switchInput(key, index)"
                >
                  OK
                </button>
                <button
                  v-if="isconfirm && !row.editable"
                  class="btn-edit"
                  @click="switchInput(key, index)"
                >
                  編集
                </button>
                <button
                  v-if="index > 0"
                  class="btn-remove"
                  @click="remove(key, index)"
                >
                  × 削除
                </button>
              </div>
              <template v-for="(input, inputIndex) in row.inputs">
                <Input 
                  :key="inputIndex"
                  v-model="input.value"
                  :type="input.key"
                  :label="input.label"
                  :editable="row.editable"
                  :value="input.value"
                  @validated="isErr => { onValidated(isErr, key, index, inputIndex) }"
                />
              </template>
            </template>
          </InputWrap>
        </template>
        <div>
          <div
            class="btn-wrap"
          >
            <button
              class="btn-secondary"
              @click="add(key)"
            >
              追加する
            </button>
          </div>
        </div>
      </section>
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
</template>

<script>
import Input from "./Input"
import InputWrap from "./InputWrap"
import SwitchInput from "./SwitchInput"
import axios from "axios"

export default {
  components:{
    Input,
    InputWrap,
    SwitchInput
  },
  data() {
    return {
      isconfirm: false,
      inputs: [
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
        }
      ],
      rows: {
        addAcounts: [
          {
            isValid: false,
            errs: [],
            editable: true,
            inputs: [
              {
                key: "name",
                label: "氏名",
                value: "",
                isErr: {flg: false, msg: null},
                isValid: false
              },
              {
                key: "email",
                label: "メール",
                value: "",
                isErr: {flg: false, msg: null},
                isValid: false
              }
            ]
          }
        ],
        removeAccounts: [
          {
            isValid: false,
            errs: [],
            editable: true,
            inputs: [
              {
                key: "name",
                label: "氏名",
                value: "",
                isErr: {flg: false, msg: null},
                isValid: false
              },
              {
                key: "email",
                label: "メール",
                value: "",
                isErr: {flg: false, msg: null},
                isValid: false
              }
            ]
          }
        ]
      }
    }
  },
  computed: {
    btnDisabled() {
      const inputs = this.inputs.every(row => row.isValid)
      return !( inputs && this.checkRowValid() )
    }
  },
  watch: {
    isconfirm(val) {
      this.addAcounts = this.addAcounts.map(row => {
        row.editable = !val
        return row
      })
    }
  },
  methods: {
    add(key) {
      const row = {
        isValid: false,
        errs: [],
        editable: true,
        inputs: [
          {
            key: "name",
            label: "氏名",
            value: "",
            isErr: {flg: false, msg: null},
            isValid: false
          },
          {
            key: "email",
            label: "メール",
            value: "",
            isErr: {flg: false, msg: null},
            isValid: false
          }
        ]
      }
      this.rows[key] = this.rows[key].concat(row)
    },
    remove(key, index) {
      this.rows[key] = this.rows[key].slice(0, index).concat(this.rows[key].slice(index + 1))
    },
    onValidated(isErr, key, index, inputIndex) {
      const row = this.rows[key][index]
      const input = row.inputs[inputIndex]
      input.isErr = isErr
      input.isValid = !isErr.flg
      row.errs = row.inputs.reduce((res, input) => {
        if (input.isErr.flg) res.push(input.isErr.msg)
        return res
      }, [])
      row.isValid = row.inputs.every(input => input.isValid)
    },
    confirm() {
      this.isconfirm = true
    },
    switchInput(key, index) {
      this.rows[key][index].editable = !this.rows[key][index].editable
    },
    updateInputState(isValid, index) {
      this.inputs[index].isValid = isValid
    },
    async submit() {
      this.loading = true
      const postData = genPostData(this.inputs)
      const {data} = await axios.post("main.php", postData)
      this.res = data
      this.submitErr = this.res.status === "error"
      this.loading = false
      this.isSubmited = true
    },
    checkRowValid() {
      const addAcountsHasValue = this.rows.addAcounts.every(row => {
        return row.inputs.some(input => input.value !== "")
      })
      const addAccoutsIsValid = this.rows.addAcounts.every(input => input.isValid)

      const removeAccountsHasValue = this.rows.removeAccounts.every(row => {
        return row.inputs.some(input => input.value !== "")
      })
      const removeAccountsIsValid = this.rows.removeAccounts.every(input => input.isValid)

      const addAcounts = addAcountsHasValue ? addAccoutsIsValid : removeAccountsIsValid || false
      const removeAccounts = removeAccountsHasValue ? removeAccountsIsValid : addAccoutsIsValid || false
      return addAcounts && removeAccounts
    }
  }
}
</script>

<style lang="scss" scoped>
hr {
  opacity: 0.3;
}
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
.btn-remove {

}
</style>