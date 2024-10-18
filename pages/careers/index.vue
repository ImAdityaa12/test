<script setup>
import { ref, computed } from 'vue';
const jobs = [
    {
        title: 'UI/UX Designer(Figma Expert)- Junior/Fresher',
        location: 'Noida, UttarPradesh, India',
        jobType: 'Full Time',
        jobDescription: 'We are looking for a UI/UX Designer to turn our software into easy-to-use products for our clients. UI/UX Designer responsibilities include gathering user requirements, designing graphic elements and building navigation components. To be successful in this role, you should have experience with design software and wireframe tools. If you also have a portfolio of professional design projects that includes work with web/mobile applications, we’d like to meet you. Ultimately, you’ll create both functional and appealing features that address our clients’ needs and help us grow our customer base.',
        skills: [
            'Figma',
            'Adobe XD',
            'Sketch',
            'InVision'
        ],
        date: '2024-10-10'
    },
    {
        title: 'Frontend Engineer',
        location: 'Noida, UttarPradesh, India',
        jobType: 'Contract',
        jobDescription: 'We are looking for a Frontend Engineer to join our engineering team and help us develop and maintain various software products. Frontend Engineer responsibilities include creating user-friendly web applications and working with other engineers to solve complex problems. To be successful in this role, you should have extensive experience building web applications from scratch and in-depth knowledge of JavaScript, CSS, and HTML. If you are passionate about writing code and developing user-friendly layouts, we would like to meet you. Ultimately, you will be responsible for designing and implementing highly responsive user interfaces that align with our business needs.',
        skills: [
            'JavaScript',
            'React',
            'HTML',
            'CSS',

        ],
        date: '2024-10-10'
    },
    {
        title: 'Product Manager',
        location: 'gurugram, UttarPradesh, India',
        jobType: 'Full Time',
        jobDescription: 'We are looking for a Product Manager to join our team and lead the development of our products. Product Manager responsibilities include conducting market research, creating product requirements, and working with the engineering team to develop and launch new products. To be successful in this role, you should have experience in product management and a deep understanding of the software development process. If you have a passion for building great products and a track record of delivering successful products to market, we’d like to meet you. Ultimately, you will be responsible for defining and delivering products that meet our customers’ needs and drive our business growth.',
        skills: [
            'Product Management',
            'Market Research',
            'Software Development',
            'Agile Methodologies'
        ],
        date: '2024-10-10'

    }
]

let jobTitleOrSkills = '';
let searchLocation = ''
const jobTypes = ['Full Time', 'Contract', 'Part Time'];
const currentLocation = ref(null)
const currentTitileorSkills = ref(null);
const currentJobType = ref([]);
const filteredJobs = computed(() => {
    if (!currentLocation.value && !currentTitileorSkills.value && !currentJobType.value.length) {
        return jobs;
    }
    return jobs.filter(job => {
        let isLocation = true;
        let isTitleorSkills = true;
        let isJobType = true;
        if (currentLocation.value) {
            isLocation = job.location.toLowerCase().includes(currentLocation.value.toLowerCase());
        }
        if (currentTitileorSkills.value) {
            isTitleorSkills = job.title.toLowerCase().includes(currentTitileorSkills.value.toLowerCase());
        }
        if (currentJobType.value.length) {
            isJobType = currentJobType.value.map((jobType) => job.jobType.toLowerCase() === jobType.toLowerCase()).includes(true);

        }
        return isLocation && isTitleorSkills && isJobType;
    })
})

const handleSearch = () => {
    currentTitileorSkills.value = jobTitleOrSkills;
    currentLocation.value = searchLocation;

    console.log(currentLocation.value, currentTitileorSkills.value, currentJobType.value)

}

</script>

