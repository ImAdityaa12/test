<template>
  <div class="w-full bg-[#122137] mb-20 py-20">
    <div class="max-w-[1440px] mx-auto flex items-start gap-12 justify-center h-full flex-col 2xl:px-0 md:px-11 px-6">
      <div class="flex flex-col gap-2">
        <p class="text-[#01E1ED]">Our Initiatives</p>
        <h1 class="text-white text-3xl tracking-wide">
          <span class="font-bold"> Built for </span>Learners.
          <span class="font-bold"> Built by </span>Learners.
        </h1>
        <p class="text-sm text-white">
          We have been building flexible learning ecosystems over the last 20
          years for several organisations, institutions & industries.
        </p>
      </div>
      <div class="flex gap-4 justify-between w-full max-md:grid max-md:grid-cols-2 max-md:gap-8 max-sm:grid-cols-1">
        <div v-for="item in data" :key="item.text"
          class="flex flex-col gap-2 min-h-[10rem] max-md:p-4 max-md:min-h-[14rem]">
          <img :src="`/icons/${item.icon}`" :alt="item.title" class="w-12 h-12" />
          <p class="text-xl font-bold text-[#01E1ED] max-md:mt-2">
            {{ item.product }}
          </p>
          <p class="text-white text-sm max-w-[18rem]">{{ item.text }}</p>
          <div class="text-white flex items-center gap-2 mt-auto cursor-pointer">
            <p class="text-sm">Know more</p>
            <img src="/public/icons/arrow-right.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = [
  {
    icon: "thought-jumper.svg",
    product: "Thought jumper",
    text: "A content curation engine delivering rich, multimodal learning experiences from diverse repositories.",
  },
  {
    icon: "leap.svg",
    product: "LEAP",
    text: "A personalized learning platform powered by ThoughtJumper, offering courses across various disciplines for students and professionals.",
  },
  {
    icon: "unlearn.svg",
    product: "Unlearn",
    text: "An innovative learning experience blending gaming and education using cutting-edge technologies.",
  },
  {
    icon: "ctrl-and-learn.svg",
    product: "Ctrl + Learn",
    text: "A podcast series exploring how technology and gaming enhance learning and personal growth.",
  },
];
</script>
