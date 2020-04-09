<template>
  <div class="fd-form">
    <el-form
      ref="form"
      :model="model"
      :label-width="labelWidth"
      class="fd-ruleForm"
    >
      <slot>
        <fd-form-group
          v-for="(group, index) in groups"
          :key="group.key || index"
          :fields="group.fields"
          :legend="group.legend"
          :model="model"
        />
      </slot>
    </el-form>
  </div>
</template>

<script>
import FdFormGroup from './form-group.vue'
const COMPONENT_NAME = 'fd-form'
export default {
  name: COMPONENT_NAME,
  components: {
    FdFormGroup
  },
  props: {
    model: {
      type: Object,
      default() {
        /* istanbul ignore next */
        return {}
      }
    },
    schema: {
      type: Object,
      default() {
        /* istanbul ignore next */
        return {}
      }
    },
    labelWidth: {
      type: String,
      default: '154px'
    }
  },
  data() {
    return {
      ruleForm: {
        name: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    groups() {
      const schema = this.schema
      const groups = schema.groups || []
      if (schema.fields) {
        groups.unshift({
          fields: schema.fields
        })
      }
      return groups
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="scss" scoped>
.fd-form{
  background-color: #fff;
}
</style>

