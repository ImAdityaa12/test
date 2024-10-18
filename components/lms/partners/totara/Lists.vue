<template>
    <div class="py-[120px] bg-[#122137] text-white">
        <div class="wrapper mb-6">
            <div class="px-6 2xl:px-0 md:px-11 mx-auto">
                <span class="text-[18px] font-extrabold">Section name</span>
            </div>
        </div>
        <div class="space-y-[96px]">
            <!-- First List -->
            <div class="wrapper flex flex-col gap-4">
                <div class="space-y-6">
                    <h3 class="font-extrabold text-4xl text-[36px] leading-[44px] md:text-[32px] md:leading-[36px]">
                        Totara Learn: Your LMS, Your Way</h3>
                    <p v-for="(para, i) in content" :key="i" class="font-medium text-[18px] leading-[28px]">{{ para }}
                    </p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-[2fr_5fr] gap-8 items-start mt-8">
                    <div class="w-full">
                        <h2 class="text-xl font-semibold mb-4">Features:</h2>
                        <ul class="space-y-2">
                            <li v-for="(content, i) in keyData.contents" :key="i" class="flex items-start gap-2">
                                <img src="/icons/check_blue.svg" alt="checkmark" class="mt-[1px]">
                                <div class="flex flex-col text-base">
                                    <p class="text-[16px] leading-[24px] font-medium">{{ content.text }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="w-full rounded-lg h-full relative">
                        <img :src="keyData.rightImg" alt=""
                            class="absolute inset-0 h-full w-full shadow-lg rounded-[8px] flex items-center justify-center text-gray-400 object-cover object-center">
                    </div>
                </div>
            </div>

            <!-- Second List -->
            <div class="wrapper flex flex-col gap-4">
                <div class="space-y-6">
                    <h3 class="font-extrabold text-4xl text-[36px] leading-[44px] md:text-[32px] md:leading-[36px]">
                        Totara Engage: Empowering Collaboration and Engagement</h3>
                    <p v-for="(para, i) in content2" :key="i" class="font-medium text-[18px] leading-[28px]">{{ para }}
                    </p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-[2fr_5fr] gap-8 items-start mt-8">
                    <div class="w-full">
                        <h2 class="text-xl font-semibold mb-4">Features:</h2>
                        <ul class="space-y-2">
                            <li v-for="(content, i) in keyData2.contents" :key="i" class="flex items-start gap-2">
                                <img src="/icons/check_blue.svg" alt="checkmark" class="mt-[1px]">
                                <div class="flex flex-col text-base">
                                    <p class="text-[16px] leading-[24px] font-medium">{{ content.text }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="w-full rounded-lg h-full relative">
                        <img :src="keyData.rightImg" alt=""
                            class="absolute inset-0 h-full w-full shadow-lg rounded-[8px] flex items-center justify-center text-gray-400 object-cover object-center">
                    </div>
                </div>
            </div>

            <!-- Third List -->
            <div class="wrapper flex flex-col gap-4">
                <div class="space-y-6">
                    <h3 class="font-extrabold text-4xl text-[36px] leading-[44px] md:text-[32px] md:leading-[36px]">
                        Totara Perform: Driving Performance and Growth</h3>
                    <p v-for="(para, i) in content3" :key="i" class="font-medium text-[18px] leading-[28px]">{{ para }}
                    </p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-[2fr_5fr] gap-8 items-start mt-8">
                    <div class="w-full">
                        <h2 class="text-xl font-semibold mb-4">Features:</h2>
                        <ul class="space-y-2">
                            <li v-for="(content, i) in keyData3.contents" :key="i" class="flex items-start gap-2">
                                <img src="/icons/check_blue.svg" alt="checkmark" class="mt-[1px]">
                                <div class="flex flex-col text-base">
                                    <p class="text-[16px] leading-[24px] font-medium">{{ content.text }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="w-full rounded-lg h-full relative">
                        <img :src="keyData.rightImg" alt=""
                            class="absolute inset-0 h-full w-full shadow-lg rounded-[8px] flex items-center justify-center text-gray-400 object-cover object-center">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const keyData = {
    contents: [
        {
            text: 'Audience and automation'
        },
        {
            text: 'Compliance and mandatory training'
        },
        {
            text: 'Live events and seminars'
        },
        {
            text: 'Custom report builder'
        },
        {
            text: 'Course management'
        },
        {
            text: 'Assessment and certifications'
        },
        {
            text: 'Single sign-on (SSO)'
        },
        {
            text: 'Advance multi-tenancy'
        },
        {
            text: 'Report builder enhancements'
        },
        {
            text: 'Fresh user interface'
        },
    ],
    rightImg: "https://placehold.co/960x320"
}

const keyData2 = {
    contents: [
        {
            text: 'Curated content'
        },
        {
            text: 'Collaboration workspace'
        },
        {
            text: 'Microsoft teams integration'
        },
        {
            text: 'Easy surveys'
        },
        {
            text: 'Social and  micro learning'
        },
        {
            text: 'Personalised playlists'
        },
        {
            text: 'Flexible access and sharing settings'
        },
        {
            text: 'User an content engagement reports'
        },
    ],
    rightImg: "https://placehold.co/960x320"
}

const keyData3 = {
    contents: [
        {
            text: 'Performance review workflow builder'
        },
        {
            text: 'Flexible check-ins'
        },
        {
            text: '360- degree feedback'
        },
        {
            text: 'Skill tracking and development'
        },
        {
            text: 'Traditional and modern performance management'
        },
        {
            text: 'Adaptable to meet your unique needs'
        },
        {
            text: 'Easily integrated with third-party applications'
        },
        {
            text: 'Powerful graphical reporting'
        },
        {
            text: 'Alignment between staff and managers'
        },
    ],
    rightImg: "https://placehold.co/960x320"
}

const introData = {
    title: "Your talent experience platform",
    heading: "Heading",
    content: [
        "The Totara Talent Experience Platform comprises three powerful solutions to help you build a better workplace, increase resilience and prosper in today’s fast-changing world.",
    ]
}

const content = [
    "Upskill your workforce your way with the power and flexibility to deliver transformational learning.",
    "Traditional LMS solutions often force unnecessary compromises with their rigidity and high costs. Totara Learn, trusted by millions globally, offers a flexible and adaptable learning management system. It replaces the limitations of traditional LMS with an extendable enterprise solution tailored to your needs. Deliver your learning and compliance requirements with a powerful, cost-effective system designed to meet the unique needs of your organization."
]

const content2 = [
    "Engage, unite, and upskill your workforce to deliver high performance.",
    "Totara Engage, a leading learning experience platform (LXP), unites and upskills your workforce, driving superior organizational performance. Employees can create and curate custom resources from any device, while collaborative workspaces facilitate social learning and foster deep employee engagement throughout your organization."
]

const content3 = [
    "Harness the power of continuous performance management to boost workplace productivity, anytime, anywhere.",
    "Totara Perform is designed for adaptability and productivity, allowing you to create evidence-based performance reviews, gain an objective view of employee performance, and quickly identify and close skills gaps. This ensures your organization remains competitive. With Totara Perform, leverage continuous performance management to enhance productivity, whether in-office or remote, anytime and anywhere."
]
</script>