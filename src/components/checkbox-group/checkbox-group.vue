<template>
  <div ref="group" class="fd-checkbox-group">
    <slot>
      <el-checkbox-group v-model="checkList" @change="changeHandler">
        <el-checkbox
          v-for="(option, index) in options"
          :key="index"
          :label="option.value"
        >
          {{ option.label }}
        </el-checkbox>
      </el-checkbox-group>
    </slot>
  </div>
</template>
<script type="text/ecmascript-6">
const COMPONENT_NAME = 'fd-checkbox-group'
const EVENT_INPUT = 'input'
const EVENT_CHANGE = 'change'
export default {
  name: COMPONENT_NAME,
  props: {
    // eslint-disable-next-line vue/require-default-prop
    value: {
      type: Array
    },
    position: {
      type: String,
      default: 'left'
    },
    hollowStyle: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default() {
        return []
      }
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: Infinity
    }
  },
  data() {
    return {
      checkList: []
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue, oldValue) {
        this.checkList = this.value.concat()
      }
    }
  },
  methods: {
    changeHandler(val) {
      this.$emit(EVENT_INPUT, val)
      this.$emit(EVENT_CHANGE, val)
    }
  }
}
</script>
