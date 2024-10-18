<template>
    <div>
        <div class="relative z-[1]">
            <LmsPartnersHero :heading="heroData.heading" :title="heroData.title" :subtitle="heroData.subtitle"
                :rightImg="heroData.rightImg" :cta="heroData.cta" :theme="heroData.theme" />
        </div>
        <LmsListText :keyData="keyData" :heading="introData.heading" :title="introData.title"
            :content="introData.content" icon="/icons/lms/verified.svg" />
        <UiGridCard :data="data2" title="Supercharge your Canvas LMS experience with" subtitle="Content"
            text="text-black" />
        <LmsPartnersTotaraLists />
        <UiConnect :cards="totaraConnectData.cards" :heading="totaraConnectData.heading"
            :title="totaraConnectData.title" :subtitle="totaraConnectData.subtitle" />
    </div>
</template>

<script setup>
const heroData = {
    heading: "Totara",
    title: "Empowring people to do their best work.",
    subtitle: "",
    rightImg: "https://placehold.co/648x455",
    cta: [
        {
            text: "Learn more",
            href: "/"
        },
        {
            text: "Schedule a demo",
            href: "/",
        }
    ],
    theme: "#017AB7"
}

const introData = {
    title: "Your talent experience platform",
    heading: "Heading",
    content: [
        "The Totara Talent Experience Platform comprises three powerful solutions to help you build a better workplace, increase resilience and prosper in today’s fast-changing world.",
    ]
}

const data2 = [
    {
        title: 'Learn',
        description: 'The world’s most powerful and flexible learning management system(LMS) trusted by thousands of organisations ',
        icon: '/icons/lms/canvas/LMS-7.png'
    },
    {
        title: 'Perform',
        description: 'Advanced performance management that drives sustained productivity and skill growth',
        icon: '/icons/lms/canvas/LMS-6.png'
    },
]

const keyData = {
    contents: [
        {
            title: 'Limitless Customization: ',
            text: 'No more compromises. With Totara’s fully customizable code, your LMS adapts to your unique needs, not the other way around.'
        },
        {
            title: 'Learning & Compliance at scale: ',
            text: 'Any learning experience, any audience, anytime. Totara handles all learning and compliance needs, from recurring to streamlined onboarding, regardless of industry or scale.'
        },
        {
            title: 'Save Time & Money: ',
            text: 'Minimize costs and maximize efficiency. Reduce auditing, training, and admin expenses while enhancing compliance, reporting, and onboarding processes.'
        },
        {
            title: 'Retain Staff Through Training:',
            text: 'Train and retain. Efficiently manage and deliver training to upskill staff, improve performance, and boost retention as your organization grows.'
        },
        {
            title: 'Improve Business Outcomes:',
            text: 'Go beyond compliance. Motivate staff with self-directed learning, engage learners with personalized courses, and reduce business risk through better compliance.'
        },
    ],
    rightImg: "https://placehold.co/770x420"
}

const totaraConnectData = {
    heading: "Connect with us",
    title: "Get Started with Totara",
    subtitle: "Partner with Edvanta and leverage the power of Totara to create a dynamic, engaging, and productive learning environment. Whether you're looking to implement a new LMS, enhance employee engagement, or boost performance, our team is here to support you every step of the way. Let's collaborate to achieve your goals and drive your organization forward.",
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
            button: "Schedule a demo"
        },
    ]
}

</script>