<template>
    <div class="bg-[#122137] text-white py-[120px]">
        <div class="wrapper grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-12">
            <div class="space-y-6">
                <span class="text-[18px] font-extrabold">Section name</span>
                <h3 class="font-extrabold text-4xl md:text-[32px] md:leading-[36px]">Moodle LMS and Beyond</h3>
                <p class="font-medium text-[18px] leading-[28px]">Partner with Edvanta for a comprehensive suite of
                    Moodle-related services designed to enhance and optimize your learning platform.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 ">
                <UiIconCard v-for="(section, i) in data" :key="i" :title="section.title"
                    :description="section.description" class="border-b-2 border-white py-4">
                    <img :src="section.icon" alt="" class="size-12 hidden">
                </UiIconCard>
            </div>
        </div>
    </div>
</template>

<script setup>
// import { ref, computed, onMounted } from "vue";

const data = [
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


// // Duplicate the data for seamless scrolling
// const duplicatedData = computed(() => {
//     return [
//         ...data,
//         ...data.map((item) => ({
//             ...item,
//             id: item.id + data.length,
//         })),
//     ];
// });

// const scrollContainer = ref(null);
// const scrollWidth = ref(0);

// onMounted(() => {
//     if (scrollContainer.value) {
//         // Calculate the width of a single set of items
//         const itemWidth = scrollContainer.value.scrollWidth / 2;
//         scrollWidth.value = itemWidth;
//     }
// });
</script>

<!-- <style scoped>
@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(-1 * var(--scroll-width)));
    }
}

.animate-scroll {
    animation: scroll 30s linear infinite;
}

/* Optional: Pause animation on hover */
.animate-scroll:hover {
    animation-play-state: paused;
}

.scrollArea::before {
    content: '';
    height: 100%;
    width: 30px;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(to right, rgba(247, 249, 252, 1) 0%, rgba(247, 249, 252, .7) 50%, rgba(247, 249, 252, 0) 100%);
    z-index: 3;
}

.scrollArea::after {
    content: '';
    height: 100%;
    width: 30px;
    position: absolute;
    right: 0;
    top: 0;
    background: linear-gradient(to left, rgba(247, 249, 252, 1) 0%, rgba(247, 249, 252, .7) 50%, rgba(247, 249, 252, 0) 100%);
    z-index: 3;
}
</style> -->