<template>
    <div class="py-[120px] bg-[#F7F9FC]">
        <div class="wrapper space-y-[64px]">
            <div class="space-y-6">
                <span class="text-[18px] font-extrabold">{{ props.heading }}</span>
                <h3 class="font-extrabold text-4xl md:text-[32px] md:leading-[36px]">{{ props.title }}</h3>
                <p class="font-medium text-[18px] leading-[28px]">{{ props.subtitle }} </p>
            </div>
            <div class="relative grid grid-cols-1 md:grid-cols-2 gap-[100px]">
                <div class="w-full ">
                    <article v-for="item in props.data" :key="item.id"
                        :class="currentSection == item.id ? 'opacity-100' : 'opacity-100 sm:opacity-30'"
                        class="min-h-[500px] max-w-full md:max-w-[266px] lg:max-w-full space-y-3 mx-auto lg:mx-0 transition-opacity duration-300 opacity-100">
                        <div class="bg-gray-200 h-[300px] w-full rounded-[8px] overflow-hidden block md:hidden">
                            <img :src="item.banner" alt="" class="h-full w-full object-cover">
                        </div>
                        <img :src="item.icon" alt="" class="size-12 intersectionTrigger">
                        <h6 class="font-extrabold text-2xl" :id="item.id">{{ item.title }}</h6>
                        <p class="text-base font-medium">{{ item.description }}</p>
                    </article>
                </div>
                <div class="bg-cover h-[244px] lg:h-[500px] w-full sticky top-[138px] rounded-[8px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden hidden md:block transition-all duration-500"
                    :style="{ backgroundImage: `url('${activeImage}')` }">
                    <!-- <img :src="activeImage" alt="" class="h-full w-full object-cover"> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
const props = defineProps({
    data: Array,
    heading: {
        type: String,
    },
    title: {
        type: String,
    },
    subtitle: {
        type: String,
    },
})

const currentSection = ref('');
const activeImage = computed(() => {
    return props.data[Number(currentSection.value)].banner || props.data[0].banner
})

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                currentSection.value = entry.target.getAttribute('id')
            }
        })
    },
        {
            rootMargin: '0px 0px -50% 0px',
        }
    )

    document.querySelectorAll('article h6').forEach((section) => {
        observer.observe(section)
    })
})

</script>