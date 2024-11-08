<script setup>
import { ref } from 'vue'

import ChipFilter from '../components/ChipFilter.vue'

const filters = {
  years: [
    { title: '2024년', value: 2024 },
    { title: '2023년', value: 2023 },
    { title: '2022년', value: 2022 },
    { title: '2021년', value: 2021 }
  ],
  grades: [
    {
      value: 'm1',
      title: '중1'
    },
    {
      value: 'm2',
      title: '중2'
    },
    {
      value: 'm3',
      title: '중3'
    }
  ]
}
</script>

<template>
  <div>
    <ChipFilter name="년도" multiple :items="filters.years" />
    <ChipFilter name="학년" multiple :items="filters.grades" />
  </div>
</template>
