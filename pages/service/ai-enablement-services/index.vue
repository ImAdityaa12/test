<template>
    <div class=" relative ">
        <div class="overflow-hidden  z-[1]" >
            <UiHero :title="heroData.title" :subtitles="heroData.subtitles" :rightImg="heroData.rightImg" :cta="heroData.cta"
            :barImg="heroData.barImg" :config="configObject" />
        </div>
        
        <UiIntro :title="introData.title" :heading="introData.heading" :content="introData.content" />
        <UiGridCard :data="servicesData.data" :heading="servicesData.heading" :title="servicesData.title"
            :subtitle="servicesData.subtitle" columns="4" />
        <div class="  py-[120px] bg-[#F7F9FC]">
            <LmsList class="wrapper" :contents="capabilitiesData.contents" :icon="capabilitiesData.icon" :rightImg="capabilitiesData.rightImg" />
        </div>
        <UiGridCardSplit :data="transformativeData.data" :heading="transformativeData.heading" :title="transformativeData.title"
        :subtitle="transformativeData.subtitle"  :isDark="true" bg="bg-[#122137]" text="text-white" :isReverse="true" />
        <!-- <UiGridCardSplit :data="applicationsData.data" :heading="applicationsData.heading" :title="applicationsData.title"
            :subtitle="applicationsData.subtitle"  /> -->
        <UiStickyScroll :data="applicationsData.data" :heading="applicationsData.heading" :title="applicationsData.title"
        :subtitle="applicationsData.subtitle" />    
        <UiGridCard :data="safegaurdData.data" :heading="safegaurdData.heading" :title="safegaurdData.title"
            :subtitle="safegaurdData.subtitle" bg="bg-white"  />
        <UiConnect :cards="lmsConnectData.cards" :heading="lmsConnectData.heading" :title="lmsConnectData.title"
            :subtitle="lmsConnectData.subtitle" />
    </div>
</template>

<script setup>
const heroData = {
    title: "Empower Your Business with AI",
    subtitles:["Harness the transformative power of AI to innovate, optimize, and scale your operations seamlessly.",
                "At Edvanta, we integrate AI into your enterprise, unlocking unparalleled efficiency, smarter decision-making, and accelerated growth. Whether it's personalizing customer interactions, streamlining IT processes, or driving superior business outcomes, our AI solutions are tailored to propel your success to the next level."
    ], 
    rightImg: "https://placehold.co/648x371"
    ,
    cta: [
        {
            text: "Explore AI solutions",
            href: "/"
        },
        {
            text: "Schedule a demo",
            href: "/",
        }
    ],
    barImg: "/aiHeroBar.png"
}
const lmsConnectData = {
    heading: "Connect with us",
    title: "Your Journey to AI Excellence Starts Here",
    subtitle: "AI is reshaping the business landscape, and the opportunities are endless. Whether you’re ready to implement powerful AI solutions or need expert advice to guide your strategy, Edvanta is here to help. Our team of AI specialists is dedicated to helping you harness the full potential of AI to drive innovation, enhance efficiency, and secure your competitive edge.",
    cards: [
        {
            id: "1",
            title: "Ready to go?",
            content: "Get ready with AI driven success today",
            button: "Get in Touch"
        },
        {
            id: "2",
            title: "Need advice",
            content: "Schedule a consultation to explore the best AI strategy for your business",
            button: "Schedule a meeting"
        },
    ],

}
const introData={
    title:"AI Enablement: Transforming Potential into Performance",
    heading:"Seamlessly Integrating AI Across Your Organization",
    content:[
        "AI Enablement is more than just implementing AI—it's about embedding AI deeply into your business operations. This process aligns AI capabilities with your business goals, enhancing decision-making, driving innovation, and optimizing efficiency. At Edvanta, we collaborate with you to craft and execute AI strategies that are uniquely suited to your needs, ensuring AI is not just a tool, but a catalyst for growth across every aspect of your organization.",
        "This approach sets AI Enablement apart by focusing on strategic, integrated AI solutions that drive business success."
    ]
}

