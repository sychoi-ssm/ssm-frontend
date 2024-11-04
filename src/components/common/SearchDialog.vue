<script setup>
function onAfterEnter() {
  console.log('검색 클릭')
}
</script>

<template>
  <v-dialog
    class="search-modal"
    width="auto"
    scrollable
    transition="none"
    @afterEnter="onAfterEnter"
  >
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn rounded="xl" :ripple="false" variant="tonal" color="grey" v-bind="activatorProps">
        <template v-slot:prepend>
          <v-icon icon="mdi-magnify" />
        </template>
        <span class="border-[1px] h-5 w-5 text-xs rounded-md flex align-center justify-center mr-1"
          >/</span
        >
        <span>를 눌러 검색하세요</span>
      </v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card class="rounded-3xl" style="width: 640px">
        <v-card-text class="px-4">
          <div class="flex items-center justify-start bg-neutral-200 px-4 py-2 rounded-3xl">
            <v-icon icon="mdi-magnify" class="mr-2" />
            <input class="outline-none w-full" placeholder="검색어를 입력해주세요" />
          </div>
          <div></div>
        </v-card-text>
        <v-divider></v-divider>
      </v-card>
    </template>
  </v-dialog>
</template>

<style>
.search-modal .v-overlay__content {
  position: absolute !important;
  top: 10px !important; /* Adjust the vertical distance from the top */
  left: 50% !important;
  transform: translateX(-50%) !important;
}
</style>
