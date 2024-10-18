<script setup>
const Benefits = [
    {
        title: 'Communicating core values',

        description: 'Ensure your organizational values are clearly conveyed through tailored eLearning solutions, reinforcing company culture and employee engagement.',
        icon: '/icons/learning-content-development/3p.svg'
    },
    {
        title: 'Aligning organizational and employee goals',
        description: 'Our strategic framework strengthens your L&D initiatives, balancing the needs of your business with the career development of your employees.',
        icon: '/icons/learning-content-development/flag_2.svg'
    },
    {
        title: 'Maximizing training ROI',
        description: 'Leverage our scalable and personalized content solutions to optimize your training investment and drive measurable results.',
        icon: '/icons/learning-content-development/finance_chip.svg'
    },
    {
        title: 'Cost-efficient development',
        description: 'Reduce development costs by modernizing existing content and focusing on what truly matters, without the need to create everything from scratch.',
        icon: '/icons/learning-content-development/savings.svg'
    }, {
        title: 'Targeted business solutions',
        description: 'Our custom eLearning solutions are meticulously designed to meet specific business requirements, ensuring that your training content directly supports your objectives.',
        icon: '/icons/learning-content-development/target.svg'
    },

]
const whyEdvanta = [
    {
        title: 'Encrypted streaming',

        description: 'We prioritize your content security, ensuring that no third-party applications can copy or share your valuable learning materials.',
        icon: '/icons/learning-content-development/encrypted.svg'
    },
    {
        title: 'Trusted content repositories',
        description: 'By utilizing secure and efficient video repositories like Vimeo and YouTube, we protect your digital assets and ensure seamless delivery.',
        icon: '/icons/learning-content-development/animated_images.svg'
    },
    {
        title: 'AWS-powered CDN',
        description: 'Our robust content delivery network, powered by AWS, guarantees fast and reliable access to your learning content globally.',
        icon: '/icons/learning-content-development/bolt.svg'
    },
    {
        title: 'Proven track record',
        description: 'With a 100% client retention rate, we deliver large-scale national and international projects with complete ownership and high satisfaction.',
        icon: '/icons/learning-content-development/contract.svg'
    }, {
        title: 'Expertise in learning platforms',
        description: 'Our team’s deep familiarity with learning platforms and technologies ensures smooth transitions and ongoing support tailored to your needs.',
        icon: '/icons/learning-content-development/local_library.svg'
    },
    {
        title: 'Optimized quality assurance',
        description: 'Using a “shift left” approach within an Agile/DevOps framework, we ensure early QA involvement for faster time to production and optimized defect tracking.',
        icon: '/icons/learning-content-development/thumb_up.svg'
    }

]

const serviceCatalogue = [
    {
        title: 'Content Consultation',
        description: 'Leverage our deep expertise in instructional design to create engaging and effective learning content.',
        keyPoints: ['Maturity model assesment',
            'Business process alignment',
            'Analytics consulting & data strategy',
            'Cloud implementation technique',
            'Integration management planning'
        ]
    },
    {
        title: 'Custom eLearning Content',
        description: 'Develop custom eLearning content that fits your specific needs, from basic courses to advanced simulations.',
        keyPoints: ['eLearning Course Development (L1, L2, L3, L4)',
            'HTML Learning Package Development',
            'SCORM Package Development',
            'H5P Content Development',
            'Scenario-Based Learning Packages'
        ]
    },
    {
        title: 'Rapid eLearning Content',
        description: 'Quickly create and deploy learning content to meet immediate training needs with our rapid eLearning services.',
        keyPoints: ['Microlearning Content',
            'Off-the-Shelf Courses',
            'Refreshing Static Content',
            'Multi-Device Course Formatting'
        ]
    },
    {
        title: 'Content Virtualization and Conversion',
        description: 'Update and adapt your existing content for modern platforms and diverse audiences.',
        keyPoints: ['Content Localization',
            'Content Conversion (PPT to eLearning Module)',
            'Legacy Content Conversion',
            'ILT & VILT to Multi-Channel Format'
        ]
    },
    {
        title: 'Immersive Learning Experience',
        description: 'Create interactive and immersive learning experiences that drive deeper engagement and retention.',
        keyPoints: ['Video Game-Based Learning',
            'Gamification of Content & Courses',
            'Learning Simulations',
            'Digital Avatar-Based Simulations (Unreal & Unity)',
            'Business Simulations',
            'Scenario-Based Simulations',
            'App/Software/Hardware Simulations',
            'AR/VR/XR Simulations'
        ]
    },
    {
        title: 'Video-Based Learning',
        description: 'Produce high-quality video content that enhances learning through visual storytelling and dynamic presentations.',
        keyPoints: ['2D & 3D Animated Illustrations',
            'Whiteboard Animations',
            'Motion Graphics',
            'End-to-End Video Production',
            'Interactive Videos',
            'Broadcast Videos',
            'Multimedia Videos',
            'Talking Heads Video',
        ]
    }
]

