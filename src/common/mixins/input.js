const EVENT_CHANGE = 'change'

export default {
  methods: {
    changeHander(e) {
      this.$emit(EVENT_CHANGE, e)
    }
  }
}
