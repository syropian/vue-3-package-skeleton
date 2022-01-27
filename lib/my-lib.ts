import { defineComponent, h } from 'vue'

export const MyComponent = defineComponent({
  name: 'MyComponent',
  props: {},
  setup() {
    return () => h('div', {}, 'hello world')
  },
})
