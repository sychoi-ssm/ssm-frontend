<script setup>
const props = defineProps({
  headers: Array,
  items: Array
})
</script>
<template>
  <v-data-table
    class="ssm-v-data-table"
    :headers="props.headers"
    :items="props.items"
    item-key="name"
    density="compact"
    hide-default-footer
  >
    <template #body="{ items }">
      <tr
        v-for="(item, index) in items"
        :key="index"
        class="text-xs"
        :class="index % 2 === 0 ? 'bg-[#E9ECF0]' : ''"
      >
        <td class="border-0 text-center" :class="index === 0 ? 'font-bold' : ''">
          <span>{{ item.subject }}</span>
        </td>
        <td class="border-0 text-center" :class="index === 0 ? 'font-bold' : ''">
          <span>{{ item.q1 }}</span>
        </td>
        <td class="border-0 text-center" :class="index === 0 ? 'font-bold' : ''">
          <span>{{ item.q2 }}</span>
        </td>
        <td class="border-0 text-center" :class="index === 0 ? 'font-bold' : ''">
          <span>{{ item.q3 }}</span>
        </td>
        <td class="border-0 text-center" :class="index === 0 ? 'font-bold' : ''">
          <span>{{ item.q4 }}</span>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>
