<template>
  <button
    :class="[
      'flex justify-center items-center gap-x-[10px] rounded-[4px] font-fustat-medium transition-all duration-300',
      variantClasses,
      sizeClasses,
      hoverClasses
    ]"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
  state: {
    type: String,
    default: 'default',
  },
  size: {
    type: String,
    default: 'small',
  },
});

// Remove hover state logic from here
const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      switch (props.state) {
        case 'active':
          return 'bg-background-primary-active text-white'; 
        case 'disabled':
          return 'bg-background-disable text-background-text-disable'; 
        default:
          return 'bg-background-primary-default text-white'; 
      }
    case 'secondary':
      switch (props.state) {
        case 'active':
          return 'bg-background-secondary-active border border-background-border-primary text-background-text-primary'; 
        case 'disabled':
          return 'border border-background-border-disable text-background-text-disable';
        default:
          return 'bg-background-secondary-default border border-background-border-primary text-background-text-primary'; 
      }
    case 'tertiary':
      switch (props.state) {
        case 'active':
          return 'border border-background-subtle-3 text-background-text-default'; 
        case 'disabled':
          return 'border border-background-border-disable text-background-text-disable'; 
        default:
          return 'border border-background-subtle-3 text-background-text-default'; 
      }
    case 'danger':
      switch (props.state) {
        case 'disabled':
          return 'bg-background-disable text-background-text-disable'; 
        default:
          return 'bg-background-danger-default text-white'; 
      }
    default:
      return 'bg-background-primary-default text-white'; 
  }
});


const hoverClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'hover:bg-background-primary-hover'; 
    case 'secondary':
      return 'hover:bg-background-secondary-hover';
    case 'tertiary':
      return 'hover:bg-background-tertiary-hover'; 
    case 'danger':
      return 'hover:bg-background-danger-hover';
    default:
      return 'hover:bg-background-primary-hover'; 
  }
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'small':
      return 'text-sm py-[6px] px-4';
    case 'medium':
      return 'text-base py-2 px-6';
    case 'large':
      return 'text-base py-3 px-6';
    default:
      return 'text-base py-2 px-6';
  }
});
</script>