<template>
    <div class="w-full flex flex-col items-center ">
        <div
            class="w-full flex flex-col items-center relative bg-[#F7F9FC] -z-10 -skew-y-[5deg] -mt-[90px] lg:-mt[150px]">
            <div
                class="max-w-[1440px] flex flex-col justify-between items-center gap-11 px-6 pb-[90px] pt-[180px] lg:px-[68px] lg:pb-[230px] lg:pt-[230px] 2xl:px-0 lg:flex-row skew-y-[5deg]">
                <div class="flex flex-col gap-8 items-start lg:w-1/2 ">
                    <h1 class="text-[44px] lg:text-[64px] font-fustat-extrabold leading-[55px]">We're an Agile Team</h1>
                    <p class="text-lg font-fustat-medium">Transformation is the key to a continuously evolving
                        organization. With the speeding changes in workforce development and orientation, it is
                        inevitable that technology will play a huge role in optimizing the overall efficiency of
                        assisted evolution. Digital businesses are on the rise; and our vision is to create
                        well-articulated, integrated solutions which have the potential to bring about a coherent change
                        that is sustainable, measurable, and effective and eventually leads to a cognitive revolution.
                    </p>
                    <button class=" flex justify-center items-center  text-base font-fustat-bold ">
                        <p>About edvanta</p> <img src="/icons/aboutus/rightArrow.svg" alt="" class="h-5 w-5 p-[5px]">
                    </button>

                </div>
                <img src="https://placehold.co/648x455" alt="" class="mx-auto  rounded-2xl  h-full bg-cover lg:w-1/2">
            </div>
            <div class="w-full flex h-60 absolute  -z-[1] bottom-0">
                <div class="w-1/2 bg-[#F27F22]"></div>
                <div class="w-1/2 bg-[#F7F9FC]"></div>
            </div>
        </div>

        <div
            class="max-w-[1440px] w-full px-6 py-[60px] md:px-11 md:py-[120px] lg:px-[68px] 2xl:px-0 flex flex-col gap-6 ">
            <p class="text-lg leading-6 font-fustat-bolder">Open roles</p>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-3 ">
                <!-- Heading -->
                <p class="text-4xl leading-tight font-fustat-extrabold col-span-1 md:col-span-3 ">We're Hiring</p>

                <!-- Spacer for layout on larger screens -->
                <div class="hidden md:inline-block"></div>

                <!-- Search inputs -->
                <div class="col-span-1 md:col-span-2">
                    <div class="flex flex-col gap-4 md:flex-row md:gap-2 pb-5 border-b-[1px] border-black">
                        <input type="text" placeholder="Title or Skills"
                            class="border bg-[#F7F9FC] border-gray-300 rounded p-2 w-full" v-model="jobTitleOrSkills">
                        <input type="text" placeholder="Location"
                            class="border bg-[#F7F9FC] border-gray-300 rounded p-2 w-full" v-model="searchLocation">
                        <button class="btn btn-primary w-fit" @click="handleSearch">Search</button>
                    </div>
                </div>

                <!-- Job type filter -->
                <div class="col-span-1">
                    <div class="flex flex-col">
                        <p class="mt-4">Job Type:</p>
                        <div class="flex flex-wrap gap-2 md:flex-col md:flex-nowrap">
                            <div class="flex items-center" v-for="jobType in jobTypes" :key="jobType">
                                <input type="checkbox" :name="jobType" v-model="currentJobType" :value="jobType"
                                    class="mr-2">
                                <label :for="jobType">{{ jobType }}</label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Job listings -->
                <div class="col-span-1 md:col-span-2 ">
                    <div class="flex flex-col gap-4">
                        <div class="flex flex-col gap-2 text-[#5a46e3]" v-for="job in filteredJobs" :key="job.title">
                            <div class="flex justify-between">
                                <p class="text-lg font-fustat-extrabold text-[#002FDF]">{{ job.title }}</p>
                                <p class="text-base font-fustat-medium">{{ job.jobType }}</p>


                            </div>
                            <div class="flex justify-between">
                                <p class="text-base font-fustat-bold">{{ job.location }}</p>
                                <p class="text-base font-fustat-medium">{{ job.date }}</p>


                            </div>
                            <p>{{ job.jobDescription.slice(0, 200) }}...</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>



    </div>
</template>