<template>
  <span
    class="typewriter"
    :class="`h-[74px] font-extrabold text-[74px] leading-[93px] max-md:leading-[60px] max-sm:text-[40px] max-sm:h-[40px] max-md:text-6xl max-xl:text-[60px] max-xl:h-[60px] max-lg:text-5xl max-lg:h-[48px]`"
    :style="{ color: currentColor }"
  >
    {{ displayText }}
  </span>
  <!-- <span class="cursor"></span> -->
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const list = [
  { name: "SCHOOLS", color: "white" },
  { name: "UNIVERSITIES", color: "#F468AF" },
  { name: "GOVERMENT", color: "#01E1ED" },
  { name: "STARTUPS", color: "white" },
  { name: "CORPORATES", color: "#F468AF" },
  { name: "ENTERPRISES", color: "#01E1ED" },
];

const displayText = ref("");
const currentColor = ref("white");
let currentIndex = 0;
let charIndex = 0;
let typingInterval;
let pauseTimeout;

const typeText = () => {
  if (charIndex < list[currentIndex].name.length) {
    displayText.value += list[currentIndex].name[charIndex];
    charIndex++;
  } else {
    clearInterval(typingInterval);
    pauseTimeout = setTimeout(() => {
      typingInterval = setInterval(eraseText, 100);
    }, 2000);
  }
};

const eraseText = () => {
  if (charIndex > 0) {
    displayText.value = list[currentIndex].name.substring(0, charIndex - 1);
    charIndex--;
  } else {
    clearInterval(typingInterval);
    currentIndex = (currentIndex + 1) % list.length;
    currentColor.value = list[currentIndex].color;
    typingInterval = setInterval(typeText, 100);
  }
};

onMounted(() => {
  currentColor.value = list[currentIndex].color;
  typingInterval = setInterval(typeText, 100);
});

onUnmounted(() => {
  clearInterval(typingInterval);
  clearTimeout(pauseTimeout);
});
</script>

<style scoped>
.typewriter-text {
  overflow: hidden;
  border-right: 0.15em solid transparent;
  white-space: nowrap;
  margin: 0 auto;
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

.cursor {
  display: inline-block;
  width: 3px;
  height: 50px;
  background-color: white;
  margin-left: 5px;
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}
</style>
