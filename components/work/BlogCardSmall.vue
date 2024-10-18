<template>
  <div
    class="max-w-[700px] max-h-[800px] mx-auto flex gap-4 p-6 rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-white flex-col"
  >
    <div class="min-w-[50%]">
      <img :src="titleImage" class="w-full object-cover rounded-md h-full" />
    </div>
    <div class="flex flex-col w-full justify-between max-md:max-w-full gap-4">
      <h1 class="text-[#5A46E3] font-semibold">Category name</h1>
      <h2 class="font-bold text-3xl">
        {{ title }}
      </h2>
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 bg-gray-100 rounded-full" />
        <p class="text-sm">{{ author }}</p>
      </div>
      <button
        class="text-sm py-3 w-fit max-md:mt-10 font-semibold flex items-center gap-2"
      >
        Read More
        <img src="/icons/arrow-right-black.svg" class="pb-[1px]" />
      </button>
    </div>
  </div>
</template>
<script setup>
defineProps([
  "title",
  "desc",
  "icon",
  "titleImage",
  "category",
  "author",
  "authorPicture",
]);
</script>
