<template>
    <div class="space-y-6 my-[120px] max-w-[1440px] px-6 2xl:px-0 md:px-11 mx-auto">
        <span class="text-[18px] font-extrabold">{{ heading }}</span>
        <h3 class="font-extrabold text-4xl text-[36px] leading-[44px] md:text-[32px] md:leading-[36px]">
            {{ title }}</h3>
        <p v-for="(para, i) in content" :key="i" class="font-medium text-[18px] leading-[28px]">{{ para }}</p>
    </div>
</template>

<script setup>
defineProps(['heading', 'title', 'content'])
</script>