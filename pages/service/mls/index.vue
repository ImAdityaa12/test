<template>
    <div class="overflow-hidden relative z-[1] font-fustat">
        <UiHero :title="heroData.title" :subtitles="heroData.subtitles" :rightImg="heroData.rightImg"
            :cta="heroData.cta" :barImg="heroData.barImg" :config="configObject" class=" " />
        <UiIntro :title="introData.title" :heading="introData.heading" :content="introData.content" />

        <UiGridCardSplit :data="benefitData.data" :heading="benefitData.heading" :title="benefitData.title"
            :subtitle="benefitData.subtitle" columns="4" />
        <UiGridCard :data="vendorData.data" :heading="vendorData.heading" :title="vendorData.title"
            :subtitle="vendorData.subtitle" columns="4" bg="bg-[#122137]" text="text-white" />

        <div class="py-[120px] bg-[#F7F9FC]">
            <div class="max-w-[1440px] space-y-[64px] px-6 md:px-11 2xl:px-0 mx-auto">
                <div class="space-y-6">
                    <span class="text-[18px] font-extrabold">Services Catalogue</span>
                    <h3 class="font-extrabold text-4xl">Explore Our Managed Learning Services</h3>
                    <div class="font-medium text-[18px] leading-[28px]">Comprehensive Solutions to Enhance Your Learning
                        Ecosystem</div>
                </div>
                <!-- <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12"> -->
                <div class="space-y-8">
                    <!-- <UiIconCard v-for="(text, i) in data" :key="i" :title="text.title" :description="text.description">
                        <img :src="text.icon" alt="" class="size-12">
                    </UiIconCard> -->

                    <MlsCatalogueCard v-for="(prop, i) in data3" :key=i :cardTitle="prop.cardTitle"
                        :textTitle="prop.textTitle" :text="prop.text" />
                </div>
            </div>
        </div>

        <UiConnect :cards="lmsConnectData.cards" :heading="lmsConnectData.heading" :title="lmsConnectData.title"
            :subtitle="lmsConnectData.subtitle" />
    </div>
</template>

<script setup>
const benefitData = {
    heading: "Benefits of MLS",
    title: "Unlock the Full Potential of Your Learning Programs",
    subtitle: "Partnering with Edvanta offers numerous benefits, allowing you to focus on core business functions while ensuring your team receives the best training.Here's how we can transform your organization:",
    data: [
        {
            title: 'Save time',
            description: 'Free up your resources by outsourcing the development and management of training programs to experts, allowing you to focus on your core business activities.',
            icon: '/icons/mls/hourglass_bottom.svg'
        },
        {
            title: 'Cost efficiency',
            description: 'An effective learning landscape needs quality content, expert delivery, robust support systems, and time dedication. Trying to accomplish all this with internal teams can tie up your time, money and resources, thus, costing your business.',
            icon: '/icons/mls/savings.svg'
        },
        {
            title: 'Relevancy',
            description: 'Relevancy in training programs has become critical as skill needs are evolving continuously. And creating a personalised and relevant learning experience for each employee with limited in-house resources can become tedious.',
            icon: '/icons/mls/engineering.svg'
        },
        {
            title: 'Expertise',
            description: 'No company can practically hire experts in every niche and for every skill. Hiring experienced experts can become costly very quickly.',
            icon: '/icons/mls/award_star.svg'
        },

    ]
}

