
<template>
  <div class="container">
    以下内容で依頼を受け付けました。
    <br>
    お問い合わせ：aaaaaaa@a.a
    <div class="table">
      <dl
        v-for="(item, index) in $route.params.items"
        :key="index"
        class="table_row"
      >
        <dt class="table_label">
          {{ item.label }}
        </dt>
        <template v-if="item.children">
          <dd class="table_multi_row">
            <dl
              v-for="(child, childIndex) in item.children"
              :key="childIndex"
            >
              <dt>{{ child.label }}</dt>
              <dd>{{ child.value }}</dd>
            </dl>
          </dd>
        </template>
        <dd v-else>
          {{ item.value }}
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    if (!this.$route.params.items) this.$router.push("/")
  }
}
</script>>

<style lang="scss" scoped>
.table {
  margin-top: 40px;
  > * + * {
    margin-top: 40px;
  }
}
.table_label {
  font-size: 14px;
}
.table_data {
  margin-top: 8px;
  font-size: 16px;
}
</style>