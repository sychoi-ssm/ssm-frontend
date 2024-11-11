<script setup></script>

<template>
  <div>
    <MenuItem
      v-for="(d, index) in data"
      :key="index"
      :active="activeIndex === index"
      :student="d"
      @click="() => handleItemClick(index)"
    />
  </div>
</template>

<style scoped></style>
