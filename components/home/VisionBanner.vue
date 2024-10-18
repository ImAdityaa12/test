<template>
  <div class="relative w-full bg-[#122137] mb-20 py-20 overflow-hidden">
    <!-- <img
      src="/bg-globe.svg"
      alt=""
      class="absolute top-0 left-[calc(100%-600px)] w-full h-full object-cover"
    /> -->
    <div
      class="max-w-[1440px] mx-auto flex items-start gap-16 justify-center h-full flex-col relative z-10 2xl:px-0 md:px-11 px-6"
    >
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <img src="/icons/edvanta-logo.svg" alt="Logo" />
          <p class="text-[#01E1ED] text-[18px] leading-[24px] font-extrabold">
            Our vision
          </p>
        </div>
        <h1
          class="text-white text-[36px] leading-[44px] font-extrabold tracking-wide"
        >
          Making learning accessible engaging effective and always outcome
          driven.​
        </h1>
        <p
          class="text-[18px] leading-[28px] font-medium text-white max-md:text-sm"
        >
          Our team is dedicated to delivering top-quality software applications,
          from user-friendly interfaces to impeccable coding
        </p>
      </div>
      <div
        class="flex gap-4 justify-between w-full max-md:grid max-md:grid-cols-2 max-md:gap-10"
      >
        <div v-for="item in data" :key="item.text" class="space-y-3">
          <p
            class="text-[32px] leading-[36px] font-extrabold text-[#01E1ED] max-md:text-2xl"
          >
            {{ item.number }}
          </p>
          <p class="text-white text-sm max-w-[18rem] max-md:mt-4">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// const scrollY = ref(0);
// onMounted(() => {
//   window.addEventListener("scroll", () => {
//     scrollY.value = window.scrollY;
//     console.log(scrollY.value);
//   });
// });

const data = [
  { number: "350+", text: "successful digital learning projects " },
  { number: "2007", text: "established in India " },
  {
    number: "12 years",
    text: "in business improving digital learning experience",
  },
  {
    number: "33",
    text: "Our multi-disciplinary team of creative technologists",
  },
];
</script>
