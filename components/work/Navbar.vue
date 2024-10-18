<template>
  <nav class="flex items-center gap-10 mb-10 overflow-x-auto min-h-[60px]" style="scrollbar-width: none;">
    <div v-for="(link, i) in links" :key="i" class="group flex flex-col">
      <div :to="link.url" class="cursor-pointer" :class="activeLinkIndex === i
        ? 'translate-y-[-4px] text-[#002FDF]'
        : 'group-hover:translate-y-[-4px] transition-all duration-250 ease-in-out group-hover:text-[#002FDF]'
        " @click="activeLinkIndex = i">
        {{ link }}
      </div>
      <span class="w-full bg-[#002FDF]" :class="activeLinkIndex === i
        ? 'h-[4px]'
        : 'h-0 group-hover:h-[4px] origin-bottom-left transition-all duration-250 ease-in-out'
        "></span>
    </div>
  </nav>
</template>
<script setup>
import { ref } from "vue";

const links = ["All", "Corporate", "Engineering", "Industry", "Product"];
const activeLinkIndex = ref(0);
</script>
