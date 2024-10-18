<template>
  <div class="hidden max-md:block">
    <button class="text-sm max-md:block hidden border border-[#002FDF] p-3 rounded-sm" @click="toggleMenu">
      <img :src="isOpen ? '/icons/close.png' : '/icons/menu.svg'" alt="" class="size-4 object-contain" />
    </button>
    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100" leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <div v-if="isOpen" class="md:hidden w-[100vw] bg-white absolute max-sm:top-[70px] left-0 max-md:top-[80px]">
        <div class="pt-2 pb-3 space-y-1">
          <RouterLink v-for="(link, i) in links" :key="link.url" :to="link.url"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            :class="{ '!text-[#002FDF]': activeLinkIndex == i }" @click="toggleMenu">
            {{ link.name }}
          </RouterLink>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute, RouterLink } from "vue-router";

const props = defineProps({
  links: {
    type: Array,
    required: true,
  },
});

const route = useRoute();
const isOpen = ref(false);

const activeLinkIndex = computed(() => {
  if (route.path === '/') return 0;
  for (let i = 1; i < props.links.length; i++) {
    if (route.path.startsWith(props.links[i].url)) return i;
  }
  return -1;
  // return links.findIndex((link) => link.url === route.path);
});

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>
