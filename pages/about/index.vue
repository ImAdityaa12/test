<script setup>
const vision = {
    title: 'Our Vision',
    heading: 'Make learning accessible, engaging and effective for everyone.',
    description: 'Edvanta envisions enhancing learning experiences and contributing to a sustainable shift in learner mindsets. It aims to lead in digital learning innovation and become an internationally reputable, research-driven organization. In the next 5 to 10 years, Edvanta plans to:',
    list: [
        'Enable widespread adoption of digital learning technologies.',
        'Focus on educational gaming and digital innovation.',
        'Expand globally with tailored content and learning simulations.',
        'Through innovation, Edvanta aims to empower the digital learning industry and make learning engaging and accessible worldwide.'
    ],
    reverse: false
}
const mission = {
    title: 'Our Mission',
    heading: 'Transform learning and development with innovative tech solutions.',
    description: "Edvanta's mission is to transform the learner's experience, making learning both fun and empowering. The company aims to empower learning organizations to scale their technology, learning, and teaching processes to meet the evolving needs of modern learners. Edvanta is committed to continuous evolution, building flexible and competitive learning infrastructures. By architecting and implementing innovative learning solutions, Edvanta views change as integral to learning, aspiring to create multimodal, immersive, and scalable learning interfaces that integrate specialized frameworks and multi-device-enabled interfaces for personalized learning paths.",
    list: [],
    reverse: true
}

const beliefs = [{
    title: 'Creative thinking',
    description: 'We tackle challenges with boundless curiosity and creativity.',
    icon: 'icons/aboutus/cognition.svg'
},
{
    title: 'Purposeful creation',
    description: 'We design impactful solutions with thoughtfulness and precision',
    icon: 'icons/aboutus/code_blocks.svg'
},
{
    title: 'Continuous innovation',
    description: 'We constantly push boundaries to drive progress and improvement.',
    icon: 'icons/aboutus/gamepad.svg'
},
{
    title: 'Simplified processes',
    description: 'We make complex systems intuitive and accessible, ensuring efficiency.',
    icon: 'icons/aboutus/podcasts.svg'
}
]

const initiatives = [
    {
        title: 'Thought jumper',
        description: 'A content curation engine delivering rich, multimodal learning experiences from diverse repositories.',
        icon: '/icons/aboutus/cognitionWhite.svg'
    },
    {
        title: 'LEAP',
        description: 'A personalized learning platform powered by ThoughtJumper, offering courses across various disciplines for students and professionals.',
        icon: 'icons/aboutus/code_blocksWhite.svg'
    },
    {
        title: 'Unlearn',
        description: 'An innovative learning experience blending gaming and education using cutting-edge technologies.',
        icon: 'icons/aboutus/gamepadWhite.svg'
    },
    {
        title: 'Ctrl + Learn',
        description: 'A podcast series exploring how technology and gaming enhance learning and personal growth.',
        icon: 'icons/aboutus/podcastsWhite.svg'
    }
]

</script>

