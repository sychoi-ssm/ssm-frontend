<script setup></script>

<template>
  <v-dialog width="auto">
    <v-card rounded="xl">
      <div class="mt-4 mb-6 mx-6">
        <slot name="default"></slot>
      </div>
    </v-card>
  </v-dialog>
</template>

<style scoped></style>
