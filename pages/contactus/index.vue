<template>
  <div class="overflow-hidden relative z-[1] font-fustat mt-[108px] md:mt-[228px] lg:-mt-[54px]">
    <div
      class="flex flex-col relative justify-between items-center lg:flex-row  px-6 2xl:px-0 mx-auto lg:max-w-[1440px] gap-y-11 lg:min-h-screen">
      <div class="flex flex-col max-w-full justify-center gap-y-11 xl:max-w-[600px] flex-1">
        <h1
          class="font-jakartaSans font-jakarta-bolder text-[#333333] text-[44px] md:text-[64px] leading-snug md:leading-[80.64px]">
          Let's connect & colaborate
        </h1>
        <p class="text-[18px] leading-[28px]">
          Whether you have a question about our services, need a demo, or want
          to discuss a project, our team is ready to assist you. Reach out to us
          and let’s create impactful learning solutions together.
        </p>
      </div>
      <div
        class="border shadow-lg bg-white rounded-lg p-4 md:p-6 md:max-h-[397px] max-h-[567px] lg:max-w-[652px] flex-1 w-full">
        <form action="" class="flex flex-col gap-y-3">
          <div class="flex flex-col md:flex-row gap-y-3 md:justify-between md:gap-x-4">
            <div class="flex flex-col w-full">
              <label class="text-[#333333]" for="name">Name<span class="text-[#D00000]">*</span> </label>
              <input class="border border-background-subtle-3 rounded-md h-10 px-4 py-2" type="text" name="name"
                placeholder="Enter your full name" />
            </div>
            <div class="flex flex-col w-full">
              <label class="text-[#333333]" for="name">Organisation <span class="text-[#D00000]">*</span> </label>
              <input class="border border-background-subtle-3 rounded-md h-10 px-4 py-2" type="text" name="organisation"
                placeholder="Enter your organisation" />
            </div>
          </div>
          <div class="flex flex-col md:flex-row gap-y-3 md:gap-x-4">
            <div class="flex flex-col w-full">
              <label class="text-[#333333]" for="email">Email<span class="text-[#D00000]">*</span> </label>
              <input class="border border-background-subtle-3 rounded-md h-10 px-4 py-2" type="email" name="email"
                placeholder="Enter your email address" />
            </div>
            <div class="flex flex-col w-full">
              <label class="text-[#333333]" for="name">Mobile<span class="text-[#D00000]">*</span> </label>
              <input class="border border-background-subtle-3 rounded-md h-10 px-4 py-2" type="text" name="Mobile"
                placeholder="Enter your mobile number" />
            </div>
          </div>
          <div class="flex flex-col gap-y-3">
            <label class="text-[#333333]" for="textarea">Your Message<span class="text-[#D00000]">*</span> </label>
            <textarea class="border border-background-subtle-3 rounded-md h-24 px-4 py-2" name="" id=""
              placeholder="How can we assist you?"></textarea>
          </div>
          <UiButton class="max-w-[170px]">Connect Now</UiButton>
        </form>
      </div>
    </div>

    <div class="absolute h-[244px] w-[2126px] left-0 -skew-y-[10deg] top-[65vh] -z-[1]">
      <UiAnimatedBar :config="configObject"/>
    </div>

    <div
      class="flex flex-col gap-y-16 max-w-[1440px] px-6 2xl:px-0 mx-auto py-[120px] mt-[30px] xs:mt-[120px] sm:mt-[260px] md:mt-[330px] lg:mt-[150px]">
      <div class="flex flex-col gap-y-11 lg:flex-row md:justify-between lg:gap-y-0">
        <div class="flex gap-x-4">
          <img src="../../public/icons/call.svg" alt="Call" />
          <div>
            <p class="flex flex-col font-bold text-[18px] leading-[24px]">
              Our phone
              <a class=" text-[24px] leading-[36px] font-bold" href="tel:+91-999908927">+91-999908927</a>
            </p>
          </div>
        </div>
        <div class="flex gap-x-4">
          <img src="../../public/icons/at.svg" alt="Email" />
          <div>
            <p class="flex flex-col font-bold text-[18px] leading-[24px]">
              Our email
              <a class=" text-[24px] leading-[36px] font-bold" href="mailto:sales@edvanta.com">sales@edvanta.com</a>
            </p>
          </div>
        </div>

        <div class="flex gap-x-4">
          <img src="../../public/icons/address.svg" alt="Address" />
          <div>
            <p class="flex flex-col font-bold text-[18px] leading-[24px]">
              Our office<a class=" text-[24px] leading-[36px] font-bold">Noida,India</a>
            </p>
          </div>
        </div>
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14008.314372907433!2d77.3738036!3d28.6274065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45c8076b71f%3A0xadc370a7d9c5113c!2sEdvanta%20Technologies!5e0!3m2!1sen!2sin!4v1728286381509!5m2!1sen!2sin"
          class="w-full min-h-[35.875rem]" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "contact",
});
const configObject = {
  bgColor1: 'rgb(0,145,168)',
  bgColor2: 'rgb(0,185,198)',
  color1: '193,88,227',
  color2: '103,225,234',
  color3: '0,126,149',
  color4: '11,199,215',
  color5: '87,239,185',
  circleSize: '80%',
  blending: 'hard-light',
};
</script>
