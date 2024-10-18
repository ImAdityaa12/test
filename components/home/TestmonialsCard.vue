<template>
  <div
    class="w-[22rem] h-[14rem] p-7 flex flex-col items-start justify-between rounded-lg gap-4 shadow-[2px_4px_15px_0px_rgba(0,0,0,0.10)] line-clamp-5"
  >
    <p>
      {{ text }}
    </p>
    <div class="flex items-center gap-4 w-full">
      <div class="w-10 h-10 rounded-full bg-gray-100" />
      <div class="flex flex-col">
        <p class="text-sm">{{ name }}</p>
        <p class="text-xs">{{ subText }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["name", "text", "subText"]);
const { name, text, subText } = toRefs(props);
</script>
