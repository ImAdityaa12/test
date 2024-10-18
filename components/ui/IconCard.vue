<template>
    <div class="space-y-3">
        <slot />
        <h6 class="font-extrabold text-2xl" :class="isDark ? 'text-[#01E1ED]' : 'text-inherit'">{{ title }}</h6>
        <p class="text-base font-medium">{{ description }}</p>
    </div>
</template>

<script setup>
const { title, description, isDark } = defineProps({
    title: String,
    description: String,
    isDark: Boolean
}) 
</script>