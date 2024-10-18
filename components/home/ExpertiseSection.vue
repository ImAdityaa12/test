<template>
  <div class="max-w-[1440px] mx-auto mb-20 2xl:px-0 md:px-11 px-6">
    <p>Our expertise</p>
    <h1 class="text-4xl font-bold max-w-[90%] mt-4">
      For 20 years, we've created flexible learning ecosystems for diverse
      organizations.
    </h1>
    <p class="mt-2">
      We have been building flexible learning ecosystems over the last 20 years
      for several organisations, institutions & industries.
    </p>
    <div class="grid grid-cols-2 w-full gap-8 mt-10 max-sm:grid-cols-1">
      <div v-for="post in posts" :key="post._path" class="w-full">
        <UiCard :title="post.title" :description="post.desc" :icon="post.icon" :img-src="post.src" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData("posts", () =>
  queryContent("posts").find()
);
</script>
