<template>
    <div class="py-[120px] bg-[#F7F9FC]">
        <div class="max-w-[1440px] space-y-[64px] px-6 2xl:px-0 md:px-11 mx-auto">
            <div class="space-y-6">
                <span class="text-[18px] font-extrabold">Section name</span>
                <h3 class="font-extrabold text-4xl text-[36px] leading-[44px] md:text-[32px] md:leading-[36px]">
                    We are proud partners with the World’s leading LMS providers, Canvas and Totara</h3>
                <p class="font-medium text-[18px] leading-[28px]">We have been using Moodle since its inception
                    (we’re also called Moodle Wizards).</p>
            </div>
            <div class="w-full flex items-stretch lg:items-center justify-between flex-col lg:flex-row gap-5">
                <!-- Cards    -->
                <div
                    class="p-7 flex flex-col gap-4 bg-white rounded-[4px] lg:max-w-[440px] transition-shadow duration-300 ease-out shadow-[2px_4px_15px_0px_rgba(0,0,0,0.05)] hover:shadow-[0px_6px_20px_0px_rgba(0,47,223,0.2)]">
                    <div class="w-full">
                        <img src="https://placehold.co/320x185" alt="" class="w-full">
                    </div>
                    <h3 class="text-[24px] leading-[28px] font-extrabold">Canvas LMS</h3>
                    <p class="text-[18px] leading-[28px]">A robust, user-friendly learning management system.</p>
                    <NuxtLink to='/service/lms/canvas'
                        class="border-[#002FDF] bg-white hover:bg-[#F1F3FD] transition-all border-[1px] p-2 rounded-[4px] self-end">
                        <img src="/icons/footer/arrow_out.svg" alt="">
                    </NuxtLink>
                </div>
                <div
                    class="p-7 flex flex-col gap-4 bg-white rounded-[4px] lg:max-w-[440px] transition-shadow duration-300 ease-out shadow-[2px_4px_15px_0px_rgba(0,0,0,0.05)] hover:shadow-[0px_6px_20px_0px_rgba(0,47,223,0.2)]">
                    <div class="w-full">
                        <img src="https://placehold.co/320x185" alt="" class="w-full">
                    </div>
                    <h3 class="text-[24px] leading-[28px] font-extrabold">Totara</h3>
                    <p class="text-[18px] leading-[28px]">Flexible and scalable solutions for diverse learning
                        needs.</p>
                    <NuxtLink to='/service/lms/totara'
                        class="border-[#002FDF] bg-white hover:bg-[#F1F3FD] transition-all border-[1px] p-2 rounded-[4px] self-end">
                        <img src="/icons/footer/arrow_out.svg" alt="">
                    </NuxtLink>
                </div>
                <div
                    class="p-7 flex flex-col gap-4 bg-white rounded-[4px] lg:max-w-[440px] transition-shadow duration-300 ease-out shadow-[2px_4px_15px_0px_rgba(0,0,0,0.05)] hover:shadow-[0px_6px_20px_0px_rgba(0,47,223,0.2)]">
                    <div class="w-full">
                        <img src="https://placehold.co/320x185" alt="" class="w-full">
                    </div>
                    <h3 class="text-[24px] leading-[28px] font-extrabold">Moodle</h3>
                    <p class="text-[18px] leading-[28px]">Open-source LMS offering customizable learning
                        experiences.</p>
                    <NuxtLink to='/service/lms/moodle'
                        class="border-[#002FDF] bg-white hover:bg-[#F1F3FD] transition-all border-[1px] p-2 rounded-[4px] self-end">
                        <img src="/icons/footer/arrow_out.svg" alt="">
                    </NuxtLink>
                </div>
            </div>
            <h3 class="text-[24px] leading-[28px] font-extrabold text-center">You choose your base technology, and
                we build on
                top of it.</h3>
        </div>
    </div>
</template>