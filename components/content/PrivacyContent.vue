<template>
    <div class=" wrapper py-[60px] md:py-[120px]">
     <div class=" prose-lg   ">
       <ContentSlot :use="$slots.custom" unwrap="p"  />
     </div>
     <div class="flex justify-center items-center mt-12 " >
      <img class="bg-cover" src="https://placehold.co/885x832" alt="">
     </div>
   </div>
 </template>