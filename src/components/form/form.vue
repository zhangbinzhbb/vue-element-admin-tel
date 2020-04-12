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
    <div class="fd-form-button-group">
      <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
      <el-button @click="resetForm('form')">重置</el-button>
    </div>
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
<style lang="scss">
.fd-form{
  background-color: #fff;
  border: 1px solid #d8d8d8;
  position: relative;
  .fd-form-button-group{
    position: absolute;
    right: 0;
    bottom: -54px;
  }
  .fd-form-group{
    &+.fd-form-group{
       border-top: 1px solid #d8d8d8;
    }
    .fd-form-group-content{
      display: flex;
      .fd-form-item{
        display: flex;
        align-items: center;
        flex: 1;
        &:nth-child(2){
          .el-form-item__label {
            border-right: 1px solid #d8d8d8;
            border-left: 1px solid #d8d8d8;
          }
        }
        .fd-form-item-row{
          width: 100%;
          height: 100%;
        }
        .el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label:before, .el-form-item.is-required:not(.is-no-asterisk) .el-form-item__label-wrap>.el-form-item__label:before {
          content: '';
          color: #ff4949;
          margin-right: 4px;
        }
        .el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label:after, .el-form-item.is-required:not(.is-no-asterisk) .el-form-item__label-wrap>.el-form-item__label:after {
          content: '*';
          color: #ff4949;
          margin-left: 4px;
        }
        .el-form-item{
          margin-bottom:0px;
          height: 100%;
        }
        .el-form-item__label {
          height: 52px;
          line-height: 52px;
          padding: 0;
          border-right: 1px solid #d8d8d8;
          background-color: #f8f8f9;
          padding-right: 15px;
        }
        .el-form-item__content{
          position: relative;
          .fd-form-field{
            padding: 7px 9px 0 16px;
          }
          .fd-form-field-error{
            position: absolute;
            right: 75px;
            top: 2px;
            height: 10px;
            line-height: 10px;
            background-color: #fff;
            color: #b40005;
            padding: 0 5px;
            font-size: 12px;
          }
        }
      }
      .fd-form-item_textarea{
        .el-form-item__label {
          min-height: 52px !important;
          height: 100% !important;
          line-height: inherit!important;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        .fd-form-field {
          padding: 7px 9px 7px 16px!important;
        }
      }
    }
  }
}
</style>

