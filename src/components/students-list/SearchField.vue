<template>
  <div class="form-control mb-4 w-2/4 m-auto">
    <div class="flex space-x-2">
      <input
        v-model="value"
        type="text"
        placeholder="Search"
        class="w-full input input-primary input-bordered"
      >
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  name: 'SearchField',
  props: {
    modelValue: String
  },
  emits: ['update:modelValue'],
  setup (props, { emit }) {
    const value = ref(props.modelValue)

    watch(value, () => {
      emit('update:modelValue', value.value)
    })

    return {
      value
    }
  }
}
</script>
