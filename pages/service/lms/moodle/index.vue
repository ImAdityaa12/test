<template>
    <div>
        <div class="relative z-[1]">
            <LmsPartnersHero :heading="heroData.heading" :title="heroData.title" :subtitle="heroData.subtitle"
                :rightImg="heroData.rightImg" :cta="heroData.cta" :theme="heroData.theme" />
        </div>
        <LmsPartnersIntro :title="introData.title" :heading="introData.heading" :content="introData.content" />
        <UiGridCardSplit :data="data" heading="Heading"
            title="Enhance the effectiveness of your learning strategy with Canvas"
            subtitle="Moodle offers unparalleled flexibility, scalability, and security, making it the ideal choice for educational institutions and organizations worldwide." />

        <!-- <UiGridCard :isDark="true" :data="data2" bg="bg-[#122137]" text="text-white"
            title="All these challenges solved and much more!" heading="Section name" subtitle="Content" /> -->

        <LmsPartnersMoodleMasonryGrid :data="data2" title="A rich, flexible, and secure learning experience."
            heading="Section name" subtitle="Content" />

        <UiStickyScroll :data="data3" :title="`Versatile solutions for every
                    training need`" :heading="`Section name`" :subtitle="`Moodle’s flexibility and scalability and Edvanta’s
                    expertise make it suitable for various training needs across different industries.`" />

        <UiGridCard :data="data6" bg="bg-[#122137]" text="text-white" title="Why Partner with Edvanta?"
            heading="Section name"
            subtitle="Partner with Edvanta to leverage our deep expertise, innovative approach, and commitment to creating exceptional learning experiences. Here's why we're your best choice for Moodle implementations:" />

        <!-- <UiGridCard :data="data3" heading="Section name" title="Versatile solutions for every training need"
            subtitle="Moodle’s flexibility and scalability and Edvanta’s expertise make it suitable for various training needs across different industries. " /> -->

        <!-- <UiGridCard :data="data4" bg="bg-[#122137]" text="text-white" title="Why Partner with Edvanta?"
            heading="Section name"
            subtitle="Partner with Edvanta to leverage our deep expertise, innovative approach, and commitment to creating exceptional learning experiences. Here's why we're your best choice for Moodle implementations:" /> -->

        <LmsPartnersMoodle5x2Grid :data="data4" bg="bg-[#122137]" text="text-white" title="Integrate Moodle with Ease"
            heading="Section name"
            subtitle="Moodle's robust integration capabilities allow you to connect with a wide array of tools and systems, enhancing the learning experience. Beyond native integrations, Edvanta offers custom integration services using LTI and xAPI, ensuring your LMS works seamlessly with your existing infrastructure." />

        <LmsPartnersMoodleAutoScroll />

        <!-- <UiGridCard :data="data5" heading="Section name" title="Moodle LMS  and Beyond"
            subtitle="Partner with Edvanta for a comprehensive suite of Moodle-related services designed to enhance and optimize your learning platform." /> -->

        <UiConnect :cards="moodleConnectData.cards" :heading="moodleConnectData.heading"
            :title="moodleConnectData.title" :subtitle="moodleConnectData.subtitle" />
    </div>
</template>

<script setup>
const heroData = {
    heading: "Moodle",
    title: "The best of open source learning management systems",
    subtitle: "Renowned for its flexibility and robust features, Moodle is the online learning platform chosen by thousands of schools, universities, colleges, vocational trainers, and workplaces worldwide. ",
    rightImg: "https://placehold.co/648x455",
    cta: [
        {
            text: "Know more",
            href: "/"
        },
        {
            text: "Get Moodle",
            href: "/",
        }
    ],
    theme: "#F27F22"
}

const introData = {
    title: "Your Premier Open Source LMS",
    heading: "Heading",
    content: [
        "Moodle is a fully customizable, open-source learning management system that adapts to the way your students learn best. From K-12 classrooms to multi-campus universities, Moodle offers the flexibility to grow and meet all your organization’s eLearning needs, now and in the future.",

        "It is the preferred online learning platform for thousands of schools, universities, colleges, vocational trainers, and workplaces globally. With over 377 million users, 2.2 billion course enrollments, 45 million courses in 42 languages, and over 154,000 Moodle sites"
    ]
}

const data = [
    {
        title: 'Customize your learning experience',
        description: 'Create any course or learning environment with Moodle’s extensive range of inbuilt features, plugins, and integrations.',
        icon: '/icons/lms/moodle/icons/work_alert.svg'
    },
    {
        title: 'Scale your platform to any size',
        description: 'Support organizations of all sizes, from small classrooms to large universities and global companies.',
        icon: '/icons/lms/moodle/icons/ads_click.svg'
    },
    {
        title: 'Safeguard your LMS data and systems',
        description: 'Ensure data security, user privacy, and security controls with Moodle’s open-source platform, deployable on a private secure cloud or server.',
        icon: '/icons/lms/moodle/icons/open_with.svg'
    },
    {
        title: 'Use anywhere, on any device',
        description: 'Easily track progress and generate insightful reports with powerful data tools.',
        icon: '/icons/lms/moodle/icons/folder_managed.svg'
    },
    {
        title: 'Easy integration',
        description: 'Connect Moodle with video conferencing, student information systems, plagiarism detection, and other LMS integrations seamlessly.',
        icon: '/icons/lms/moodle/icons/our_approch.svg'
    },
    {
        title: 'Accessible for all',
        description: 'Create an inclusive learning environment with integrated content accessibility checkers, text-to-speech tools, and more.',
        icon: '/icons/lms/moodle/icons/our_approch.svg'
    },
]

const data2 = [
    {
        title: 'Fully Customisable',
        description: 'Create engaging courses with a wide array of resources and activities.',
        icon: '/icons/lms/moodle/section1/LMS.svg'
    },
    {
        title: 'Branded Look and Feel',
        description: 'Customize themes to match your brand colors and logo.',
        icon: '/icons/lms/moodle/section1/LMS-1.svg'
    },
    {
        title: 'Accessibility Focused',
        description: 'Accommodate all learners with tools like text-to-speech and accessibility checkers.',
        icon: '/icons/lms/moodle/section1/LMS-2.svg'
    },
    {
        title: 'Mobile Learning',
        description: 'Access content and submit assignments on the go with the Moodle App.',
        icon: '/icons/lms/moodle/section1/LMS-3.svg'
    },
    {
        title: 'Gamification',
        description: 'Engage learners with badges, certificates, and interactive games.',
        icon: '/icons/lms/moodle/section1/LMS-4.svg'
    },
    {
        title: 'Data Control and Privacy Compliance',
        description: 'Manage privacy settings and data policies to meet local regulations.',
        icon: '/icons/lms/moodle/section1/LMS-5.svg'
    },
    {
        title: 'Complete Ownership and Control',
        description: 'Control everything from data privacy to site functionality with Moodle’s open-source platform.',
        icon: '/icons/lms/moodle/section1/LMS-6.svg'
    },
    {
        title: 'Easy Add-Ons',
        description: 'Extend your learning ecosystem with certified integrations and over 2,000 plugins.',
        icon: '/icons/lms/moodle/section1/LMS-7.svg'
    },
    {
        title: 'Multi-Language Support',
        description: 'Available in over 160 languages for a global reach.',
        icon: '/icons/lms/moodle/section1/LMS-8.svg'
    },
    {
        title: 'Comprehensive Management',
        description: 'Tailored paths for each user.',
        icon: '/icons/lms/moodle/section1/LMS-9.svg'
    },
    {
        title: 'Security and Scalability',
        description: 'Teach with confidence knowing Moodle scales with you and protects your data.',
        icon: '/icons/lms/moodle/section1/LMS-10.svg'
    },
    {
        title: 'AI Integration',
        description: 'Utilize AI plugins for enhanced learning experiences and dynamic content generation.',
        icon: '/icons/lms/moodle/section1/LMS-11.svg'
    },
]

const data3 = [
    {
        id: 0,
        title: 'Statutory Training',
        description: 'Deliver compulsory training by law, such as driver training and occupational health and safety (OHS), efficiently and in compliance with current legislation.',
        icon: '/icons/lms/moodle/section2/handshake.svg',
        banner: 'https://picsum.photos/id/77/700/500',
    },
    {
        id: 1,
        title: 'Certification',
        description: 'Boost motivation and validate training with certificates upon course completion.',
        icon: '/icons/lms/moodle/section2/school.svg',
        banner: 'https://picsum.photos/id/32/700/500'
    },
    {
        id: 2,
        title: 'Sales Training',
        description: 'Enhance sales reps’ skills by training best practices and communication techniques.',
        icon: '/icons/lms/moodle/section2/document_scanner.svg',
        banner: 'https://picsum.photos/id/33/700/500'
    },
    {
        id: 3,
        title: 'Microlearning',
        description: 'Deliver training in small, engaging chunks to help employees achieve their goals faster.',
        icon: '/icons/lms/moodle/section2/history_edu.svg',
        banner: 'https://picsum.photos/id/34/700/500'
    },
    {
        id: 4,
        title: 'Knowledge Base',
        description: 'Create and maintain a knowledge base to ensure knowledge retention, minimize training costs, and prevent loss of key employee expertise.',
        icon: '/icons/lms/moodle/section2/tv_options_input_settings.svg',
        banner: 'https://picsum.photos/id/35/700/500'
    },
    {
        id: 5,
        title: 'Soft Skills Training',
        description: 'Develop essential soft skills like leadership, time management, and conflict resolution through interactive courses.',
        icon: '/icons/lms/moodle/section2/rule_settings.svg',
        banner: 'https://picsum.photos/id/36/700/500'
    },
    {
        id: 6,
        title: 'Compliance',
        description: 'Ensure adherence to corporate regulations with mandatory training programs that have set deadlines.',
        icon: '/icons/lms/moodle/section2/store.svg',
        banner: 'https://picsum.photos/id/37/700/500'
    },
    {
        id: 7,
        title: 'Onboarding of New Employees',
        description: 'Facilitate digital onboarding and preboarding to help new hires integrate seamlessly and become productive from day one.',
        icon: '/icons/lms/moodle/section2/store.svg',
        banner: 'https://picsum.photos/id/38/700/500'
    },
    {
        id: 8,
        title: 'Product Training',
        description: 'Provide employees with access to the latest product updates and procedures.',
        icon: '/icons/lms/moodle/section2/store.svg',
        banner: 'https://picsum.photos/id/39/700/500'
    },
    {
        id: 9,
        title: 'Channel Training:',
        description: 'Build a knowledge base for partners, consultants, or customers to support product sales, maintain brand quality, and reduce training costs.',
        icon: '/icons/lms/moodle/section2/store.svg',
        banner: 'https://picsum.photos/id/40/700/500'
    },
    {
        id: 10,
        title: 'Sale of Courses:',
        description: 'Offer your specialized know-how to corporate customers through video courses and interactive modules.',
        icon: '/icons/lms/moodle/section2/store.svg',
        banner: 'https://picsum.photos/id/41/700/500'
    },
    {
        id: 11,
        title: 'Technology Upskilling:',
        description: 'Align employees with new technologies through cost-effective online training, preparing them for advancements like AI automation.',
        icon: '/icons/lms/moodle/section2/store.svg',
        banner: 'https://picsum.photos/id/42/700/500'
    },
]

const data4 = [
    {
        title: 'Video Conferencing:',
        description: 'Integrate with popular tools like Zoom, Microsoft Teams, and BigBlueButton for real-time collaboration.',
        icon: '/icons/lms/moodle/section3/cognition.svg'
    },
    {
        title: 'Plagiarism Detection',
        description: 'Use tools like Turnitin and Urkund to ensure academic integrity.',
        icon: '/icons/lms/moodle/section3/code_blocks.svg'
    },
    {
        title: 'Single Sign-On (SSO):',
        description: 'Integrate with SSO providers like SAML, OAuth2, and LDAP for seamless user authentication.',
        icon: '/icons/lms/moodle/section3/gamepad.svg'
    },
    {
        title: 'xAPI Integration:',
        description: 'Implement xAPI for advanced learning analytics and data tracking.',
        icon: '/icons/lms/moodle/section3/podcasts.svg'
    },
    {
        title: 'Library Systems',
        description: 'Connect with library systems for easy access to academic resources.',
        icon: '/icons/lms/moodle/section3/cognition.svg'
    },
    {
        title: 'Student Information Systems (SIS):',
        description: 'Sync with systems like Banner, PowerSchool, and Infinite Campus to streamline student data management.',
        icon: '/icons/lms/moodle/section3/code_blocks.svg'
    },
    {
        title: 'Content Repositories:',
        description: 'Connect with repositories like Google Drive, OneDrive, and Dropbox for easy access to course materials',
        icon: '/icons/lms/moodle/section3/podcasts.svg'
    },
    {
        title: 'Learning Tools Interoperability (LTI):',
        description: 'Use LTI integrations to connect with a variety of external learning tools and platforms.',
        icon: '/icons/lms/moodle/section3/cognition.svg'
    },
    {
        title: 'Assessment Tools:',
        description: 'Integrate with tools like Respondus and ProctorU for secure online assessments.',
        icon: '/icons/lms/moodle/section3/code_blocks.svg'
    },
    {
        title: 'E-commerce Systems:',
        description: 'Integrate with platforms like Shopify and WooCommerce to manage course sales and subscriptions.',
        icon: '/icons/lms/moodle/section3/podcasts.svg'
    },
]

const data6 = [
    {
        title: 'Deep Learning Technology Expertise',
        description: 'Bring the experience and know-how we-ve accumulated since 2007 to your project',
        icon: '/icons/lms/moodle/section3/cognition.svg'
    },
    {
        title: 'Creators of Exceptional Learning Experiences',
        description: 'Crafting intuitive, engaging, and accessible learning platforms that inspire learners to fulfill their potential.',
        icon: '/icons/lms/moodle/section3/code_blocks.svg'
    },
    {
        title: 'Empowering You Through Collaboration',
        description: 'Building strong connections between our team and yours, always ready to support, talk, and, challenge......',
        icon: '/icons/lms/moodle/section3/gamepad.svg'
    },
    {
        title: 'xAPI Integration:',
        description: 'Implement xAPI for advanced learning analytics and data tracking.',
        icon: '/icons/lms/moodle/section3/podcasts.svg'
    },
    {
        title: 'Library Systems',
        description: 'Connect with library systems for easy access to academic resources.',
        icon: '/icons/lms/moodle/section3/cognition.svg'
    },
]

const data5 = [
    {
        title: 'Custom Development:',
        description: 'Creating and extending functionality with innovative, bespoke features to meet your specific needs.',
        icon: '/icons/lms/moodle/section2/handshake.svg'
    },
    {
        title: 'Managed hosting',
        description: 'Maintaining a secure, scalable, and reliable hosting environment to enhance your LMS.',
        icon: '/icons/lms/moodle/section2/school.svg'
    },
    {
        title: 'Learning Content:',
        description: 'Creating, sourcing, and delivering impactful, interactive, and cost-effective courses.',
        icon: '/icons/lms/moodle/section2/document_scanner.svg'
    },
    {
        title: 'Reporting and Analytics:',
        description: 'Analyze your Moodle data with advanced reporting tools to understand and improve learner engagement.',
        icon: '/icons/lms/moodle/section2/history_edu.svg'
    },
    {
        title: 'Upgrades',
        description: 'Upgrading Moodle to the latest version to leverage new features and improvements.',
        icon: '/icons/lms/moodle/section2/tv_options_input_settings.svg'
    },
    {
        title: 'UX and Theme Design:',
        description: 'Engaging learners with intuitive, visually appealing, and on-brand user experiences.',
        icon: '/icons/lms/moodle/section2/rule_settings.svg'
    },
    {
        title: 'Learning Consultancy and Training:',
        description: 'Offering trusted advice and training to optimize L&D strategy and overcome challenges.',
        icon: '/icons/lms/moodle/section2/store.svg'
    },
    {
        title: 'Performance and Health Check:',
        description: 'Conduct detailed audits and validate the resource usage, scalability, and reliability of your Moodle LMS.',
        icon: '/icons/lms/moodle/section2/store.svg'
    },
    {
        title: 'Support & Training:',
        description: 'Provide employees with access to the latest product updates and procedures.',
        icon: '/icons/lms/moodle/section2/store.svg'
    },
    {
        title: 'Integration',
        description: 'Connecting Moodle with your existing IT systems for seamless operation.',
        icon: '/icons/lms/moodle/section2/store.svg'
    },
    {
        title: 'Fully Managed Moodle LMS:',
        description: 'Handling all aspects of Moodle LMS management, from initial design to ongoing support and upgrades.',
        icon: '/icons/lms/moodle/section2/store.svg'
    },
]


const moodleConnectData = {
    heading: "Connect with us",
    title: "Get Started with Moodle",
    subtitle: "For a seamless, engaging, and efficient learning environment.",
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