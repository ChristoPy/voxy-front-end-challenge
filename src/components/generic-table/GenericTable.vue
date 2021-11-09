<template>
  <div class="overflow-x-auto">
    <table class="table w-full table-zebra">
      <thead>
        <tr>
          <th></th>
          <th v-for="header of headers" :key="header.key">
            <div class="flex">
              {{ header.value }}
              <div v-if="header.sortable">
                <HeaderIcons :iconType="sortType"/>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) of items" :key="index" class="hover">
          <th>{{ index + 1 }}</th>
          <td v-for="header of headers" :key="header.key">
            {{ item[header.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import HeaderIcons from './HeaderIcons.vue'

export default {
  components: { HeaderIcons },
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
  setup () {
    const sortingLookup = {
      true: 'ascending',
      false: 'descending',
    }
    const sorting = ref(false)
    const sortType = computed(() => sortingLookup[sorting.value])

    return {
      sortType,
    }
  }
}
</script>
