<template>
  <div class="w-full mb-20">
    <div class="max-w-[1440px] mx-auto 2xl:px-0 md:px-11 px-6 flex items-start gap-12 justify-center h-full flex-col">
      <div class="flex flex-col gap-2">
        <p class="text-black font-bold">Our Values</p>
        <h1 class="text-black text-3xl tracking-wide">
          Modern Problems Require
          <span class="font-bold">Modern Solutions </span>
        </h1>
        <p class="text-sm text-black">
          We have been building flexible learning ecosystems over the last 20
          years for several organisations, institutions & industries.
        </p>
      </div>
      <div class="flex gap-8 justify-between w-full max-sm:flex-col max-md:gap-4">
        <div v-for="item in data" :key="item.text" class="flex flex-col gap-2">
          <img :src="`/icons/${item.icon}`" :alt="item.title" class="w-12 h-12" />
          <p class="text-xl font-bold text-black">{{ item.title }}</p>
          <p class="text-black text-sm lg:max-w-[20rem] max-sm:min-w-full max-md:min-w-full text-wrap">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = [
  {
    icon: "blue-traingle.svg",
    title: "You Centric",
    text: "Our development is always driven by your organization’s values, identity and strategic goals ",
  },
  {
    icon: "cyan-traingle.svg",
    title: "Speed",
    text: "Accelerate your digital learning initiatives and bring your ideas to like faster with our solutions.",
  },
  {
    icon: "dark-blue-traingle.svg",
    title: "Scalable",
    text: "Easily scale and evolve with our flexible solutions tailored to meet your growing Ed-Tech needs.",
  },
];
</script>
