<template>
    <div :style="{ background: `linear-gradient(40deg, ${bgColor1}, ${bgColor2})` }" class="gradient-bg relative">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div class="gradients-container">
        <div :style="{ background: `radial-gradient(circle at center, rgba(${color1}, 0.8) 0, rgba(${color1}, 0) 50%)` }" class="g1"></div>
        <div :style="{ background: `radial-gradient(circle at center, rgba(${color2}, 0.8) 0, rgba(${color2}, 0) 50%)` }" class="g2"></div>
        <div :style="{ background: `radial-gradient(circle at center, rgba(${color3}, 0.8) 0, rgba(${color3}, 0) 50%)` }" class="g3"></div>
        <div :style="{ background: `radial-gradient(circle at center, rgba(${color4}, 0.8) 0, rgba(${color4}, 0) 50%)` }" class="g4"></div>
        <div :style="{ background: `radial-gradient(circle at center, rgba(${color5}, 0.8) 0, rgba(${color5}, 0) 50%)` }" class="g5"></div>
<!--         <div :style="{ background: `radial-gradient(circle at center, rgba(${colorInteractive}, 0.8) 0, rgba(${colorInteractive}, 0) 50%)` }" class="interactive"></div> -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { toRefs } from 'vue';
  
  // Destructure props inside script
  const props = defineProps({
    config: {
      type: Object,
      required: true,
    },
  });
  
  // Destructure props object for individual use
  const {
    bgColor1,
    bgColor2,
    color1,
    color2,
    color3,
    color4,
    color5,
    colorInteractive,
    circleSize,
    blending
  } = toRefs(props.config);
  </script>
  
  <style scoped lang="scss">
  @keyframes moveInCircle {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  @keyframes moveVertical {
    0% {
      transform: translateY(-50%);
    }
    50% {
      transform: translateY(50%);
    }
    100% {
      transform: translateY(-50%);
    }
  }
  
  @keyframes moveHorizontal {
    0% {
      transform: translateX(-50%) translateY(-10%);
    }
    50% {
      transform: translateX(50%) translateY(10%);
    }
    100% {
      transform: translateX(-50%) translateY(-10%);
    }
  }
  
  .gradient-bg {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  
    svg {
      display: none;
    }
  
    .gradients-container {
      filter: url(#goo) blur(40px);
      width: 100%;
      height: 100%;
    }
  
    .g1, .g2, .g3, .g4, .g5, .interactive {
      position: absolute;
      mix-blend-mode: hard-light; /* Default blend mode */
      width: 80%; /* Default circle size */
      height: 80%;
      top: calc(50% - 40%);
      left: calc(50% - 40%);
      opacity: 1;
    }
  
    .g1 {
      animation: moveVertical 30s ease infinite;
    }
  
    .g2 {
      transform-origin: calc(50% - 400px);
      animation: moveInCircle 20s reverse infinite;
    }
  
    .g3 {
      transform-origin: calc(50% + 400px);
      animation: moveInCircle 40s linear infinite;
    }
  
    .g4 {
      transform-origin: calc(50% - 200px);
      animation: moveHorizontal 40s ease infinite;
      opacity: 0.7;
    }
  
    .g5 {
      width: 160%; /* Adjusted for this element */
      height: 160%;
      transform-origin: calc(50% - 800px) calc(50% + 200px);
      animation: moveInCircle 20s ease infinite;
    }
  
    .interactive {
      top: -50%;
      left: -50%;
      opacity: 0.7;
    }
  }
  </style>
  