<template>
  <div class="overflow-x-auto">
    <table class="table w-full table-zebra">
      <thead>
        <tr>
          <th></th>
          <th v-for="header of headers" :key="header.key">
            <div class="flex" @click="header.sortable && toggleSort(header)">
              {{ header.value }}
              <div v-if="header.sortable">
                <HeaderIcons :ascending="sortedKeys.has(header.key)"/>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) of sortedItems" :key="index" class="hover">
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
import HeaderIcons from './HeaderIcons.vue'
import useTableFilter from '../../composables/table/sort'

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
  setup (props) {
    const { toggleSort, sortOrder, sortedItems, sortedKeys } = useTableFilter(props.items)

    return {
      sortedItems,
      sortOrder,
      sortedKeys,
      toggleSort,
    }
  }
}
</script>
