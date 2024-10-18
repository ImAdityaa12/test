<template>
  <div class="bg-[#5A46E3] min-h-[25rem] mb-20 max-sm:h-full">
    <div class="wrapper py-[120px] 2xl:px-0 md:px-11 px-6">
      <div class="flex flex-col gap-4 items-start h-full">
        <p class="text-white">Connect with us</p>
        <p class="font-bold text-white text-xl">Looking to get things done?</p>
        <p class="text-white">
          Let’s create the best learning experience for your business together
        </p>
        <div class="flex gap-5 mt-4 max-md:w-full max-md:justify-between max-sm:flex-col w-full flex-wrap">
          <HomeContactUsCard v-for="item in list" :key="item.title" :title="item.title" :desc="item.desc"
            :buttonText="item.buttonText" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const list = [
  {
    title: "Have a project in mind ?",
    desc: "Let’s begin your success story together right away!",
    buttonText: "Let’s talk with team",
  },
  {
    title: "Join us",
    desc: "We know you are not typical and neither are we. Join our family.",
    buttonText: "Job opening",
  },
];
</script>
