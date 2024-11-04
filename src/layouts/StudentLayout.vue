<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="student-layout-container">
    <div>
      <slot name="search-bar"></slot>
    </div>
    <div class="flex flex-col gap-2 h-full w-full">
      <div class="h-[60px]">
        <slot name="profile"></slot>
      </div>
      <div class="flex gap-2 h-full">
        <div class="w-full">
          <slot name="exam-chart"></slot>
        </div>
        <div>
          <slot name="summary"></slot>
        </div>
      </div>
      <div class="h-[300px] min-h-[100px]">
        <slot name="exam-table-list"></slot>
      </div>
    </div>
  </div>
</template>
