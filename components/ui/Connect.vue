<template>
    <div class="py-[120px] bg-[#5A46E3] text-white">
        <div class="max-w-[1440px] mx-auto space-y-[64px] px-6 2xl:px-0 md:px-11">
            <div class="space-y-6">
                <span class="text-[18px] font-extrabold">{{ heading }}</span>
                <h3 class="font-extrabold text-4xl text-[36px] leading-[44px] md:text-[32px] md:leading-[36px]">
                    {{ title }}</h3>
                <p class="font-medium text-[18px] leading-[28px]">{{ subtitle }}</p>
            </div>
            <div class="flex sm:flex-row flex-col gap-10">
                <!-- Cards render here -->
                <div v-for="card in cards" :key="card.id"
                    class="cursor-pointer gap-4 bg-black/40 p-10 rounded-[4px] w-full md:w-fit lg:max-w-[404px] flex flex-col items-start hover:bg-black/50 transition-all duration-300 ease-out">
                    <h3 class="text-[24px] leading-[28px] font-extrabold">{{ card.title }}</h3>
                    <p class="text-pretty">{{ card.content }}</p>
                    <UiButton variant="secondary" size="medium">
                        <span class="text-[#002FDF]">{{ card.button }}</span>
                        <img src="/icons/lms/right-arrow-blue.svg" alt="">
                    </UiButton>
                </div>
                <!-- <div class="space-y-4 bg-black/40 p-10 rounded-[4px] w-full md:w-fit lg:max-w-[404px]">
                    <h3 class="text-[24px] leading-[28px] font-extrabold">Join us</h3>
                    <p class="text-pretty">We know you are not typical and neither are we. Join our family.</p>
                    <button
                        class="px-6 py-3 flex gap-[10px] items-center bg-white border-[1px] rounded-[4px] border-[#002FDF]">
                        <span class="text-[#002FDF]">Job opening</span>
                        <img src="/icons/lms/right-arrow-blue.svg" alt="">
                    </button>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    heading: {
        type: String,
        default: 'Connect with us'
    },
    title: {
        type: String,
        default: 'Looking to get things done?'
    },
    subtitle: {
        type: String,
        default: 'Lets create the best learning experience for your business together'
    },
    cards: {
        type: Array,
        default: [{
            key: "1",
            title: "Title",
            content: "Content",
            button: "Button"
        }]
    }
});
</script>