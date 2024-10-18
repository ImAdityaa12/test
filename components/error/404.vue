<template>
    <div class="flex flex-col items-center text-center gap-4">
        <img src="/icons/errorIcons/404.svg" alt="404">
        <h1 class="text-[44px] md:text-[64px] leading-[55px] md:leading-[80px] font-extrabold">Page not found!</h1>
        <div class="max-w-[622px]">
            <p>Well this is awkward the page you are trying to view does not exist.</p>
            <p> You can <NuxtLink to="/" class="text-[#002FDF]">go home</NuxtLink>, or feel free to <NuxtLink to="/"
                    class="text-[#002FDF]">contact us</NuxtLink> if you
                can't find what you're
                looking for.</p>
        </div>
    </div>
</template>