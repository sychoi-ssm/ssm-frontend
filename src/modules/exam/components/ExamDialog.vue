<script setup></script>

<template>
  <v-dialog width="auto" transition="none">
    <div class="bg-[#ffffff] shadow-all rounded-xl">
      <div class="mt-4 mb-6 mx-6">
        <slot name="default"></slot>
      </div>
    </div>
  </v-dialog>
</template>

<style scoped></style>
