import {
  reactive,
  provide,
  inject,
  watch,
  ref
} from 'vue'
import useFilter from '../composables/core/filter'

const baseState = {
  term: '',
  searchKey: '',
  items: new Map(),
  currentItems: new Map()
}

export const searchStateSymbol = Symbol('search')
export const useSearchState = () => inject(searchStateSymbol)
export const createSearchState = () => {
  const state = reactive(baseState)
  const searchCallback = ref(() => {})

  const setItems = (items, key) => {
    state.items.set(key, items)
    watch(() => items.value, () => state.items.set(key, items))
  }

  const setTerm = (searchTerm, key) => {
    state.term = searchTerm.value
    watch(() => searchTerm.value, () => {
      state.term = searchTerm.value
      const termItems = ref(state.items.get(key))
      state.currentItems.set(key, useFilter(termItems, ref(state.searchKey), searchTerm))
      searchCallback.value(state.currentItems.get(key))
    })
  }
  const setKey = (searchKey) => {
    state.searchKey = searchKey.value
    watch(() => searchKey.value, () => state.searchKey = searchKey.value)
  }

  const onSearch = (callback) => searchCallback.value = callback

  return {
    state,
    setItems,
    setTerm,
    setKey,
    onSearch
  }
}
export const provideSearchState = () => provide(searchStateSymbol, createSearchState())
