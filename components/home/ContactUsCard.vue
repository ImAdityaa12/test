<template>
  <div
    class="sm:max-w-[20rem] min-w-[15rem] min-h-[10rem] bg-[#000000]/[0.4] flex flex-col items-start justify-between p-7 text-white gap-5 rounded-md shadow-[2px_4px_15px_0px_rgba(0,0,0,0.05)]">
    <h1 class="font-bold text-xl">{{ title }}</h1>
    <p class="text-sm">{{ desc }}</p>
    <button
      class="flex items-center gap-2 text-sm bg-white text-[#002FDF] px-5 py-3 rounded-md border border-[#002FDF] font-[500]">
      {{ buttonText }}
      <img src="/public/icons/arrow-right-purple.svg" alt="" class="w-4 h-4" />
    </button>
  </div>
</template>

<script setup>
const props = defineProps(["title", "desc", "buttonText"]);
const { title, desc, buttonText } = toRefs(props);
</script>
