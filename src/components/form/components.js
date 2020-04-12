
import FdInput from '../input/input.vue'
import FdTextarea from '../textarea/textarea.vue'
import FdSelect from '../select/select.vue'
import FdRadioGroup from '../radio/radio-group.vue'
import FdCheckboxGroup from '../checkbox-group/checkbox-group.vue'
import FdTimePicker from '../time-picker/time-picker.vue'

const allComponents = [
  FdInput,
  FdTextarea,
  FdSelect,
  FdRadioGroup,
  FdCheckboxGroup,
  FdTimePicker
]

const components = {}
allComponents.forEach((Component) => {
  components[Component.name] = Component
})

export default components