const servicesData={
    heading:"Empowering Your Business with Advanced AI Solutions",
    title:"AI Services Designed for Innovation and Efficiency",
    subtitle:"Edvanta’s AI Enablement services are designed to seamlessly integrate AI into your business processes, unlocking new levels of innovation and efficiency. From model development to deployment and maintenance, our comprehensive services cover every stage of AI implementation. Whether you're looking to enhance customer experiences, optimize operations, or scale AI solutions, our expert team ensures that AI becomes a strategic asset in your organization, driving measurable outcomes and sustainable growth.",
    data:[
    {
        title: 'Model Development',
        description: 'Build intelligent AI models tailored to your industry needs using cutting-edge tools and technologies.',
        icon: '/icons/aiEnable/deployed_code_account.svg'
    },
    {
        title: 'Model Maintenance',
        description: 'Ensure your AI models remain effective over time with ongoing support and adaptation to evolving data patterns.',
        icon: '/icons/aiEnable/deployed_code_account-1.svg'
    },
    {
        title: 'Model Implementation',
        description: 'Seamlessly integrate AI models into real-world applications, enabling you to leverage AI-driven insights effectively.',
        icon: '/icons/aiEnable/rule_settings.svg'
    },
    {
        title: 'Data Quality and Governance',
        description: 'Maintain superior data quality and implement strong governance to ensure the accuracy and reliability of AI outcomes.',
        icon: '/icons/aiEnable/thumb_up.svg'
    },
    
    ]
}

const capabilitiesData={
    contents:[
        {
            title:"Conversational AI",
            text:"Use generative AI to enhance customer interactions and streamline support services.",
        },
        {
            title:"AI-Powered Data Transformation",
            text:"Maximize the use of your data with advanced analytics and machine learning.",
        },
        {
            title:"Predictive Analytics",
            text:"Make informed decisions with AI-driven insights and forecasting",
        },
        {
            title:"Custom AI Model Development  ",
            text:"Develop tailored AI applications to meet your unique business requirements.",
        },
        {
            title:"AI-Enhanced Data Management",
            text:"Maximize the value of your data with AI tools that automate data collection, cleansing, and analysis.",
        },
        {
            title:"Cognitive Automation",
            text:"Automate complex tasks with AI-driven RPA (Robotic Process Automation) for improved efficiency and accuracy.",
        },
    ],
    icon:"/icons/aiEnable/verified.svg",
    rightImg:"https://placehold.co/648x371"

}

