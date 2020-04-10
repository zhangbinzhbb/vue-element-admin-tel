<template>
  <div class="fd-form-group">
    <p v-if="legend" class="fd-form-group-legend">{{ legend }}</p>
    <div class="fd-form-group-content">
      <slot>
        <fd-form-item
          v-for="(field, index) in fields"
          :key="field.key || index"
          :field="field"
          v-bind="$attrs"
          v-on="$listeners"
        />
      </slot>
    </div>
  </div>
</template>

<script>
import FdFormItem from './form-item.vue'
const COMPONENT_NAME = 'fd-form-group'
export default {
  name: COMPONENT_NAME,
  components: {
    FdFormItem
  },
  inheritAttrs: false,
  props: {
    legend: {
      type: String,
      default: ''
    },
    fields: {
      type: Array,
      default() {
        /* istanbul ignore next */
        return []
      }
    }
  }
}
</script>
