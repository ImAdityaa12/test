<template>
  <div
    class="w-full max-md:h-fit mb-20 max-sm:min-h-[calc(100vh-70px)] min-h-[calc(100vh-108px)] bg-[#F7F9FC]"
  >
    <div
      class="max-w-[1440px] mx-auto px-6 2xl:px-0 md:px-11 min-h-[calc(100vh-108px)] max-3xl:max-h-full py-10 flex items-center gap-[28px] max-md:flex-col"
    >
      <div
        class="w-1/2 p-6 rounded-lg shadow-[2px_4px_15px_0px_rgba(0,0,0,0.25)] flex flex-col gap-2 h-[45rem] max-md:w-full max-sm:h-full"
      >
        <div class="h-[50%]">
          <img
            src="https://placehold.co/634x423"
            class="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div class="h-[50%] flex flex-col gap-2 justify-around">
          <p class="text-[#5A46E3] text-base font-bold">Category name</p>
          <h1 class="1.75xl:text-3xl font-extrabold">
            Game-Based Learning: Revolutionizing Adult Education in the
            Workplace
          </h1>
          <div class="flex items-center gap-2">
            <div class="h-8 w-8 rounded-full bg-gray-100"></div>
            <p class="text-xs">Edvanta</p>
          </div>
          <p class="text-lg max-sm:line-clamp-4 line-clamp-2">
            In the ever-evolving landscape of Learning and Development (L&D), a
            surprising yet powerful tool is
          </p>
          <button class="flex items-center gap-2 text-base">
            Read More
            <img src="/public/icons/arrow-right-black.svg" />
          </button>
        </div>
      </div>
      <div
        class="w-1/2 flex flex-col justify-between gap-2 h-[45rem] max-md:w-full rounded-lg max-sm:h-full"
      >
        <BlogHeroBlogCard />
        <BlogHeroBlogCard />
        <BlogHeroBlogCard />
      </div>
    </div>
    <div class="bg-white pt-10 w-full">
      <div class="h-fit max-w-[1440px] mx-auto px-6 2xl:px-0 md:px-11">
        <h1 class="text-2xl font-bold mb-5">The latest blogs</h1>
        <div
          class="grid grid-cols-3 gap-10 max-md:grid-cols-1 max-lg:grid-cols-2"
        >
          <BlogGridBlogCard />
          <BlogGridBlogCard />
          <BlogGridBlogCard />
          <BlogGridBlogCard />
          <BlogGridBlogCard />
          <BlogGridBlogCard />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "worklayout",
});
</script>
