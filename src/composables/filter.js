import { computed } from 'vue'
import filter from '../core/filter'

export default (items, key, value) => {
  const filteredItems = computed(() => {
    if (!key.value || !value.value) return items
    return filter(items, key.value, value.value)
  })

  return filteredItems
}
