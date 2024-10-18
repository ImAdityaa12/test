<template>
    <div :class="`gap-16 grid grid-cols-1 xl:grid-cols-[${width}_1fr]`">
        <div class="flex flex-col gap-8 w-full">
            <span class="text-[24px] leading-[28px] font-extrabold">Key Capabilities:</span>
            <div v-for="(content, i) in contents" :key="i" class="flex items-start gap-4">
                <img :src="icon" alt="checkmark" class="mt-[1px]">
                <div class="flex flex-col text-base">
                    <span class="text-[18px] leading-[28px] font-bold">{{ content.title }}</span>
                    <p class="text-[18px] leading-[28px] font-medium">{{ content.text }}</p>
                </div>
            </div>
        </div>
        <div class="w-full h-full">
            <img :src="rightImg" alt="" class="w-full rounded-lg shadow-lg h-full object-cover">
        </div>
    </div>
</template>

<script setup>
defineProps({
    contents: {
        type: Array,
    },
    icon: String,
    rightImg: String,
    width: {
        type: String,
        default: "560px"
    }
})
</script>