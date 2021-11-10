<template>
  <div>
    <SearchField v-model="searchValue"/>
    <Card>
      <GenericTable :items="items" :headers="headers" />
    </Card>
  </div>
</template>

<script>
import { ref, inject, computed } from 'vue'
import SearchField from './SearchField.vue'
import Card from '../Card'
import GenericTable from '../generic-table/GenericTable.vue'
import { studentsStateSymbol } from '../../contexts/students'
import { searchStateSymbol } from '../../contexts/search'
import { TABLE_HEADERS } from '../../constants/students/index'

export default {
  components: {
    SearchField,
    Card,
    GenericTable
  },
  setup() {
    const students = inject(studentsStateSymbol)
    const search = inject(searchStateSymbol)

    const searchValue = ref('')
    const searchKey = ref('firstName')

    search.setItems(students.state.all)
    search.setTerm(searchValue)
    search.setKey(searchKey)
    search.onSearch(students.setCurrentStudents)

    const items = computed(() => students.state.current)

    return {
      items,
      headers: TABLE_HEADERS,
      searchValue
    }
  }
}
</script>
