<template>
   
    <div class="">
        
            <ContentRendererMarkdown :value="data" :components="components"   />
        
    </div>
    
    <!-- <ContentDoc path="/privacy-policy">
      <article>
        <div class="text-red-600" >{{ data.title }}</div>
        <div class="prose-lg ">
        <ContentRendererMarkdown :value="data" />
        </div>
    </article>
    </ContentDoc> -->
</template>

<script setup>
import PrivacyHeader from "../../components/content/PrivacyHeader.vue"
import PrivacyContent from "../../components/content/PrivacyContent.vue"

const { data } = await useAsyncData('hello', () => queryContent('/privacy-policy').findOne())
const components = {
  'custom-p': PrivacyHeader,
  'custom-c':PrivacyContent
}
</script>

