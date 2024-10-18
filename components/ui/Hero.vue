<template>
    <div
        class="grid grid-cols-1 px-6 2xl:px-0 md:px-11 mx-auto md:grid-cols-2 min-h-screen items-center gap-[25px] max-w-[1440px] md:-mt-[54px]">
        <div class="absolute h-[244px] w-full left-0 -skew-y-[10deg] top-[65vh] -z-[1]">
            <!-- <img :src="barImg" alt="" class="w-full h-full"> -->
            <UiAnimatedBar :config="config" />
            
        </div>
        <div class="flex gap-11 flex-col max-w-[719px]">
            <h1
                class="font-jakartaSans font-jakarta-bolder text-[#333333] text-[44px] md:text-[64px] leading-snug  md:leading-[80.64px]">
                {{ title }}
            </h1>
            <div>
                <p v-for="(subtitle, index) in subtitles" :key="index">
                    {{ subtitle }}
                </p>
            </div>
            <div class="flex items-center gap-5 flex-wrap">
                <UiButton variant="primary" size="medium" state="default">{{ cta[0].text }}</UiButton>
                <button class="btn btn-text hover:text-[#002FDF] transition-all duration-300">{{ cta[1].text }}
                    <UiIconsArrow height="20" width="20" />
                </button>
            </div>
        </div>
        <img :src="rightImg" alt="heroImage" class="rounded-lg shadow-md max-md:mx-auto ml-auto">
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: "Title"
    },
    subtitles: {
        type: Array,
        default: () => ["subtitle"]
    },
    rightImg: {
        type: String,
        default: "https://placehold.co/648x371"
    },
    cta: {
        type: Array,
        default: [
            {
                text: "Explore Our LMS",
                href: "/"
            },
            {
                text: "Schedule a consultation",
                href: "/",
            }
        ]
    },
    barImg: {
        type: String,
        default: "/icons/hero-bar-bg.png"
    },
    config: {
    type: Object,
    required: false,
  },
})
</script>

<!-- # Hero section data Template

const heroData = {
    title: "Transform learning for teams and students alike",
    subtitle: "Whether you're training your workforce or educating students, our Learning Management Systems provide the tools you need to inspire, engage, and drive growth.",
    rightImg: "https://placehold.co/648x371",
    cta: [
        {
            text: "Explore Our LMS",
            href: "/"
        },
        {
            text: "Schedule a consultation",
            href: "/",
        }
    ],
    barImg:"/icons/hero-bar-bg.png"
} -->