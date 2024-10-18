<template>
  <nav
    class="w-full fixed top-0 h-[108px] flex items-center justify-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)] z-[99999] bg-white max-md:h-[80px] max-sm:h-[70px]">
    <div class="max-w-[1440px] flex justify-between mx-auto items-center w-full px-6 2xl:px-0 md:px-11">
      <NuxtLink to="/">
        <UiLogo />
      </NuxtLink>
      <div class="flex items-center gap-[40px] max-md:hidden max-lg:gap-7">
        <RouterLink v-for="(link, i) in links" @click="activeLinkIndex = i" :to="link.url" :key="i"
          class="group flex flex-col max-lg:text-xs">
          <div :to="link.url" class="cursor-pointer" :class="activeLinkIndex === i
            ? 'translate-y-[-4px] text-[#002FDF]'
            : 'group-hover:translate-y-[-4px] transition-all duration-250 ease-in-out group-hover:text-[#002FDF]'
            ">
            {{ link.name }}
          </div>
          <span class="w-full bg-[#002FDF]" :class="activeLinkIndex === i
            ? 'h-[4px]'
            : 'h-0 group-hover:h-[4px] origin-bottom-left transition-all duration-250 ease-in-out'
            "></span>
        </RouterLink>
      </div>
      <NuxtLink to="/contactus">
        <UiButton size="large" class="hidden md:flex">
          <span class="max-lg:text-xs">Get in touch</span>
          <UiIconsArrow height="24" width="24" />
        </UiButton>
      </NuxtLink>
      <UiMobileNavbar :links="links" />
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
const route = useRoute();

const links = [
  { name: "Home", url: "/" },
  { name: "Service", url: "/service" },
  { name: "About", url: "/about" },
  { name: "Our work", url: "/work" },
  { name: "Resources", url: "/blog" },
];
const activeLinkIndex = computed(() => {
  if (route.path === '/') return 0;
  for (let i = 1; i < links.length; i++) {
    if (route.path.startsWith(links[i].url)) return i;
  }
  return -1;
  // return links.findIndex((link) => link.url === route.path);
});
</script>
