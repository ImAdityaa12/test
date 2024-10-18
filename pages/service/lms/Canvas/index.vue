<template>
    <div>
        <div class="relative z-[1]">
            <LmsPartnersHero :heading="heroData.heading" :title="heroData.title" :subtitle="heroData.subtitle"
                :rightImg="heroData.rightImg" :cta="heroData.cta" :theme="heroData.theme" />
        </div>
        <LmsPartnersCanvasStats />
        <LmsPartnersCanvasFeatures />
        <UiGridCard :data="data" :isDark="true" bg="bg-[#122137]" text="text-white" heading="Section name"
            title="Enhance the effectiveness of your learning strategy with Canvas" subtitle="Content" />
        <UiGridCard :data="data2" title="A rich, flexible, and secure learning experience."
            subtitle="The Totara Talent Experience Platform comprises two powerful solutions to help you build a better workplace, increase resilience and prosper in today’s fast-changing world."
            heading="Heading" text="text-black" />
        <LmsPartnersCanvasWhy />
        <UiConnect :cards="canvasConnectData.cards" :heading="canvasConnectData.heading"
            :title="canvasConnectData.title" :subtitle="canvasConnectData.subtitle" />
        <!-- <LmsPartnersIntro :title="introData.title" :heading="introData.heading" :content="introData.content" /> -->
    </div>
</template>

<script setup>
const heroData = {
    heading: "Canvas LMS",
    title: "The tools you need for teaching and learning in one place.",
    subtitle: "Connection between teachers, students, and families, wherever learning happens",
    rightImg: "https://placehold.co/648x455",
    cta: [
        {
            text: "Know more",
            href: "/"
        },
        {
            text: "Schedule a demo",
            href: "/",
        }
    ],
    theme: "#E72429"
}

const data = [
    {
        title: 'Real-Time Collaboration',
        description: 'Create engaging courses with a wide array of resources and activities.',
        icon: '/icons/lms/canvas/LMS.svg'
    },
    {
        title: 'Analytics Dashboard',
        description: 'Customize themes to match your brand colors and logo.',
        icon: '/icons/lms/canvas/LMS-1.svg'
    },
    {
        title: 'Multimedia Support',
        description: 'Accommodate all learners with tools like text-to-speech and accessibility checkers.',
        icon: '/icons/lms/canvas/LMS-2.svg'
    },
    {
        title: 'Assignment Management',
        description: 'Easily create, distribute, and grade assignments.',
        icon: '/icons/lms/canvas/LMS-3.svg'
    },
    {
        title: 'Community support',
        description: 'Access a vibrant community for support and resource sharing.',
        icon: '/icons/lms/canvas/LMS-4.svg'
    },
    {
        title: 'Secure & reliable',
        description: 'Ensure data security and reliability with robust backend support.',
        icon: '/icons/lms/canvas/LMS-5.svg'
    },
]

const data2 = [
    {
        title: 'Canvas studio',
        description: 'Its the next generation video learning platform that turns one-way, passive video into inclusive, engaging, productive classroom discussions.',
        icon: '/icons/lms/canvas/LMS-7.png'
    },
    {
        title: 'Canvas catalog',
        description: 'It is a simple, elegant, modern online course catalog to showcase all of your institution’s offerings as a custom-branded storefront.',
        icon: '/icons/lms/canvas/LMS-6.png'
    },
]

const canvasConnectData = {
    heading: "Connect with us",
    title: "Ready to Transform Your Learning Experience?",
    subtitle: "Partner with Edvanta and leverage the power of Canvas LMS to elevate your educational programs. Whether you're starting from scratch or looking to enhance your current system, we have the expertise to help you succeed.",
    cards: [
        {
            id: "1",
            title: "Ready to go?",
            content: "Get Moodle up and running at your organization with Edvanta.",
            button: "Contact us"
        },
        {
            id: "2",
            title: "Need advice?",
            content: "Need advice?",
            button: "Schedule a meeting"
        },
    ]
}

</script>