<template>
    <div class="w-full flex flex-col items-center ">
        <!-- <div
            class="w-full flex flex-col items-center relative bg-[#F7F9FC] -z-10 -skew-y-[5deg] -mt-[90px] lg:-mt[150px]">
            <div
                class="max-w-[1440px] flex flex-col  gap-11 px-6 pb-[90px]  pt-[180px] md:px-11 lg:pb-[115px]  lg:pt-[230px] 2xl:px-0 lg:flex-row skew-y-[5deg]">
                <div class="lg:w-1/2 flex items-center ">
                    <p class="text-[44px] lg:text-[64px]  font-fustat-extrabold   " style="line-height: normal;">We
                        blend
                        technology with learning pedagogy to create <i class="text-[#002FDF]">scalable & impactful</i>
                        educational experiences</p>

                </div>
                <img src="https://placehold.co/468x468" alt=""
                    class="mx-auto lg:w-1/2 rounded-lg 2xl:h-[500px] object-cover">
            </div>
            <div class="w-full flex h-60 absolute  -z-[1] bottom-0">
                <div class="w-1/2 bg-[#F7F9FC]"></div>
                <div class="w-1/2 bg-[#002FDF]"></div>
            </div>
        </div> -->
        <div
            class="grid grid-cols-1 px-6 2xl:px-0 md:px-11 mx-auto md:grid-cols-2 min-h-screen items-center gap-[25px] max-w-[1440px] md:-mt-[54px]">
            <div class="flex gap-11 flex-col max-w-[719px]">
                <h1
                    class="font-jakartaSans font-jakarta-bolder text-[#333333] text-[44px] md:text-[64px] leading-snug  md:leading-[80.64px]">
                    We blend technology with learning pedagogy to create <i class="text-[#002FDF]">scalable &
                        impactful</i>
                    educational experiences
                </h1>
            </div>
            <div class="w-full relative flex max-h-[450px]">
                <img :src="'https://placehold.co/468x468'" alt="heroImage"
                    class="rounded-lg shadow-md w-full object-cover">
            </div>
            <div class="bg-[#F2F2F2] absolute -z-[2] -top-[300px] left-0 right-0 bottom-0 -skew-y-[7deg] ">
                <div class="absolute bottom-0 right-0 w-1/2 -z-[1] h-[244px]" style="background-color:#002FDF">
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-16 max-w-[1440px] px-6 md:px-11  py-[90px] md:py-[120px] 2xl:px-0 md:mt-[90px]">
            <AboutusVisionAndMission :title="vision.title" :heading="vision.heading" :description="vision.description"
                :list="vision.list" />
            <AboutusVisionAndMission :title="mission.title" :heading="mission.heading"
                :description="mission.description" :list="mission.list" :reverse=true />
        </div>
        <div class="w-full flex justify-center bg-[#122137]">
            <div class="max-w-[1440px] px-6 py-[60px] md:px-11 md:py-[120px] lg:px-[68px] 2xl:px-0">
                <div class="flex flex-col gap-6 text-white">
                    <p class="text-[#01E1ED] text-lg leading-6 font-fustat-bolder">Heading</p>
                    <div class="flex flex-col gap-4">
                        <p class="text-[32px] leading-9 font-light ">Where Learning Knows <b class="font-extrabold">No
                                Boundaries</b></p>
                        <p class="text-lg font-medium">At Edvanta, our mission is to address the
                            complexity of
                            human learning by developing a strategy that honors both individual and social intricacies.
                            We are committed to creating a dynamic, relational, and self-organized curriculum that goes
                            beyond traditional learning systems. By leveraging innovative technology, we aim to
                            transform digital learning, making it agile and responsive to the evolving needs of
                            organizations worldwide. Our goal is to bridge the gap in the market, providing advanced
                            tools that foster effective and engaging learning experiences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="max-w-[1440px] px-6 py-[60px] md:px-11 md:py-[120px]  2xl:px-0 flex flex-col gap-16 w-full">
            <div class="flex flex-col gap-6 ">
                <p class=" text-lg leading-6 font-fustat-bolder">Heading</p>
                <div class="flex flex-col gap-4">
                    <p class="text-[32px] leading-9 font-jakarta-regular ">Our core <b>beliefs</b> </p>

                </div>
            </div>
            <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <UiIconCard v-for="belief in beliefs" :key="belief.title" :title="belief.title"
                    :description="belief.description">
                    <div class="w-12 h-12 p-1">
                        <img :src="belief.icon" alt="">
                    </div>
                </UiIconCard>
            </div>
        </div>

        <div class="w-full flex justify-center bg-[#122137]">
            <div class="max-w-[1440px] px-6 py-[60px] md:px-11 md:py-[120px]  2xl:px-0 flex flex-col gap-16 text-white">
                <div class="flex flex-col gap-6 ">
                    <p class="text-[#01E1ED] text-lg leading-6 font-fustat-bolder">Our Initiatives</p>
                    <div class="flex flex-col gap-4">
                        <p class="text-[32px] leading-9 font-jakarta-regular "> <b>Built for </b>Learners. <b>Built
                                by</b> Learners.</p>
                        <p class="text-lg font-fustat-medium">We have been building flexible learning ecosystems over
                            the last 20 years for several organisations, institutions & industries.
                        </p>
                    </div>
                </div>
                <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div class="flex flex-col gap-3 items-start" v-for="(initiative, i) in initiatives" :key="i">
                        <div class="flex-grow">
                            <UiIconCard :key="initiative.title" :title="initiative.title"
                                :description="initiative.description">
                                <div class="w-12 h-12 p-1">
                                    <img :src="initiative.icon" alt="">
                                </div>
                            </UiIconCard>
                        </div>
                        <button class=" flex justify-center items-center  text-base font-fustat-bold ">
                            <p>Know More</p> <img src="/icons/aboutus/arrow_right_alt.svg" alt=""
                                class="h-5 w-5 p-[5px]">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>