<template>
    <div class="wrapper py-[120px]">
        <div class="space-y-6 mb-[64px]">
            <span class="text-[18px] font-extrabold">{{ heading }}</span>
            <h3 class="font-extrabold text-4xl text-[36px] leading-[44px] md:text-[32px] md:leading-[36px]">
                {{ title }}</h3>
            <p v-for="(para, i) in content" :key="i" class="font-medium text-[18px] leading-[28px]">{{ para }}</p>
        </div>
        <LmsList :contents="keyData.contents" :rightImg="keyData.rightImg" :icon="icon" :width="width" />
    </div>
</template>

<script setup>
defineProps({ heading: { type: String }, title: { type: String }, content: { type: Array }, keyData: { type: Object }, icon: { type: String }, width: { type: String, default: "560px" } })
// defineProps(['heading', 'title', 'content', 'keyData', 'icon', 'width'])
</script>