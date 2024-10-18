<template>
    <div class="flex flex-col items-center text-center gap-4 px-6 md:px-0">
        <img src="/icons/errorIcons/500.svg" alt="404">
        <h1 class="text-[44px] md:text-[64px] leading-[55px] md:leading-[80px] font-extrabold">Unexpected error</h1>
        <div>
            <p class="max-w-[622px]">An error occurred and your request couldn’t be completed.</p>
            <p>Either check the URL, <NuxtLink to="/" class="text-[#002FDF] text-base">go home</NuxtLink>, or feel free
                to <NuxtLink to="/" class="text-[#002FDF] text-base">contact us</NuxtLink> if you can't find what you're
                looking for.</p>
        </div>
    </div>
</template>