const transformativeData={
    heading:"Heading",
    title:"Transformative Benefits Tailored to Your Needs",
    subtitle:"Embrace the power of AI to revolutionize your business operations, enhance decision-making, and stay ahead in a competitive landscape. With Edvanta’s AI enablement services, you gain access to cutting-edge technologies and expertise that drive efficiency, innovation, and growth.",
    data:[
    {
        title: 'Enhanced Efficiency',
        description: 'Automate processes and optimize workflows to achieve higher productivity with less effort.',
        icon: '/icons/aiEnable/our_approch.svg'
    },
    {
        title: 'Data-Driven Insights',
        description: 'Leverage AI to turn vast amounts of data into actionable insights, improving decision-making across the board.',
        icon: '/icons/aiEnable/search_insights.svg'
    },
    {
        title: 'Scalable Solutions',
        description: 'Implement AI solutions that grow with your business, adapting to new challenges and opportunities.',
        icon: '/icons/aiEnable/fit_screen.svg'
    },
    {
        title: 'Cost Savings',
        description: 'Reduce operational costs through AI-driven automation and optimization, freeing up resources for innovation.',
        icon: '/icons/aiEnable/fit_screen-1.svg'
    },
    {
        title: 'Competitive Advantage',
        description: 'Stay ahead of the curve with AI technologies that give you the edge over competitors.',
        icon: '/icons/aiEnable/compare.svg'
    },
    
    ]
}
const applicationsData={
    heading:"Heading",
    title:"Real-World Applications of AI",
    subtitle:"Unlock AI's Potential Across Diverse Industries with Edvanta’s AI expertise, you can implement solutions that drive innovation and deliver measurable results, tailored to your specific industry needs.",
    data:[
    {
        id:0,
        title: 'Customer Interaction Enhancement',
        description: 'Use AI-driven chatbots and virtual assistants to provide personalized, 24/7 customer support, improving satisfaction and engagement.',
        icon: '/icons/aiEnable/interactive_space.svg',
        banner:"https://picsum.photos/id/60/700/500"
    },
    {
        id:1,
        title: 'Predictive Maintenance',
        description: 'Implement AI-powered predictive analytics to monitor and forecast maintenance needs, reducing downtime and operational costs.',
        icon: '/icons/aiEnable/screen_search_desktop.svg',
        banner:"https://picsum.photos/id/61/700/500"
    },
    {
        id:2,
        title: 'Fraud Detection',
        description: 'Leverage AI to detect anomalies, protecting your business from potential fraud',
        icon: '/icons/aiEnable/lock.svg',
        banner:"https://picsum.photos/id/63/700/500"
    },
    /* {
        title: 'Supply Chain Optimization',
        description: 'Use AI algorithms to forecast demand, optimize inventory levels, and streamline supply chain operations, ensuring efficiency and cost savings.',
        icon: '/icons/aiEnable/settings.svg'
    },
    {
        title: 'Personalized Marketing Campaigns',
        description: 'Employ AI to analyze customer data and deliver targeted marketing campaigns that resonate with individual preferences, boosting conversion rates.',
        icon: '/icons/aiEnable/campaign.svg'
    },
    {
        title: 'Talent Acquisition and Management',
        description: 'Utilize AI to scan applications, identify top talent, and manage employee performance, streamlining the recruitment and retention processes.',
        icon: '/icons/aiEnable/groups.svg'
    }, */
    
    ]
}
const safegaurdData={
    heading:"Your Trusted AI Partner",
    title:"Safeguarding Your Data, Empowering Your Future",
    subtitle:"At Edvanta, we understand that in the age of AI, data privacy, security, and safety are paramount. As your trusted AI partner, we ensure that our solutions not only deliver cutting-edge innovation but also adhere to the highest standards of data protection. Our robust security frameworks, responsible AI practices, and commitment to transparency guarantee that your data is safe, secure, and used ethically. Partner with Edvanta to leverage AI with confidence, knowing that your most valuable assets are in safe hands.",
    data:[
    {
        title: 'Data Privacy Commitment',
        description: 'We implement stringent data privacy protocols to protect your sensitive information, ensuring compliance with global regulations.',
        icon: '/icons/aiEnable/encrypted.svg'
    },
    {
        title: 'Secure AI Infrastructure',
        description: 'Our AI solutions are built on secure, scalable infrastructures, incorporating advanced encryption and multi-factor authentication to prevent unauthorized access.',
        icon: '/icons/aiEnable/lock.svg'
    },
    {
        title: 'Ethical AI Practices',
        description: 'We adhere to responsible AI principles, reducing bias, enhancing transparency, and ensuring that our AI models are fair and trustworthy.',
        icon: '/icons/aiEnable/our_approch2.svg'
    },
    {
        title: 'End-to-End Data Security',
        description: 'From data collection to model deployment, our end-to-end security measures protect your data at every stage of the AI lifecycle.',
        icon: '/icons/aiEnable/rubric.svg'
    },
    {
        title: 'Proactive Risk Management',
        description: 'We continually monitor and assess potential risks, employing cutting-edge technologies to safeguard against threats and ensure the integrity of your AI systems.',
        icon: '/icons/aiEnable/dns.svg'
    }, 
    ]
}
const configObject = {
  bgColor1: 'rgb(225,146,0)',
  bgColor2: 'rgb(239,179,29)',
  color1: '103,192,114',
  color2: '234,209,124',
  color3: '206,104,0',
  color4: '31,233,55',
  color5: '120,89,12',
  colorInteractive: '140, 100, 255',
  circleSize: '80%',
  blending: 'hard-light',
};
</script>

