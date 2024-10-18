<script setup lang="ts"></script>

<template>
  <div class="font-fustat">
    <UiNavbar />
    <main class="mt-[108px] max-md:mt-[80px] max-sm:mt-[70px]">
      <slot />
    </main>
    <WorkNewsLetter />
  </div>
</template>
