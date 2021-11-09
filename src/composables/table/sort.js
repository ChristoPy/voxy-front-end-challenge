import { ref, computed } from 'vue'
import { useAlphabeticalSort, useHighestSort } from '../core/sort'

const DEFAULT_SORT = 'alphabetical'
const SORT_TO_COMPOSABLES = {
  'alphabetical': useAlphabeticalSort,
  'highest': useHighestSort,
}

export default (items) => {
  const internalItems = ref(items)
  const sortedKeys = ref(new Map())
  const sort = ref({
    key: null,
    sortType: null
  })

  const sortedItems = computed(() => {
    if (!sortedKeys.value.size) return items

    const sortType = sort.value.sortType
    const sortKey = ref(sort.value.key)

    return SORT_TO_COMPOSABLES[sortType](internalItems, sortKey).value
  })

  const toggleSort = ({ key, sortType = DEFAULT_SORT }) => {
    if (!sortedKeys.value.has(key)) sortedKeys.value.set(key, sortType)
    else sortedKeys.value.delete(key)

    sort.value = { key, sortType: sortType }
  }

  return {
    toggleSort,
    sortedKeys,
    sortedItems
  }
}
