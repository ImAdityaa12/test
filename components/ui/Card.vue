<template>
  <div
    class="w-full min-h-[15rem] rounded-lg p-6 shadow-[2px_4px_15px_0px_rgba(0,0,0,0.05)]"
  >
    <div
      class="flex flex-col items-center justify-between gap-2 min-h-[15rem] max-md:h-full"
    >
      <div class="h-[2rem] mr-auto">
        <img :src="`icons/${icon}`" alt="" />
      </div>
      <h1 class="text-xl font-bold mr-auto mt-4">{{ title }}</h1>
      <p class="max-md:text-xs">
        {{ description }}
      </p>
      <div
        class="p-2 border border-[#002FDF] ml-auto cursor-pointer rounded-sm"
      >
        <img src="/icons/arrow-outward.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["icon", "title", "description", "imgSrc"]);
const { icon, title, description, imgSrc } = toRefs(props);
</script>
