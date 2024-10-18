<template>
    <footer
        class="grid grid-cols-1 justify-items-start md:grid-cols-2 lg:flex md:justify-items-center justify-between gap-x-5 gap-y-12 max-w-[1440px] mx-auto py-10 md:py-[120px] px-6 2xl:px-0 md:px-11">
        <!-- First Column -->
        <div class="flex flex-col gap-4 ">
            <UiLogo />
            <div class="flex gap-4 items-center font-bold text-[20px] leading-[32px] max-w-[313px] mt-2 sm:mt-8">
                <img src="/icons/footer/office.svg" alt="office">
                <span class="">2nd Floor, The Iconic Correnthum Tower C, Wing C,
                    Ofis Square</span>
            </div>
            <div class="flex gap-4 items-center font-bold text-[20px] leading-[32px] max-w-[313px]">
                <img src="/icons/footer/map.svg" alt="office">
                <span class="">41, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201301</span>
            </div>
            <div class="flex gap-4 items-center font-bold text-[20px] leading-[32px] max-w-[313px]">
                <img src="/icons/footer/phone.svg" alt="office">
                <span class="">+91 88276733022</span>
            </div>
            <div class="flex gap-4 items-center font-bold text-[20px] leading-[32px] max-w-[313px]">
                <img src="/icons/footer/mail.svg" alt="office">
                <span class="">sales@edvanta.com</span>
            </div>
        </div>

        <!-- Second Column -->
        <div class="flex flex-col gap-4 w-[210px]">
            <h3 class="text-[24px] leading-[28px] font-extrabold">Company</h3>
            <!-- Links -->
            <NuxtLink to="/about" class="mt-2 sm:mt-8 flex gap-[10px] hover:text-[#002FDF]">
                <span class="text-[18px] leading-[28px] font-medium">About us</span>
                <img src="/icons/footer/right_arrow.svg" alt="office" class="size-6">
            </NuxtLink>
            <NuxtLink to="/contactus" class="flex gap-[10px] hover:text-[#002FDF]">
                <span class="text-[18px] leading-[28px] font-medium">Get in touch</span>
                <img src="/icons/footer/right_arrow.svg" alt="office" class="size-6">
            </NuxtLink>
            <NuxtLink to="/careers" class="flex gap-[10px] hover:text-[#002FDF]">
                <span class="text-[18px] leading-[28px] font-medium">Careers with Edvanta</span>
                <img src="/icons/footer/right_arrow.svg" alt="office" class="size-6">
            </NuxtLink>
            <NuxtLink to="/privacy-policy" class="flex gap-[10px] hover:text-[#002FDF]">
                <span class="text-[18px] leading-[28px] font-medium">Privacy policy</span>
                <img src="/icons/footer/right_arrow.svg" alt="office" class="size-6">
            </NuxtLink>
        </div>

        <!-- Third Column -->
        <div class="flex flex-col gap-4 ">
            <h3 class="text-[24px] leading-[28px] font-extrabold">Services</h3>
            <!-- Links -->
            <NuxtLink to="/service/lms" class="mt-2 sm:mt-8 flex gap-[10px] hover:text-[#002FDF]">
                <span class="text-[18px] leading-[28px] font-medium">Learning platform</span>
                <img src="/icons/footer/right_arrow.svg" alt="office" class="size-6">
            </NuxtLink>
            <NuxtLink to="/service/mls" class="flex gap-[10px] hover:text-[#002FDF]">
                <span class="text-[18px] leading-[28px] font-medium">Managed learning service</span>
                <img src="/icons/footer/right_arrow.svg" alt="office" class="size-6">
            </NuxtLink>
            <NuxtLink to="/service/learning-content" class="flex gap-[10px] hover:text-[#002FDF]">
                <span class="text-[18px] leading-[28px] font-medium">Learning content</span>
                <img src="/icons/footer/right_arrow.svg" alt="office" class="size-6">
            </NuxtLink>
            <NuxtLink to="/" class="flex gap-[10px] hover:text-[#002FDF]">
                <span class="text-[18px] leading-[28px] font-medium">Custom learning eco system</span>
                <img src="/icons/footer/right_arrow.svg" alt="office" class="size-6">
            </NuxtLink>
        </div>

        <!-- Fourth Column -->
        <div class="flex flex-col gap-4 w-[210px]">
            <h3 class="text-[24px] leading-[28px] font-extrabold">Resources</h3>
            <!-- Links -->
            <NuxtLink to="/blog" class="mt-2 sm:mt-8 flex gap-[10px] hover:text-[#002FDF]">
                <span class="text-[18px] leading-[28px] font-medium">Edvanta blogs</span>
                <img src="/icons/footer/right_arrow.svg" alt="office" class="size-6">
            </NuxtLink>
        </div>
    </footer>
</template>
