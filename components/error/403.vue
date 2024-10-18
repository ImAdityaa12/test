<template>
    <div class="flex flex-col items-center text-center gap-4">
        <img src="/icons/errorIcons/403.svg" alt="404">
        <h1 class="text-[44px] md:text-[64px] leading-[55px] md:leading-[80px] font-extrabold">403 forbidden</h1>
        <div class="max-w-[622px]">
            <p>Sorry, access to this resource on the server is denied.</p>
            <p>Either check the URL, <NuxtLink to="/" class="text-[#002FDF]">go home</NuxtLink>, or feel free to
                <NuxtLink to="/" class="text-[#002FDF]">contact us
                </NuxtLink> if you can't find what you're looking for.
            </p>
        </div>
    </div>
</template>