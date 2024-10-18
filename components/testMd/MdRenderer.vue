<script setup>
import { ref, onMounted } from "vue";
import { marked } from "marked";

const props = defineProps({
  markdown: {
    type: String,
    required: true,
  },
});

const htmlContent = ref("");

onMounted(() => {
  // Configure marked to handle GitHub-flavored Markdown
  marked.setOptions({
    gfm: true,
    breaks: true,
    headerIds: true,
  });

  // Convert markdown to HTML
  htmlContent.value = marked(props.markdown);
});
</script>

<template>
  <div class="markdown-content" v-html="htmlContent"></div>
</template>

<style scoped>
.markdown-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.markdown-content :deep(h1) {
  font-size: 2em;
  margin-bottom: 0.5em;
  color: #2c3e50;
}

.markdown-content :deep(h2) {
  font-size: 1.5em;
  margin: 1em 0 0.5em;
  color: #34495e;
}

.markdown-content :deep(ul) {
  list-style-type: disc;
  padding-left: 2em;
  margin: 1em 0;
}

.markdown-content :deep(strong) {
  font-weight: bold;
}
</style>
