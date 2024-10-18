<template>
  <div class="w-full mb-20">
    <div class="max-w-[1440px] mx-auto flex items-start gap-12 justify-center h-full flex-col 2xl:px-0 md:px-11 px-6">
      <div class="flex flex-col gap-2">
        <p class="text-black font-bold">Client Voice</p>
        <h1 class="text-black text-3xl tracking-wide">
          Trusted by our partners
        </h1>
        <p class="text-xm text-black">
          Our customers are our biggest asset and here is what they have to say
        </p>
      </div>
      <div ref="scrollContainer" class="w-full flex gap-4 overflow-x-hidden p-4 max-md:p-3 relative">
        <div class="flex gap-4 animate-scroll" :style="{ '--scroll-width': `${scrollWidth}px` }">
          <div v-for="item in duplicatedData" :key="item.id">
            <HomeTestmonialsCard :name="item.name" :subText="item.subText" :text="item.text" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const originalData = [
  {
    id: 1,
    subText: "Times Learning",
    name: "Varun Dhamija",
    text: "Edvanta's services for our edtech needs have been stellar. Their consultative approach, agility, and scalability are impressive.",
  },
  {
    id: 2,
    subText: "Alembic Pharmaceuticals",
    name: "Paurav Andheria",
    text: "Totara Learn improved our learning process, reduced time, and simplified usage for all. Data management is efficient and authorisation is convenient.",
  },
  {
    id: 3,
    subText: "Pearson Inc",
    name: "Reena Tondon",
    text: "Edvanta has been transformative for Pearson globally. I highly recommend the Edvanta Technologies team.",
  },
  {
    id: 4,
    subText: "Piramal",
    name: "Divya Subramaniam",
    text: "Edvanta architected, built, and supported a Totara-driven ecosystem, enhancing the Gandhi Fellowship Experience to develop future leaders and social entrepreneurs.",
  },
];

// Duplicate the data for seamless scrolling
const duplicatedData = computed(() => {
  return [
    ...originalData,
    ...originalData.map((item) => ({
      ...item,
      id: item.id + originalData.length,
    })),
  ];
});

const scrollContainer = ref(null);
const scrollWidth = ref(0);

onMounted(() => {
  if (scrollContainer.value) {
    // Calculate the width of a single set of items
    const itemWidth = scrollContainer.value.scrollWidth / 2;
    scrollWidth.value = itemWidth;
  }
});
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-1 * var(--scroll-width)));
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}

/* Optional: Pause animation on hover */
.animate-scroll:hover {
  animation-play-state: paused;
}
</style>
