<template>
  <div class="form-control mb-4 w-2/4 m-auto search-field relative">
    <div class="flex space-x-2">
      <input
        v-model="value"
        type="text"
        placeholder="Search"
        class="w-full input input-primary input-bordered"
      >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
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

<style scoped>

.search-field .flex svg {
  position: absolute;
  top: 20%;
  right: 4%;
  /* padding-right: 5rem; */
}

</style>
