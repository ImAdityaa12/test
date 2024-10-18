<template>
    <div class="bg-[#F7F9FC]">
        <div class="wrapper py-[120px]">
            <h3 class="text-[18px] leading-[24px] font-extrabold">Heading</h3>
            <h2 class="mt-6 mb-[64px] text-[36px] leading-[44px] font-extrabold">Canvas for every level of learning</h2>
            <LmsList :contents="keyData.contents" :rightImg="keyData.rightImg" icon="/icons/lms/verified.svg" />
        </div>
    </div>
</template>

<script setup>
const keyData = {
    contents: [
        {
            title: 'User-Friendly Interface',
            text: 'Intuitive design that makes it easy for educators and learners to navigate and use.'
        },
        {
            title: 'Mobile Accessibility',
            text: 'Access courses and content anytime, anywhere with fully responsive mobile support.'
        },
        {
            title: 'Integration Capabilities',
            text: 'Seamlessly integrates with third-party tools and applications to enhance functionality.'
        },
        {
            title: 'Custom Learning Paths',
            text: 'Personalize learning experiences to meet the unique needs of every learner.'
        },
    ],
    rightImg: "https://placehold.co/770x420",
    icon: ""
}
</script>