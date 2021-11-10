import { computed } from 'vue'
import filter from '../../core/filter'

export default (items, key, value) => {
  const filteredItems = computed(() => {
    if (!key.value || !value.value) return items.value
    return filter(items.value, key.value, value.value)
  })

  return filteredItems
}
