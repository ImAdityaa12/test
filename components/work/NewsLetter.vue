<template>
  <div
    class="bg-[#F7F9FC] lg:min-h-[25rem] lg:h-[27rem] max-sm:min-h-full max-sm:max-h-full max-sm:py-10 py-[120px]"
  >
    <div
      class="max-w-[1440px] mx-auto 2xl:px-0 md:px-11 px-6 flex items-start justify-between h-full gap-[62px] max-1.75xl:flex-col max-1.75xl:justify-center"
    >
      <div
        class="flex flex-col gap-4 max-1.75xl:flex-grow-0 max-1.75xl:w-full max-w-[632px]"
      >
        <h1 class="text-[36px] leading-[44px] font-extrabold">
          Subscribe to the case studies
        </h1>
        <p class="text-[18px] leading-[28px] font-medium">
          Stay connected with Stripe and receive new blog posts in your inbox.
        </p>
        <div class="flex items-center gap-2 max-sm:flex-col max-sm:items-start">
          <input
            class="border-2 border-[#B3B3B3] w-full px-4 py-2 rounded-md focus:outline-none text-[#757575] flex-1"
            placeholder="john@email.com"
          />
          <button class="btn btn-primary">
            Subscribe
            <img
              src="/public/icons/arrow-right.svg"
              class="w-4 h-4 object-contain"
            />
          </button>
        </div>
        <p>
          Edvanta will handle your data pursuant to its
          <span class="text-[#002FDF] cursor-pointer"> privacy policy </span>
        </p>
      </div>
      <div
        class="flex items-start gap-4 max-1.75xl:w-full max-md:justify-between max-sm:flex-col max-sm:items-start"
      >
        <div
          class="h-[200px] max-w-[324px] min-h-[8rem] flex flex-col gap-4 max-md:max-w-full items-start"
        >
          <img src="/icons/work/apartment.svg" class="w-6 h-6" />
          <h1 class="text-[18px] leading-[24px] font-extrabold">
            Like this post? Join our team.
          </h1>
          <p class="text-base">
            Edvanta builds financial tools and economic infrastructure for the
            internet.
          </p>
          <button
            class="flex items-center font-semibold mt-auto gap-[10px] py-2"
          >
            View roles
            <img class="w-4 h-4" src="/public/icons/arrow-right-black.svg" />
          </button>
        </div>
        <div
          class="h-[200px] md:min-w-[324px] min-h-[8rem] flex flex-col gap-4 justify-between max-md:max-w-full"
        >
          <img src="/icons/work/live-help.svg" class="w-6 h-6" />
          <h1
            class="whitespace-nowrap text-[18px] leading-[24px] font-extrabold"
          >
            Have any feedback or questions?
          </h1>
          <p class="text-base">We’d love to hear from you.</p>
          <button
            class="flex items-center font-semibold mt-auto gap-[10px] py-2"
          >
            View roles
            <img class="w-4 h-4" src="/public/icons/arrow-right-black.svg" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
