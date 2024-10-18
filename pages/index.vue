<template>
  <div>
    <HomeHeroSection />
    <HomeExpertiseSection />
    <HomeVisionBanner />
    <HomeValuesBanner />
    <HomeProductsSection />
    <HomeTestimonials />
    <UiConnect :cards="homeConnectData.cards" :heading="homeConnectData.heading" :title="homeConnectData.title"
      :subtitle="homeConnectData.subtitle" />
  </div>
</template>

<script setup>
const homeConnectData = {
  heading: "Connect with us",
  title: "Looking to get things done?",
  subtitle: "Let’s create the best learning experience for your business together",
  cards: [
    {
      id: "1",
      title: "Have a project in mind ?",
      content: "Let’s begin your success story together right away!",
      button: "Let’s talk with team"
    },
    {
      id: "2",
      title: "Join us",
      content: "We know you are not typical and neither are we. Join our family.",
      button: "Job opening"
    },
  ]
}



</script>
