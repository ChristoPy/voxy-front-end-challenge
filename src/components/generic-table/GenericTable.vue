<template>
  <div class="overflow-x-auto">
    <table class="table w-full table-zebra">
      <thead>
        <tr>
          <th></th>
          <th v-for="header of headers" :key="header.key">
            <div class="flex">
              {{ header.value }}
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) of items" :key="index" class="hover">
          <th>{{ index }}</th>
          <td v-for="header of headers" :key="header.key">
            {{ item[header.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
}
</script>
