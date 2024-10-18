<template>
  <div
    class="w-full min-h-[calc(100vh-108px)] mb-20 max-sm:min-h-[calc(100vh-70px)] max-md:h-[540px] max-md:min-h-[540px]">
    <div
      class="absolute w-full h-full -z-10 gradient-bg overflow-hidden gradients-container max-md:h-[540px] max-md:mt-[80px] max-sm:h-full max-sm:mt-0">
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
        <div class="g1"></div>
        <div class="g2"></div>
        <div class="g3"></div>
        <div class="g4"></div>
        <div class="g5"></div>
        <div ref="interBubble" class="interactive"></div>
      </div>
    </div>
    <div
      class="max-w-[1440px] flex items-center justify-between mx-auto 2xl:px-0 md:px-11 px-6 max-md:h-[540px] max-sm:h-full">
      <div
        class="w-[65%] md:min-h-[calc(100vh-108px)] flex items-center max-md:w-full max-md:h-fit max-md:py-5 max-sm:py-0">
        <div class="flex flex-col gap-7 max-md:max-w-[100%] justify-between h-full">
          <h1
            class="max-w-[75%] xl:text-7xl leading-[80px] font-extrabold text-white max-md:leading-[60px] max-sm:text-[40px] max-md:text-6xl max-xl:text-[60px] max-lg:text-5xl flex flex-col">
            INNOVATING FOR
            <TypeWriter />
          </h1>
          <p class="text-[18px] leading-[28px] text-white w-full">
            We deliver comprehensive e-learning solutions through cutting-edge
            content and platforms. We streamline your learning and development
            journey, providing the tools and support needed for success in
            today's fast-paced world.
          </p>
          <button class="btn btn-primary font-[500] text-sm py-3 w-fit mt-4 max-md:mt-10">
            See what we do
            <span>→</span>
          </button>
        </div>
      </div>
      <div class="w-[471px] h-[449px] flex items-center justify-center max-md:hidden max-xl:w-[400x] max-xl:h-[300px]">
        <img src="/logo-big.svg" class="w-full h-full object-contain" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import TypeWriter from "./TypeWriter.vue";
const interBubble = ref < HTMLDivElement | null > (null);
let curX = 0;
let curY = 0;
let tgX = 0;
let tgY = 0;
let animationFrameId: number | null = null;

function move(): void {
  if (!interBubble.value) return;

  curX += (tgX - curX) / 20;
  curY += (tgY - curY) / 20;

  interBubble.value.style.transform = `translate(${Math.round(
    curX
  )}px, ${Math.round(curY)}px)`;

  animationFrameId = requestAnimationFrame(move);
}

function handleMouseMove(event: MouseEvent): void {
  tgX = event.clientX;
  tgY = event.clientY;
}

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
  move();
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
  }
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

html,
body {
  font-family: "Dongle", sans-serif;
  margin: 0;
  padding: 0;
}

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
  overflow: hidden;
  background: linear-gradient(40deg, rgb(108, 0, 162), rgb(0, 17, 82));
  top: 0;
  left: 0;

  svg {
    display: none;
  }

  .gradients-container {
    filter: url(#goo) blur(40px);
    width: 100%;
    height: 100%;
  }

  .g1 {
    position: absolute;
    background: radial-gradient(circle at center,
        rgba(18, 113, 255, 0.8) 0,
        rgba(18, 113, 255, 0) 50%) no-repeat;
    mix-blend-mode: hard-light;

    width: 80%;
    height: 80%;
    top: calc(50% - 80% / 2);
    left: calc(50% - 80% / 2);

    transform-origin: center center;
    animation: moveVertical 30s ease infinite;

    opacity: 1;
  }

  .g2 {
    position: absolute;
    background: radial-gradient(circle at center,
        rgba(221, 74, 255, 0.8) 0,
        rgba(221, 74, 255, 0) 50%) no-repeat;
    mix-blend-mode: hard-light;

    width: 80%;
    height: 80%;
    top: calc(50% - 80% / 2);
    left: calc(50% - 80% / 2);

    transform-origin: calc(50% - 400px);
    animation: moveInCircle 20s reverse infinite;

    opacity: 1;
  }

  .g3 {
    position: absolute;
    background: radial-gradient(circle at center,
        rgba(100, 220, 255, 0.8) 0,
        rgba(100, 220, 255, 0) 50%) no-repeat;
    mix-blend-mode: hard-light;

    width: 80%;
    height: 80%;
    top: calc(50% - 80% / 2 + 200px);
    left: calc(50% - 80% / 2 - 500px);

    transform-origin: calc(50% + 400px);
    animation: moveInCircle 40s linear infinite;

    opacity: 1;
  }

  .g4 {
    position: absolute;
    background: radial-gradient(circle at center,
        rgba(200, 50, 50, 0.8) 0,
        rgba(200, 50, 50, 0) 50%) no-repeat;
    mix-blend-mode: hard-light;

    width: 80%;
    height: 80%;
    top: calc(50% - 80% / 2);
    left: calc(50% - 80% / 2);

    transform-origin: calc(50% - 200px);
    animation: moveHorizontal 40s ease infinite;

    opacity: 0.7;
  }

  .g5 {
    position: absolute;
    background: radial-gradient(circle at center,
        rgba(180, 180, 50, 0.8) 0,
        rgba(180, 180, 50, 0) 50%) no-repeat;
    mix-blend-mode: hard-light;

    width: calc(80% * 2);
    height: calc(80% * 2);
    top: calc(50% - 80%);
    left: calc(50% - 80%);

    transform-origin: calc(50% - 800px) calc(50% + 200px);
    animation: moveInCircle 20s ease infinite;

    opacity: 1;
  }

  .interactive {
    position: absolute;
    background: radial-gradient(circle at center,
        rgba(140, 100, 255, 0.8) 0,
        rgba(140, 100, 255, 0) 50%) no-repeat;
    mix-blend-mode: hard-light;

    width: 100%;
    height: 100%;
    top: -50%;
    left: -50%;

    opacity: 0.7;
  }
}
</style>