<template>
  <Card>
    <GenericTable :items="students" :headers="headers" />
  </Card>
</template>

<script>
import { ref } from 'vue'
import Card from './Card'
import GenericTable from './generic-table/GenericTable.vue'
import useFilter from '../composables/filter'
import studentsMock from '../mocks/students.json'

export default {
  components: {
    Card,
    GenericTable
  },
  setup() {
    const headers = ref([
      { key: 'email', value: 'E-mail' },
      { key: 'firstName', value: 'First name' },
      { key: 'lastName', value: 'Last name' },
      { key: 'group', value: 'group' },
      { key: 'phone', value: 'Phone' },
      { key: 'studiedHours', value: 'Studied hours' },
    ])
    const searchKey = ref('firstName')
    const searchValue = ref('')
    const students = useFilter(ref(studentsMock), searchKey, searchValue)

    return {
      students,
      headers
    }
  }
}
</script>
