<template>
    <div class="bg-white flex flex-col-reverse md:flex-row p-7 shadow-[2px_4px_15px_0px_rgba(0,0,0,0.05)] ">
        <div class="md:w-1/2  flex flex-col ">
            <div class="font-fustat font-fustat-bolder text-2xl mb-4">{{ cardTitle }}</div>
            <div class="mb-4 md:mb-0">
                <div class="font-fustat font-fustat-bolder text-lg">{{ textTitle }}</div>
                <div class="font-fustat font-fustat-medium text-base">{{ text }}</div>
            </div>
            <div class="flex flex-col md:flex-row items-start  mt-auto ">
                <UiButton size="medium" class=" md:mr-6 md:mb-0 mb-5">
                    Know more
                </UiButton>
                <button class="btn btn-text  ">Contact us
                    <UiIconsArrow height="20" width="20" />
                </button>
            </div>
        </div>
        <div class="md:w-1/2 md:ml-4 mb-4 md:mb-0 ">
            <img :src="img" alt="" class="rounded-lg shadow-md  md:w-auto md:h-full object-cover">
        </div>
    </div>
</template>

<script setup>
const { cardTitle, textTitle, text, img } = defineProps({
    cardTitle: { type: String, default: "Title" },
    textTitle: { type: String, default: "TextTitle" },
    text: { type: String, default: "text content" },
    img: { type: String, default: "https://placehold.co/660x300" },
}) 
</script>
