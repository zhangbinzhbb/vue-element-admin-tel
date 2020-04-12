<template>
  <div ref="formItem" class="fd-form-item" :class="formItemClass">
    <template v-if="!isBtnField">
      <div class="fd-form-item-row">
        <el-form-item
          :rules="fieldValue.rules"
          :prop="fieldValue.modelKey"
        >
          <span v-show="fieldValue.label" slot="label" class="fd-form-label">{{ fieldValue.label }}</span>
          <div class="fd-form-field">
            <slot>
              <component :is="componentName" v-model="modelValue" v-bind="fieldValue.props" v-on="fieldValue.events" />
            </slot>
          </div>
          <span slot="error" slot-scope="{error}" class="fd-form-field-error">
            {{ error }}
          </span>
        </el-form-item>
      </div>
    </template>
  </div>
</template>

<script>
import { processField } from './fields/index'
import components from './components'
export default {
  components,
  inheritAttrs: false,
  props: {
    field: {
      type: Object,
      default() {
        /* istanbul ignore next */
        return {}
      }
    }
  },
  data() {
    const modelKey = this.field.modelKey
    const model = this.$attrs.model
    const modelValue = modelKey ? model[modelKey] : null
    return {
      model: this.$attrs.model,
      modelValue: modelValue
    }
  },
  computed: {
    fieldValue() {
      return processField(this.field)
    },
    hasRules() {
      return Object.keys(this.fieldValue.rules || {}).length > 0
    },
    isBtnField() {
      return this.fieldValue.type === 'button'
    },
    componentName() {
      const fieldValue = this.fieldValue
      const component = fieldValue.component
      if (component) {
        return component
      }
      const type = fieldValue.type
      const fdType = `fd-${type}`
      if (components[fdType]) {
        return fdType
      }
      return type
    },
    formItemClass() {
      const fieldValue = this.fieldValue
      return {
        'fd-form-item_textarea': fieldValue.type === 'textarea'
      }
    }
  },
  watch: {
    modelValue: {
      handler(newModel) {
        // update form model
        this.model[this.fieldValue.modelKey] = newModel
      },
      sync: true
    }
  }
}
</script>
