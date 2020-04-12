<template>
  <div class="fd-date-picker">
    <el-date-picker
      v-model="valueTime"
      :type="_type"
      :placeholder="_placeholder"
    />
  </div>

</template>

<script>
const COMPONENT_NAME = 'fd-time-picker'
export default {
  name: COMPONENT_NAME,
  props: {
    type: {
      type: String,
      default: 'datetime'
    },
    placeholder: {
      type: String,
      default: ''
    },
    // eslint-disable-next-line vue/require-default-prop
    value: [String, Object]
  },
  data() {
    return {
      valueTime: ''
    }
  },
  computed: {
    _type() {
      return this.type
    },
    _placeholder() {
      return this.placeholder || '请选择时间'
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue, oldValue) {
        this.valueTime = this.value
      }
    }
  }
}
</script>

<style lang="scss">
.fd-date-picker{
  .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 100%;
  }
}
</style>
