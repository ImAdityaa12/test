<template>
  <div>
    <UiButton variant="secondary" state="default" size="large">
      <span> Button Label</span>
      <UiIconsArrow height="24" width="24" />
    </UiButton>
    <h1>Blog Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post._path">
        <h2>{{ post.title }}</h2>
        <p>{{ post.desc }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData("blog", () =>
  queryContent("blog").find()
);
</script>
