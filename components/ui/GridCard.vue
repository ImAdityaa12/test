<template>
    <div class="py-[120px]" :class="[bg, text]">
        <div class="max-w-[1440px] mx-auto space-y-[64px] px-6 2xl:px-0 md:px-11">
            <div class="space-y-6">
                <span class="text-[18px] font-extrabold">{{ heading }}</span>
                <h3 class="font-extrabold text-4xl text-[36px] leading-[44px] md:text-[32px] md:leading-[36px]">{{ title
                    }}</h3>
                <p class="font-medium text-[18px] leading-[28px]">{{ subtitle }}</p>
            </div>
            <div
                :class="['grid grid-cols-1 sm:grid-cols-2', columns ? `md:grid-cols-${columns}` : 'md:grid-cols-3', 'gap-x-12 gap-y-16']">
                <UiIconCard v-for="(section, i) in data" :key="i" :title="section.title"
                    :description="section.description" :isDark="isDark">
                    <img :src="section.icon" alt="" class="size-12">
                </UiIconCard>
            </div>
        </div>
    </div>
</template>

<script setup>
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
    bg: {
        type: String,
        default: 'bg-[#F7F9FC]'
    },
    text: {
        type: String,
        default: 'text-inherit'
    },
    isDark: {
        type: Boolean,
        default: false
    },
    columns: {
        type: [Number, String],
        default: null
    }
});
</script>