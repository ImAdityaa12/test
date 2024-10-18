<template>
    <div class="relative">
        <div class="overflow-hidden  z-[1]">
            <UiHero :title="heroData.title" :subtitles="[heroData.subtitle]" :rightImg="heroData.rightImg"
                :cta="heroData.cta" :barImg="heroData.barImg" :config="configObject" />
        </div>
        <LmsIntro />
        <UiGridCardSplit :data="data" heading="Benefits of LMS" title="Unlock New Possibilities for Growth and Learning"
            subtitle="over the last 20 years for several organisations, institutions & industries." />
        <UiGridCard :isDark="true" :data="data2" bg="bg-[#122137]" text="text-white"
            title="All these challenges solved and much more!" />
        <!-- <UiGridCard :data="data3" heading="Section name" title="Multiple Workflows, One Solution" subtitle="Content" /> -->
        <UiStickyScroll :data="data3" :title="`Multiple Workflows, One Solution`" :heading="`Section name`"
            :subtitle="`Content`" />
        <LmsProcess />
        <LmsPartners />
        <UiConnect :cards="lmsConnectData.cards" :heading="lmsConnectData.heading" :title="lmsConnectData.title"
            :subtitle="lmsConnectData.subtitle" />
    </div>
</template>

<script setup>
const heroData = {
    title: "Transform learning for teams and students alike",
    subtitle: "Whether you're training your workforce or educating students, our Learning Management Systems provide the tools you need to inspire, engage, and drive growth.",
    rightImg: "https://placehold.co/648x371",
    cta: [
        {
            text: "Explore Our LMS",
            href: "/"
        },
        {
            text: "Schedule a consultation",
            href: "/",
        }
    ],
    barImg: "/icons/hero-bar-bg.png"
}

const data = [
    {
        title: 'Inefficiency',
        description: 'Streamline training efforts by eliminating manual processes and centralizing resources.',
        icon: '/icons/lms/work_alert.svg'
    },
    {
        title: 'Engagement',
        description: 'Empower learners with engaging and interactive learning experiences that boost motivation.',
        icon: '/icons/lms/ads_click.svg'
    },
    {
        title: 'Scalability',
        description: 'Ensure your learning system grows with you, supporting expansion and future needs.',
        icon: '/icons/lms/open_with.svg'
    },
    {
        title: 'Data Management',
        description: 'Easily track progress and generate insightful reports with powerful data tools.',
        icon: '/icons/lms/folder_managed.svg'
    },
    {
        title: 'Integration',
        description: 'Seamlessly integrate various tools and technologies into one cohesive platform.',
        icon: '/icons/lms/our_approch.svg'
    },
]

const data2 = [
    {
        title: 'Mobile friendly',
        description: 'Access learning materials anywhere, anytime',
        icon: '/icons/lms/LMS.svg'
    },
    {
        title: 'Social learning',
        description: 'Access learning materials anywhere, anytime',
        icon: '/icons/lms/LMS-1.svg'
    },
    {
        title: 'Data tracking',
        description: 'Monitor progress & performance effortlessly.',
        icon: '/icons/lms/LMS-2.svg'
    },
    {
        title: 'Compliance',
        description: 'Ensure adherence to industry standards and regulations.',
        icon: '/icons/lms/LMS-3.svg'
    },
    {
        title: 'Gamified learning',
        description: 'Engage learners with interactive game like elements.',
        icon: '/icons/lms/LMS-4.svg'
    },
    {
        title: 'Interoperability',
        description: 'Seamless integrations with other tools, platforms and systems.',
        icon: '/icons/lms/LMS-5.svg'
    },
    {
        title: 'Centralized learning materials',
        description: 'All resources in one convenient location.',
        icon: '/icons/lms/LMS-6.svg'
    },
    {
        title: 'Flexible reporting & analytics',
        description: 'Gain insights with customizable reports.',
        icon: '/icons/lms/LMS-7.svg'
    },
    {
        title: 'Range of assessments',
        description: 'Diverse tools to evaluate learning',
        icon: '/icons/lms/LMS-8.svg'
    },
    {
        title: 'Personalised user experience',
        description: 'Tailored paths for each user.',
        icon: '/icons/lms/LMS-9.svg'
    },
]

const data3 = [
    {
        id: 0,
        title: 'Onboarding',
        description: 'Streamline the onboarding process with comprehensive training modules for new hires.',
        icon: '/icons/lms/handshake.svg',
        banner: 'https://picsum.photos/id/60/700/500'
    },
    {
        id: 1,
        title: 'Continuous Education & Professional Development',
        description: 'Support ongoing learner and career growth for your workplace.',
        icon: '/icons/lms/school.svg',
        banner: 'https://picsum.photos/id/61/700/500'
    },
    {
        id: 2,
        title: 'Compilance Training',
        description: 'Ensure adherence to industry regulation with mandatory training programs.',
        icon: '/icons/lms/document_scanner.svg',
        banner: 'https://picsum.photos/id/62/700/500'
    },
    {
        id: 3,
        title: 'Competency Based Learning',
        description: 'Focus on skill development and mastery with competency based education.',
        icon: '/icons/lms/history_edu.svg',
        banner: 'https://picsum.photos/id/63/700/500'
    },
    {
        id: 4,
        title: 'Employee Training',
        description: 'Enhance skill knowledge with continous training programs.',
        icon: '/icons/lms/tv_options_input_settings.svg',
        banner: 'https://picsum.photos/id/64/700/500'
    },
    {
        id: 5,
        title: 'Extended Enterprise & Channel Training',
        description: 'Educate partners & customers to drive business success..',
        icon: '/icons/lms/rule_settings.svg',
        banner: 'https://picsum.photos/id/65/700/500'
    },
    {
        id: 6,
        title: 'Brand Marketplace',
        description: 'Create a branded environment for selling and distributing your courses.',
        icon: '/icons/lms/store.svg',
        banner: 'https://picsum.photos/id/66/700/500'
    },
]

const lmsConnectData = {
    heading: "Connect with us",
    title: "Looking to get things done?",
    subtitle: "Let’s create the best learning experience for your business together",
    cards: [
        {
            id: "1",
            title: "Have a project in mind?",
            content: "Let’s begin your success story together right away!",
            button: "Let’s talk with team"
        },
        {
            id: "2",
            title: "Join us",
            content: "We know you are not typical and neither are we. Join our family.",
            button: "Job opening"
        },
    ],

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