<template>
    <div class="flex gap-8 xl:flex-row flex-col">
        <div class="flex flex-col gap-8 max-w-[354px] w-full">
            <span class="text-[24px] leading-[28px] font-extrabold">Features:</span>
            <div v-for="(content, i) in contents" :key="i" class="flex items-start gap-4">
                <img src="/icons/lms/verified.svg" alt="checkmark" class="mt-[1px]">
                <div class="flex flex-col text-base">
                    <span class="text-[18px] leading-[28px] font-bold">{{ content.title }}</span>
                    <p class="text-[18px] leading-[28px] font-medium">{{ content.text }}</p>
                </div>
            </div>
        </div>
        <div class="w-full h-full">
            <img :src="rightImg" alt="" class="w-full rounded-lg shadow-lg h-full">
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    subtitle: String,
    paragraph: String,
    contents: {
        type: Array,
    },
    rightImg: String
})
</script>