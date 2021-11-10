<template>
  <div class="card shadow">
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style scoped>

.card .card-body {
  padding: 0;
}

</style>
