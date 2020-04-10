<template>
  <div class="form-container">
    <fd-form
      :model="model"
      :schema="schema"
    />
  </div>
</template>

<script>
export default {
  components: {
    fdForm: () => import('@/components/form/form')
  },
  data() {
    return {
      validity: {},
      valid: undefined,
      model: {
        inputValue: '',
        inputValue1: '',
        inputValue2: ''
      },
      schema: {
        groups: [
          {
            legend: '',
            fields: [
              {
                type: 'input',
                modelKey: 'inputValue',
                label: 'Input',
                props: {
                  placeholder: '请输入'
                },
                rules: [
                  { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                  { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                ],
                // validating when blur
                trigger: 'blur'
              },
              {
                type: 'input',
                modelKey: 'inputValue1',
                label: 'Input1',
                props: {
                  placeholder: '请输入'
                },
                rules: [
                  { required: true, message: '请输入', trigger: 'blur' }
                ],
                // validating when blur
                trigger: 'blur'
              }
            ]
          },
          {
            legend: '',
            fields: [
              {
                type: 'input',
                modelKey: 'inputValue2',
                label: 'Input2',
                props: {
                  placeholder: '请输入'
                },
                rules: [
                  { required: true, message: '请输入', trigger: 'blur' }
                ],
                // validating when blur
                trigger: 'blur'
              }
            ]
          }
        ]
      },
      options: {
        scrollToInvalidField: true,
        layout: 'standard' // classic fresh
      }
    }
  },
  methods: {
    submitHandler(e) {
      e.preventDefault()
      console.log('submit', e)
    },
    validateHandler(result) {
      this.validity = result.validity
      this.valid = result.valid
      console.log('validity', result.validity, result.valid, result.dirty, result.firstInvalidFieldIndex)
    },
    resetHandler(e) {
      console.log('reset', e)
    }
  }
}

</script>

<style lang="scss" scoped>
.form-container{
  padding: 40px;
  background-color: #fff;
}
</style>

