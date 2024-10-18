<template>
    <div class="py-[120px] bg-[#F7F9FC]">
        <div class="max-w-[1440px] mx-auto space-y-[64px] px-6 2xl:px-0 md:px-11">
            <div class="space-y-6">
                <span class="text-[18px] font-extrabold">{{ heading }}</span>
                <h3 class="font-extrabold text-4xl md:text-[32px] md:leading-[36px]">{{ title
                    }}</h3>
                <p class="font-medium text-[18px] leading-[28px]">{{ subtitle }}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-5 grid-rows-[320px_320px]">
                <div v-for="(item, i) in data" :key="i"
                    class="p-10 flex flex-col justify-between rounded-[4px] min-h-[320px] shadow-[2px_4px_15px_0px_rgba(0,0,0,0.05)]"
                    :class="[colorData[i].bg, colorData[i].text]">
                    <h3 class="text-[24px] leading-[28px] font-extrabold">{{ item.title }}</h3>
                    <p class="max-w-[427px]">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const colorData = [
    {
        bg: "bg-[#5C9DFF]",
        text: "text-white"
    },
    {
        bg: "bg-[#F27F22]",
        text: "text-white"
    },
    {
        bg: "bg-[#00B6C0]",
        text: "text-white"
    },
    {
        bg: "bg-white",
        text: "text-black"
    },
    {
        bg: "bg-[#5A46E3]",
        text: "text-white"
    },
    {
        bg: "bg-[#00B6C0]",
        text: "text-white"
    },
    {
        bg: "bg-[#5A46E3]",
        text: "text-white"
    },
    {
        bg: "bg-white",
        text: "text-black"
    },
    {
        bg: "bg-[#5C9DFF]",
        text: "text-white"
    },
    {
        bg: "bg-[#5C9DFF]",
        text: "text-white"
    },
]

defineProps({
    data: {
        type: Array,
        default: []
    },
    heading: {
        type: String,
        default: 'Heading'
    },
    title: {
        type: String,
        default: 'Title'
    },
    subtitle: {
        type: String,
        default: 'Subtitle'
    },
});
</script>