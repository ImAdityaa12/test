<template>
  <div
    class="w-full min-h-[20rem] mx-auto flex gap-4 p-6 rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-white max-md:flex-col"
  >
    <div class="flex flex-col max-w-[50%] justify-between max-md:max-w-full">
      <h1 class="text-[#5A46E3] font-semibold">Category name</h1>
      <h2 class="font-bold text-3xl">
        {{ title }}
      </h2>
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 bg-gray-100 rounded-full" />
        <p class="text-sm">{{ author }}</p>
      </div>
      <p class="text-lg">
        {{ desc }}
      </p>
      <button
        class="text-sm py-3 w-fit max-md:mt-10 font-semibold flex items-center gap-2"
      >
        Read More
        <img src="/icons/arrow-right-black.svg" class="pb-[1px]" />
      </button>
    </div>
    <div class="min-w-[50%]">
      <img :src="titleImage" class="w-full object-cover rounded-md h-full" />
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
