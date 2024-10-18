<template>
  <div>
    <div v-if="page">
      <h1>{{ page.title }}</h1>
      <!-- <ContentRenderer :value="page" /> -->
    </div>
    <div>{{ page.desc }}</div>
    <PostList />
  </div>
</template>

<script setup>
import PostList from "~/components/PostList.vue";
const route = useRoute();
const slug = route.params.slug || "home"; // Default to 'home' if no slug
const { data: page } = await useAsyncData(`content-${slug}`, () =>
  queryContent(slug.toString()).findOne()
);

if (!page.value) {
  throw createError({ statusCode: 404, message: "Page not found" });
}
</script>
