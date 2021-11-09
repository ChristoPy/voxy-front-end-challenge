<template>
  <div>
    <SearchField v-model="searchValue"/>
    <Card>
      <GenericTable :items="students" :headers="headers" />
    </Card>
  </div>
</template>

<script>
import { ref } from 'vue'
import SearchField from './SearchField.vue'
import Card from '../Card'
import GenericTable from '../generic-table/GenericTable.vue'
import useFilter from '../../composables/filter'
import studentsMock from '../../mocks/students.json'

export default {
  components: {
    SearchField,
    Card,
    GenericTable
  },
  setup() {
    const headers = ref([
      { key: 'email', value: 'E-mail', sortable: true },
      { key: 'firstName', value: 'First name', sortable: true },
      { key: 'lastName', value: 'Last name', sortable: true },
      { key: 'group', value: 'group' },
      { key: 'phone', value: 'Phone' },
      { key: 'studiedHours', value: 'Studied hours', sortable: true },
    ])
    const searchKey = ref('firstName')
    const searchValue = ref('')
    const students = useFilter(ref(studentsMock), searchKey, searchValue)

    return {
      students,
      headers,
      searchValue
    }
  }
}
</script>
