
import FdInput from '../input/input.vue'

const allComponents = [
  FdInput
]

const components = {}
allComponents.forEach((Component) => {
  components[Component.name] = Component
})

export default components
