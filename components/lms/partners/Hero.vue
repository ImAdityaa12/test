<template>
    <div
        class="grid grid-cols-1 px-6 2xl:px-0 md:px-11 mx-auto md:grid-cols-2 min-h-screen items-center gap-[25px] max-w-[1440px] md:-mt-[54px]">
        <div class="flex gap-11 flex-col max-w-[719px]">
            <h3 class="text-[18px] leading-[24px] font-extrabold" :style="`color:${theme}`">{{ heading }}</h3>
            <h1
                class="font-jakartaSans font-jakarta-bolder text-[#333333] text-[44px] md:text-[64px] leading-snug  md:leading-[80.64px]">
                {{ title }}
            </h1>
            <p>
                {{ subtitle }}
            </p>
            <div class="flex items-center gap-5 flex-wrap">
                <UiButton variant="primary" size="medium" state="default">{{ cta[0].text }}</UiButton>
                <button class="btn btn-text  ">{{ cta[1].text }}
                    <UiIconsArrow height="20" width="20" />
                </button>
            </div>
        </div>
        <div class="w-full relative flex">
            <img :src="rightImg" alt="heroImage" class="rounded-lg shadow-md max-md:mx-auto ml-auto">
        </div>
        <div class="bg-[#F2F2F2] absolute -z-[2] -top-[300px] left-0 right-0 sm:bottom-[100px] bottom-0 -skew-y-[7deg]">
            <div class="absolute bottom-0 right-0 w-1/2 -z-[1] h-[244px]" :style="`background-color:${theme}`">
            </div>
        </div>
    </div>
</template>

<script setup>
const { heading, title, subtitle, rightImg, cta, theme } = defineProps({
    heading: {
        type: String,
        default: "Heading"
    },
    title: {
        type: String,
        default: "Title"
    },
    subtitle: {
        type: String,
        default: "Title"
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
    theme: {
        type: String,
        default: "#333"
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
    theme:"#F27F22"
} -->