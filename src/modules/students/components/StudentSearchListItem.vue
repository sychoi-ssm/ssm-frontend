<script setup>
const props = defineProps({
  student: Object,
  active: Boolean
})
// const emits = defineEmits(['click'])
// const handleClick = () => {
//   emit('click')
// }
</script>

<template>
  <div
    class="w-full cursor-pointer flex items-center px-2 py-1 my-1 rounded-md transition-colors"
    :class="props.active ? 'bg-[#E9ECF0]' : 'hover:bg-neutral-100'"
  >
    <div class="mr-2">
      <VAvatar color="grey" size="32" :image="student?.profileImageUrl"></VAvatar>
    </div>
    <div class="flex flex-col text-base">
      <span>김승열</span>
      <span class="text-xs text-neutral-500">가평고1</span>
    </div>
  </div>
</template>

<style scoped></style>
