<template>
    <div>
      <h1>Blog</h1>
      <div v-for="post in blogPosts" :key="post.title" class="blog-post">
        <article v-html="post.markdown"></article>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  
  const blogPosts = ref([]);
  
  onMounted(async () => {
    try {
      const { data } = await useFetch('/api/notion'); 
      console.log(data)
      // Fetch from the server-side API
      blogPosts.value = data;
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  });
  </script>
  
  <style scoped>
  .blog-post {
    margin-bottom: 2rem;
  }
  </style>
  