<template>
    <div class="py-[120px] bg-[#122137] text-white">
        <div class="max-w-[1440px] mx-auto space-y-[64px] px-6 2xl:px-0 md:px-11">
            <div class="space-y-6">
                <span class="text-[18px] font-extrabold">{{ heading }}</span>
                <h3 class="font-extrabold text-4xl md:text-[32px] md:leading-[36px]">{{ title
                    }}</h3>
                <p class="font-medium text-[18px] leading-[28px]">{{ subtitle }}</p>
            </div>
            <div class="grid grid-cols-12 gap-5">
                <!-- First Row -->
                <!-- First Item -->
                <div
                    class="row-span-4 col-span-12 sm:col-span-6 bg-white p-10 text-black rounded-[4px] flex flex-col gap-10 justify-between">
                    <div>
                        <h3 class="text-2xl font-extrabold">{{ data[0].title }}</h3>
                        <p>{{ data[0].description }}</p>
                    </div>
                    <div class="bg-blue-500 w-full h-[500px] rounded-[8px]">
                    </div>
                </div>

                <!-- Second Item Split1 -->
                <div
                    class="row-span-2 col-span-12 sm:col-span-6 bg-[#5C9DFF] p-10 rounded-[4px] flex flex-col xl:flex-row gap-4 justify-between">
                    <div>
                        <h3 class="text-2xl font-extrabold">{{ data[1].title }}</h3>
                        <p>{{ data[1].description }}</p>
                    </div>
                    <div
                        class="bg-green-500 w-full xl:max-w-[230px] h-[150px] xl:h-[275px] rounded-[8px] ml-0 xl:ml-auto">
                    </div>
                </div>

                <!-- Third Item Split2 -->
                <div
                    class="row-span-2 col-span-12 sm:col-span-6 bg-[#5A46E3] p-10 rounded-[4px] flex flex-col xl:flex-row gap-4 justify-between">
                    <div>
                        <h3 class="text-2xl font-extrabold">{{ data[2].title }}</h3>
                        <p>{{ data[2].description }}</p>
                    </div>
                    <div
                        class="bg-pink-500 w-full xl:max-w-[230px] h-[150px] xl:h-[275px] rounded-[8px] ml-0 xl:ml-auto">
                    </div>
                </div>

                <!-- Second Row -->
                <!-- First Item -->
                <div
                    class="bg-[#5C9DFF] p-10 rounded-[4px] flex flex-col justify-between gap-1 col-span-12 xl:col-span-4">
                    <h3 class="text-2xl font-extrabold">{{ data[3].title }}</h3>
                    <p>{{ data[3].description }}</p>
                </div>

                <!-- Second Item -->
                <div
                    class="bg-[#F27F22] p-10 rounded-[4px] flex flex-col justify-between gap-1 col-span-12 sm:col-span-6 xl:col-span-4">
                    <h3 class="text-2xl font-extrabold">{{ data[4].title }}</h3>
                    <p>{{ data[4].description }}</p>
                </div>

                <!-- Third Item -->
                <div
                    class="bg-[#00B6C0] p-10 rounded-[4px] flex flex-col justify-between gap-1 col-span-12 sm:col-span-6 xl:col-span-4">
                    <h3 class="text-2xl font-extrabold">{{ data[5].title }}</h3>
                    <p>{{ data[5].description }}</p>
                </div>

                <!-- Third Row -->
                <div
                    class="row-span-2 col-span-12 bg-[#5A46E3] p-10 rounded-[4px] flex flex-col xl:flex-row gap-4 justify-between">
                    <div class=" flex-1">
                        <h3 class="text-2xl font-extrabold">{{ data[6].title }}</h3>
                        <p>{{ data[6].description }}</p>
                    </div>
                    <div class="bg-pink-500 w-full min-h-[275px] rounded-[8px] flex-1"></div>
                </div>

                <!-- Fourth Row -->
                <!-- First Item -->
                <div
                    class="row-span-2 bg-white p-10 text-black rounded-[4px] flex flex-col col-span-12 sm:col-span-6 xl:flex-row gap-4 justify-between">
                    <div>
                        <h3 class="text-2xl font-extrabold">{{ data[7].title }}</h3>
                        <p>{{ data[7].description }}</p>
                    </div>
                    <div class="bg-blue-500 w-full xl:max-w-[230px] min-h-[275px] ml-0 xl:ml-auto rounded-[8px]"></div>
                </div>

                <!-- Second Item -->
                <div
                    class="row-span-2 bg-white p-10 text-black rounded-[4px] flex flex-col col-span-12 sm:col-span-6 xl:flex-row gap-4 justify-between">
                    <div>
                        <h3 class="text-2xl font-extrabold">{{ data[8].title }}</h3>
                        <p>{{ data[8].description }}</p>
                    </div>
                    <div class="bg-blue-500 w-full xl:max-w-[230px] min-h-[275px] ml-0 xl:ml-auto rounded-[8px]"></div>
                </div>

                <!-- Fifth Row -->
                <!-- First Item -->
                <div
                    class="bg-[#5C9DFF] p-10 rounded-[4px] flex flex-col justify-between gap-1 col-span-12 xl:col-span-4">
                    <h3 class="text-2xl font-extrabold">{{ data[9].title }}</h3>
                    <p>{{ data[9].description }}</p>
                </div>

                <!-- Second Item -->
                <div
                    class="bg-[#F27F22] p-10 rounded-[4px] flex flex-col justify-between gap-1 col-span-12 sm:col-span-6 xl:col-span-4">
                    <h3 class="text-2xl font-extrabold">{{ data[10].title }}</h3>
                    <p>{{ data[10].description }}</p>
                </div>

                <!-- Third Item -->
                <div
                    class="bg-[#00B6C0] p-10 rounded-[4px] flex flex-col justify-between gap-1 col-span-12 sm:col-span-6 xl:col-span-4">
                    <h3 class="text-2xl font-extrabold">{{ data[11].title }}</h3>
                    <p>{{ data[11].description }}</p>
                </div>
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
})
</script>