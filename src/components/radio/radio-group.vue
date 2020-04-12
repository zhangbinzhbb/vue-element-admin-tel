<template>
  <div
    ref="group"
    class="fd-radio-group"
  >
    <slot>
      <el-radio-group v-model="radioValue" :disabled="disabled" @change="changeHandler">
        <el-radio
          v-for="(option, index) in options"
          :key="index"
          :label="option.value"
        >{{ option.label }}</el-radio>
      </el-radio-group>
    </slot>
  </div>
</template>
<script type="text/ecmascript-6">
const COMPONENT_NAME = 'fd-radio-group'
const EVENT_INPUT = 'input'
const EVENT_CHANGE = 'change'

export default {
  name: COMPONENT_NAME,
  provide() {
    return {
      radioGroup: this
    }
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    value: [String, Number],
    options: {
      type: Array,
      default() {
        return []
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'left'
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    hollowStyle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      radioValue: this.value
    }
  },
  watch: {
    value(newV) {
      this.radioValue = newV
    },
    radioValue(newV) {
      this.$emit(EVENT_INPUT, newV)
    }
  },
  methods: {
    changeHandler(val) {
      this.$emit(EVENT_CHANGE, val)
    }
  }
}
</script>
