<template>
  <div
    class="relative w-full max-md:h-fit mb-20 max-sm:min-h-[calc(100vh-70px)] min-h-[calc(100vh-108px)]"
  >
    <div class="absolute h-[calc(100vh-108px)] w-full">
      <img
        src="/icons/work/hero-background.svg"
        class="absolute -z-10 w-full h-full"
      />
    </div>
    <div class="max-w-[1440px] mx-auto px-6 2xl:px-0 md:px-11">
      <div
        class="min-h-[calc(100vh-108px)] w-full flex items-center justify-center py-10"
      >
      <WorkBlogCard
          v-if="posts.length > 0"
          :author="posts[0].author"
          :author-picture="posts[0].authorPicture"
          :category="posts[0].category"
          :desc="posts[0].description"
          :icon="posts[0].icon"
          :title="posts[0].title"
          :title-image="posts[0].titleImage"
        />
      </div>
      <div :dangerouslySetInnerHTML="posts[0].body"  v-if="posts.length > 0"></div>
    </div>
    <!-- <div class="flex items-center justify-center flex-col prose prose-lg">
      <ContentRenderer :value="posts[0]">
        <h1>{{ posts[0].title }}</h1>
        <ContentRendererMarkdown :value="posts[0].body" />
      </ContentRenderer>
    </div> -->
    <div class="bg-[#F7F9FC] py-[7rem] h-full">
      <div class="max-w-[1440px] mx-auto px-6 2xl:px-0 md:px-11">
        <WorkNavbar />
        <div class="grid grid-cols-2 gap-10 max-sm:grid-cols-1">
          <div v-for="post in posts" :key="post.title">
            <WorkBlogCardSmall
              :author="post.author"
              :author-picture="post.authorPicture"
              :category="post.category"
              :desc="post.description"
              :icon="post.icon"
              :title="post.title"
              :title-image="post.titleImage"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// const { data: posts } = await useAsyncData("blog", () =>
//   queryContent("blog").find()
// );



import { ref, onMounted } from 'vue'; // Import onMounted hook

const posts = ref([]);

// Use fetch instead of useFetch for client-side request
const fetchMarkdown = async () => {
  try {
    const response = await fetch('/api/notion'); // Make sure the route is correct
    const data = await response.json();

    if (response.ok) {
      posts.value = data.blogPages; // Update the posts if the request is successful
    } else {
      console.error('Error fetching markdown:', data);
    }
  } catch (error) {
    console.error('Error fetching markdown:', error);
  }
};

// Use onMounted to call fetchMarkdown only once after the component is mounted
onMounted(() => {
  fetchMarkdown();
});

</script>

<style scoped>
:deep(.prose h1) {
  @apply text-3xl font-bold mb-4;
}

:deep(.prose h2) {
  @apply text-2xl font-bold mt-8 mb-4;
}
:deep(.prose ul) {
  @apply list-disc list-inside mb-4;
}
:deep(.prose h2) {
  @apply text-2xl font-bold mt-8 mb-4;
}
:deep(.prose h3) {
  @apply text-xl font-semibold mt-6 mb-3;
}

:deep(.prose p) {
  @apply mb-4 leading-relaxed;
}

:deep(.prose ul) {
  @apply list-disc list-inside mb-4;
}

:deep(.prose ol) {
  @apply list-decimal list-inside mb-4;
}

:deep(.prose code) {
  @apply bg-gray-100 px-1 py-0.5 rounded;
}

:deep(.prose pre) {
  @apply bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-4;
}

:deep(.prose blockquote) {
  @apply border-l-4 border-gray-300 pl-4 italic;
}

:deep(.prose img) {
  @apply rounded-lg shadow-lg;
}

.navigation {
  @apply mt-12 pt-6 border-t border-gray-200;
}
</style>
