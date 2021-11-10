<template>
  <div class="min-h-full flex h-screen justify-center px-8 bg-base-200">
    <div class="container lg mx-auto mt-12">
      <StudentsTable />
    </div>
  </div>
</template>

<script>
import StudentsTable from '@/components/students-table/StudentsTable'

export default {
  components: {
    StudentsTable
  }
}
</script>

