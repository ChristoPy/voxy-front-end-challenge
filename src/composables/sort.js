import { computed } from 'vue'
import sort from '../core/sort'

export const useHighestSort = (items, key) => {
  const filteredItems = computed(() => {
    if (!key.value) return items
    return sort.highest(items, key.value)
  })

  return filteredItems
}

export const useAlphabeticalSort = (items, key) => {
  const filteredItems = computed(() => {
    if (!key.value) return items
    return sort.alphabetical(items, key.value)
  })

  return filteredItems
}
