<script setup>
import { computed } from 'vue'
import { ref } from 'vue'

const isEditing = ref(false)
const currentText = ref('')
const newText = ref('')

function editText() {
  newText.value = currentText.value
  isEditing.value = true
}
function saveText() {
  currentText.value = newText.value
  isEditing.value = false
}
function cancelEdit() {
  isEditing.value = false
}
</script>

<template>
  <v-text-field v-if="!isEditing" v-model="currentText" readonly variant="text">
    <template v-slot:append>
      <v-icon class="mr-2" @click="editText">mdi-pencil</v-icon>
    </template>
  </v-text-field>
  <v-text-field v-else v-model="newText" variant="outlined" dense outlined>
    <template v-slot:append>
      <v-icon class="mr-2" @click="saveText">mdi-check</v-icon>
      <v-icon class="mr-2" @click="cancelEdit">mdi-close</v-icon>
    </template>
  </v-text-field>
</template>

<style scoped></style>
