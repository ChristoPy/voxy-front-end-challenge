<template>
  <div class="min-h-full flex h-screen justify-center px-8">
    <div class="container lg mx-auto mt-12">
      <StudentsList />
    </div>
  </div>
</template>

<script>
import StudentsList from '@/components/students-list/StudentsList'

export default {
  components: {
    StudentsList
  }
}
</script>

