<script setup>
const approaches = [
    {
        title: 'Assessment',
        description: 'Evaluate maturity, align processes, and develop data-driven strategies.',
        icon: '/icons/service/contract_edit.svg'
    },
    {
        title: 'Planning',
        description: 'Plan implementation and seamless system integration.',
        icon: '/icons/service/tactic.svg'
    },
    {
        title: 'Management',
        description: 'Manage projects flexibly with agile and change control processes.',
        icon: '/icons/service/settings_account_box.svg'
    },
    {
        title: 'Quality',
        description: 'Ensure quality with comprehensive testing and userstory validation.',
        icon: '/icons/service/verified.svg'
    },
    {
        title: 'Support',
        description: 'Provide ongoing support for continued system performance and success.',
        icon: '/icons/service/support_agent.svg'
    }
]

const services = [
    {
        title: 'Learning platform',
        subtitle: 'Streamline Your Learning Initiatives',
        description: 'We streamline your L&D initiatives with our LMS Implementation Services. As official partners of Canvas and Totara and experts in Moodle, we bring the best of learning technology to your organization, enabling a digital learning experience for your employees.',
        icon: '/icons/service/sync_saved_locally.svg',
        to: '/service/lms'
    },
    {
        title: 'Managed learning services',
        description: 'Our Managed Learning Services act as an extension of your team, handling all aspects of LMS management from user enrollments to course updates. We provide user and admin support, hosting services, data migration, training, integrations, and custom feature development. Let us manage the complexities of your LMS so you can focus on what matters most—delivering exceptional learning experiences.',
        icon: '/icons/service/folder_managed.svg',
        to: '/service/mls'
    },
    {
        title: 'Learning content',
        description: 'We provide custom e-learning content development solutions, including storyboarding, prototyping, and final module creation. Our services span L1, L2, L3, and L4 content creation, SCORM, H5P, in-house video production, and motion graphics. As partners with Go1 and Microsoft, we also offer instant access to their course repositories.',
        icon: '/icons/service/book_3.svg',
        to: '/service/learning-content'
    },
    {
        title: 'Custom learning eco-system',
        description: 'If you have an LMS but are not satisfied with the ROI, or if your platform is outdated and not meeting your learning requirements, we can help. We optimize your current system where possible, and if necessary, build custom systems tailored to your organization’s workflows, processes, and goals. Our solutions are designed with learners in mind, ensuring a smooth, effective, and engaging learning experience that drives success.',
        icon: '/icons/service/dashboard_customize.svg',
        to: '/service/lms'
    }, {
        title: 'Online program management',
        description: 'We provide custom e-learning content development solutions, including storyboarding, prototyping, and final module creation. Our services span L1, L2, L3, and L4 content creation, SCORM, H5P, in-house video production, and motion graphics. As partners with Go1 and Microsoft, we also offer instant access to their course repositories.',
        icon: '/icons/service/ads_click.svg',
        to: '/service/lms'
    },
    {
        title: 'AI enablement service',
        description: 'If you have an LMS but are not satisfied with the ROI, or if your platform is outdated and not meeting your learning requirements, we can help. We optimize your current system where possible, and if necessary, build custom systems tailored to your organization’s workflows, processes, and goals. Our solutions are designed with learners in mind, ensuring a smooth, effective, and engaging learning experience that drives success.',
        icon: '/icons/service/smart_toy.svg',
        to: '/service/ai-enablement-services'
    }
]
const ConnectData = {
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

const configObject = {
  bgColor1: 'rgb(6,0,78)',
  bgColor2: 'rgb(14,38,140)',
  color1: '84,10,111',
  color2: '214,17,107',
  color3: '249,167,207',
  color4: '90,89,169',
  color5: '68,87,168',
  circleSize: '80%',
  blending: 'hard-light',
};
</script>

<template>
    <div class="w-full flex flex-col relative">
       


       
        <div class="overflow-hidden z-[1]">
            <div
        class="grid grid-cols-1 px-6 2xl:px-0 md:px-11 mx-auto md:grid-cols-2 min-h-screen items-center gap-[25px] max-w-[1440px] md:-mt-[54px]">
        <div class="absolute h-[244px] w-full left-0 -skew-y-[10deg] top-[75vh] -z-[1]">
            <!-- <img :src="barImg" alt="" class="w-full h-full"> -->
            <UiAnimatedBar :config="configObject" />
            
        </div>
        <div class="flex gap-11 flex-col max-w-[719px]">
            <h1
                class="font-jakartaSans font-jakarta-bolder text-[#333333] text-[44px] md:text-[64px] leading-snug  md:leading-[80.64px]">
                Tailored learning solutions for every stage of your journey
            </h1>
            <div>
               <p class="text-sm font-medium lg:text-xl">
                Every organization is at a different stage in their learning
                    and development journey. Whether you’re just starting, building content, managing systems, or
                    optimizing performance, we have tailored solutions to meet your needs.
               </p>
            </div>
                
        </div>
        <img src="https://placehold.co/648x371" alt="heroImage" class="rounded-lg shadow-md max-md:mx-auto ml-auto">
    </div>
        </div>
        <UiGridCard :data="approaches" heading="Our Approach" title="Heading" subtitle="We have been building flexible learning ecosystems over the last 20 years for several organisations, institutions & industries." bg="white" class="md:mt-[120px]"/>

        <!-- INTRO SECTION -->
        
        <div class="w-full flex justify-center bg-[#f7f9fc]">
            <div class="max-w-[1440px] px-6 py-[60px] md:px-11 md:py-[120px] 2xl:px-0 flex flex-col gap-16 ">
                <div class="flex flex-col gap-6 font-fustat">
                    <p class="text-lg leading-6  font-fustat-extrabold ">Our Services</p>
                    <div class="flex flex-col gap-4">
                        <p class="text-[32px] leading-9 font-jakarta-extrabold ">For 20 years, we've created flexible
                            learning ecosystems for diverse organizations.</p>
                        <p class="text-lg font-fustat-medium">We have been building flexible learning ecosystems over
                            the last 20 years for several organisations, institutions & industries.</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2  gap-10 ">
                    <div v-for="(service, i) in services" :key="i"
                        class=" flex flex-col gap-4 p-7 bg-background-default transition-shadow duration-300 ease-out shadow-[2px_4px_15px_0px_rgba(0,0,0,0.05)] hover:shadow-[0px_6px_20px_0px_rgba(0,47,223,0.2)]">
                        <img :src="service.icon" alt="" class="h-12 w-12">
                        <p class="text-2xl leading-7 font-fustat-extrabold">{{ service.title }}</p>
                        <div class="flex flex-col flex-grow">
                            <p v-if="service.subtitle" class="text-lg font-fustat-bold">{{ service.subtitle }}</p>
                            <p class="text-base font-fustat-medium ">{{ service.description }}</p>
                        </div>
                        <div class="flex justify-end ">
                            <NuxtLink :to="service.to"
                                class="p-2 border-logo-primary border-[1px] rounded-[4px] bg-white hover:bg-[#F1F3FD] transition-all">
                                <img src="/assets/icons/Arrow_out.svg" alt="" class="">
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- UICONNECT -->
        <UiConnect :cards="ConnectData.cards" :heading="ConnectData.heading" :title="ConnectData.title"
      :subtitle="ConnectData.subtitle" />

    </div>
</template>