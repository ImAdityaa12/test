<template>
   <div class="bg-[#F7F9FC] py-[60px]">
    <div class="wrapper" >
    <div class=" font-fustat-bolder lg:text-[64px] text-[44px]  ">
      <ContentSlot :use="$slots.header" unwrap="p"  />
    </div>
    <div class="my-8 font-fustat-bold text-base" >
      <ContentSlot :use="$slots.date" unwrap="p"  />
    </div>
    <div class="font-fustat-medium text-lg" >
      <ContentSlot :use="$slots.content"  />
    </div>
  </div>
  </div>
</template>