const vendorData = {
    heading: "Why Edvanta",
    title: "Not Just a Vendor, a Partner",
    subtitle: "Edvanta’s Managed Learning Services are designed to fit the unique needs and budgets of global organizations. Our systematic approach ensures efficient expense planning and resource usage, making us more than just a vendor—we become a seamless extension of your team.",
    data: [
        {
            title: 'Customized Solutions',
            description: 'Our services are tailored to meet your specific goals, priorities, and budget projections, ensuring we align perfectly with your business strategy.',
            icon: '/icons/mls/rule_settings.svg'
        },
        {
            title: 'Efficient Engagement',
            description: 'We follow a systematic process: evaluating your needs, designing a strategic plan, and deploying expert teams managed by a dedicated project manager.',
            icon: '/icons/mls/rebase_edit.svg'
        },
        {
            title: 'Extended Team',
            description: 'Edvanta integrates seamlessly with your operations, allowing you to maintain a lean organization while providing a full range of quality services.',
            icon: '/icons/mls/groups.svg'
        },
        {
            title: 'Future-Ready',
            description: 'As the world changes, L&D teams need to be more agile and adaptive. Edvanta prepares you for the future of work with flexible and adaptive learning solutions.',
            icon: '/icons/mls/rocket_launch.svg'
        },
    ]
}
const data3 = [
    {
        cardTitle: "Learning consulting & advisory",
        textTitle: "Strategic guidance for effective learning",
        text: "Our learning consulting & advisory service provides strategic guidance to help you design, implement, and optimize your learning programs. We assess your current training needs, develop a tailored plan, and provide ongoing support to ensure your learning initiatives align with your business goals.",
        img: "",
    },
    {
        cardTitle: "Content & curriculum design",
        textTitle: "Crafting engaging and effective learning content",
        text: "We specialize in designing and developing custom learning content that meets industry standards and engages learners. Our services include storyboarding, prototyping, and creating interactive learning modules, ensuring your content is both effective and enjoyable.",
        img: "",
    },
    {
        cardTitle: "Learning management & administration",
        textTitle: "Seamless management of learning programs",
        text: "Our learning management & administration service ensures your training programs run smoothly. We handle user enrollments, course updates, and administrative support, allowing you to focus on delivering high-quality training.",
        img: "",
    },
    {
        cardTitle: "Technology administration & support",
        textTitle: "Reliable support for your learning technology",
        text: "Our team provides comprehensive technology administration and support, ensuring your learning platforms are always up-to-date and functioning optimally. From system maintenance to troubleshooting, we've got you covered.",
        img: "",
    },
    {
        cardTitle: "Measurement and analytics",
        textTitle: "Data-Driven insights for continuous improvement",
        text: "We offer robust learning measurement and analytics services to help you track learner progress and evaluate the effectiveness of your training programs. Use data-driven insights to continually improve and adapt your learning initiatives.",
        img: "",
    },
    {
        cardTitle: "Hosting",
        textTitle: "Secure and scalable hosting solutions",
        text: "Our hosting services ensure your learning platforms are secure, scalable, and reliable. We offer both on-site and cloud-based solutions tailored to meet your specific needs, providing performance monitoring, upgrades, and real-time reporting.",
        img: "",
    },
    {
        cardTitle: "Theme & design",
        textTitle: "Creating engaging and on-brand learning environments",
        text: "Our theme & design service focuses on creating visually appealing and user-friendly learning environments. We customize your LMS to reflect your brand identity and ensure an intuitive experience for your learners.",
        img: "",
    },
    /* {
        cardTitle:"",
        textTitle:"",
        text:"",
        img:"",
    }, */
]
const heroData = {
    title: " Streamline, Enhance, and Optimize Your Learning Ecosystem",
    subtitles: [" Empower Your Learning Journey with Managed Learning Services"
    ],
    rightImg: "https://placehold.co/648x371"
    ,
    cta: [
        {
            text: "Learn More",
            href: "/"
        },
        {
            text: "Get started",
            href: "/",
        }
    ],
    barImg: "/icons/mlms-bar.png"
}
const introData = {
    title: "What is MlS?",
    heading: "Unlock the full potential of your learning programs",
    content: [
        "Developing and managing learning programs can be complex and time-consuming. Managed Learning Services (MLS) offer a solution by outsourcing your training needs to Edvanta who designs, develops, manages, and delivers comprehensive learning programs. These services ensure your organization remains compliant with industry standards, manages diverse learning methods, and tracks employee progress efficiently.",
        "Our comprehensive, high-impact managed learning solutions combine the best of learning theory, technology, and operations to enable a thriving workforce. As a leading partner in learning and training outsourcing, we provide scalable, cost-effective learning solutions, acting as an extension of your team to deliver innovative and measurable results."
    ]
}
const lmsConnectData = {
    heading: "Connect with us",
    title: "Looking to get things done?",
    subtitle: "Lets create the best learning experience for your business together",
    cards: [
        {
            id: "1",
            title: "Have a project in mind?",
            content: "Let's begin your success story together right away!",
            button: "Let's talk with team"
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
  bgColor1: 'rgb(146,49,245)',
  bgColor2: 'rgb(164,61,248)',
  color1: '77,48,225',
  color2: '83,51,227',
  color3: '148,195,236',
  color4: '165,64,248',
  color5: '125,127,233',
  circleSize: '80%',
  blending: 'hard-light',
};
</script>