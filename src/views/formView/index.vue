<template>
  <div class="form-container">
    <fd-form
      :model="model"
      :schema="schema"
    />
    {{ model }}
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
        inputValue2: '',
        inputValue3: '',
        selectValue: '',
        radioValue: '',
        checkboxValue: ['1'],
        timePickerValue: ''
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
          },
          {
            legend: '',
            fields: [
              {
                type: 'select',
                modelKey: 'selectValue',
                label: 'select',
                props: {
                  options: [
                    {
                      value: '1',
                      label: '黄金糕'
                    }, {
                      value: '2',
                      label: '双皮奶'
                    }
                  ],
                  fileType: {
                    value: 'value',
                    label: 'label'
                  },
                  placeholder: 'xx',
                  disabled: false,
                  clearable: true
                },
                rules: [
                  { required: true, message: '请选择', trigger: 'change' }
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
                type: 'textarea',
                modelKey: 'inputValue3',
                label: 'Input3',
                props: {
                  placeholder: '请输入',
                  rows: '3'
                  // autosize: true
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
                type: 'select',
                modelKey: 'selectValue',
                label: 'select',
                props: {
                  options: [
                    {
                      value: '1',
                      label: '黄金糕'
                    }, {
                      value: '2',
                      label: '双皮奶'
                    }
                  ],
                  fileType: {
                    value: 'value',
                    label: 'label'
                  },
                  placeholder: 'xx',
                  disabled: false,
                  clearable: true
                },
                rules: [
                  { required: true, message: '请选择', trigger: 'change' }
                ],
                // validating when blur
                trigger: 'blur'
              },
              {
                type: 'radio-group',
                modelKey: 'radioValue',
                label: 'radioGroup',
                props: {
                  options: [
                    {
                      value: '1',
                      label: '黄金糕'
                    }, {
                      value: '2',
                      label: '双皮奶'
                    }
                  ]
                },
                rules: [
                  { required: true, message: '请选择活动资源', trigger: 'change' }
                ]
              }
            ]
          },
          {
            legend: '',
            fields: [
              {
                type: 'select',
                modelKey: 'selectValue',
                label: 'select',
                props: {
                  options: [
                    {
                      value: '1',
                      label: '黄金糕'
                    }, {
                      value: '2',
                      label: '双皮奶'
                    }
                  ],
                  fileType: {
                    value: 'value',
                    label: 'label'
                  },
                  placeholder: 'xx',
                  disabled: false,
                  clearable: true
                },
                rules: [
                  { required: true, message: '请选择', trigger: 'change' }
                ],
                // validating when blur
                trigger: 'blur'
              },
              {
                type: 'checkbox-group',
                modelKey: 'checkboxValue',
                label: 'checkboxGroup',
                props: {
                  options: [
                    {
                      value: '1',
                      label: '黄金糕'
                    }, {
                      value: '2',
                      label: '双皮奶'
                    }
                  ]
                },
                rules: []
              }
            ]
          },
          {
            legend: '',
            fields: [
              {
                type: 'time-picker',
                modelKey: 'timePickerValue',
                label: 'timePicker',
                props: {},
                rules: []
              },
              {
                type: 'checkbox-group',
                modelKey: 'checkboxValue',
                label: 'checkboxGroup',
                props: {
                  options: [
                    {
                      value: '1',
                      label: '黄金糕'
                    }, {
                      value: '2',
                      label: '双皮奶'
                    }
                  ]
                },
                rules: []
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

