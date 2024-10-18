<script setup>
const {title, Heading, descripription, list,reverse}= defineProps({
    title: {type:String,default:"Title"},
    heading: {type:String,default:"Heading"},
    description: {type:String,default:"Description"},
    list: {type:Array,default:[]},
    reverse: {type:Boolean,default:false},
})
</script>

<template>
    
        <div class=" flex flex-col gap-12 w-full justify-center items-center " :class="{'lg:flex-row':!reverse,'lg:flex-row-reverse':reverse}">
           <div class="flex flex-col gap-6 w-full lg:w-1/2">
            <div class="text-lg leading-6 font-fustat-bolder">{{ title }}</div>
             <div class="flex flex-col gap-4">
                <p class="text-[32px] leading-9 font-fustat-bolder">{{ heading }}.</p>
                <div class="flex flex-col">
                    <p class="text-lg">{{ description }} </p>
            <ul class="list-disc pl-5 text-lg" style="" v-if="list" v-for="item in list">
                <li>{{ item }}</li>
            </ul>
                </div>
        
             </div></div>
            <img src="https://placehold.co/648x455" alt="" class=" rounded-lg w-full lg:w-1/2 bg-cover " >
            </div>
        
</template>

