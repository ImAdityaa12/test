<template>
    <svg :fill="iconColor" :viewBox="icon.viewBox" width="24" height="24">
        <component :is="iconImg" />
    </svg>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    iconColor: {
        type: String,
        default: 'black'
    },
    icon: {
        type: String,
        required: true
    }
});

const iconColor = ref('black');
const icon = ref(props.icon);

const iconImg = ref(null);



onMounted(() => {
    import(`../../public/icons/${icon.value}.svg`)
        .then(module => {
            iconImg.value = module.default;
        })
        .catch(error => {
            console.error('Error loading icon:', error);
        });
});

</script>