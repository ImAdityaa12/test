<template>
    <div class="space-y-6 my-[120px] max-w-[1440px] px-6 2xl:px-0 md:px-11 mx-auto mt-[337px]">
        <span class="text-[18px] font-extrabold">{{ title }}</span>
        <h3 class="font-extrabold text-4xl text-[36px] leading-[44px] md:text-[32px] md:leading-[36px]">
            {{ heading }}</h3>
        <p v-for="(para, index) in content" :key="index" class="font-medium text-[18px] leading-[28px]">{{ para }}</p>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: "Title",
    },
    heading: {
        type: String,
        default: "Heading",
    },
    content: {
        type: Array,
        default: () => ["content"],
    },
})
</script>