const lcdConnectData = {
    heading: "Connect with us",
    title: "Whether you’re ready to start building custom content or need expert advice on where to begin, we’re here to help you achieve your learning goals.",
    subtitle: "Take the Next Step with Edvanta",
    cards: [
        {
            id: "1",
            title: "Get in touch",
            content: "Let’s begin your success story together right away!",
            button: "Get in Touch"
        },
        {
            id: "2",
            title: "Schedule a meeting",
            content: "We know you are not typical and neither are we. Join our family.",
            button: "Schedule meeting"
        },
    ]
}
const heroData = {
    title: "  Crafting Modern Learning Experiences for Today's Learners",
    subtitles: [" Elevate Your Organizations’ Learning Experience with Edvanta’s Custom Content Development Services."
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

<template>
    <div>
        <div class="w-full flex flex-col items-center ">
            <UiHero :title="heroData.title" :subtitles="heroData.subtitles" :rightImg="heroData.rightImg"
            :cta="heroData.cta" :barImg="heroData.barImg" :config="configObject" class=" " />
            <UiIntro heading="Transformative Learning Experiences Tailored to Your Needs" title="Heading" :content="['At Edvanta, we specialize in designing and developing custom learning content that aligns with your business goals and enhances learner engagement. Our approach is rooted in years of research and leverages advanced media capabilities to create authentic, contextual, and effective learning experiences. From interactive simulations to immersive storytelling, we deliver modern learning solutions that meet the evolving needs of today’s learners.']"/>
            <UiGridCardSplit :data="Benefits" title="Benefits of Learning Content Development" heading="Unlocking the True Potential of Your Training Programs" subtitle="Content" columns="1" />
            <UiGridCard :data="whyEdvanta" heading="Why Edvanta?" title="Unmatched expertise and proven results" subtitle="Content" bg="bg-[#122137]" text="text-white"/>
            <div class="flex justify-center w-full bg-[#f7f9fc]">
                <div class="max-w-[1440px] w-full px-6 2xl:px-0 py-[60px] md:px-11 md:py-[120px] flex flex-col gap-16 ">
                    <div class="flex flex-col gap-6 font-fustat">
                        <p class="text-lg leading-6  font-fustat-extrabold ">Services Catalogue</p>
                        <div class="flex flex-col gap-4">
                            <p class="text-[32px] leading-9 font-jakarta-extrabold ">Comprehensive Solutions for All
                                Your
                                Learning Needs</p>
                            <p class="text-lg font-fustat-medium">Content</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-8 w-full">
                        <div class="p-7 flex flex-col md:flex-row-reverse gap-4 bg-white w-full md:min-h-[361px] lg:max-h-[412px]   rounded-[4px] shadow-md"
                            v-for="(service, i) in serviceCatalogue" :key="i">
                            <img src="https://placehold.co/212x172" alt="" class="md:w-1/2 object-cover h-full">
                            <div class="flex flex-col gap-4 md:w-1/2 flex-grow">
                                <p class="text-2xl leading-7 font-fustat-extrabold">{{ service.title }} </p>
                                <p class="text-base font-fustat-medium">{{ service.description }}</p>
                                <div class="flex flex-col gap-2 flex-grow">
                                    <div class="flex gap-2" v-for="(keyPoint, i) in service.keyPoints" :key="i">
                                        <img src="/public/icons/learning-content-development/check_circle.svg"
                                            alt="">
                                        <p class="text-base font-fustat-medium">{{ keyPoint }}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
           
        </div>
        <UiConnect :cards="lcdConnectData.cards" :heading="lcdConnectData.heading" :title="lcdConnectData.title"
            :subtitle="lcdConnectData.subtitle" />
    </div>
</template>