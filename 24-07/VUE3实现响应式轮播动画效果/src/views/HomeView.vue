<template>
  <div class="carousel relative h-100vh bg-#55a0f0 overflow-hidden">
    <div class="absolute bottom--960px w-1600px h-1600px left-50% transform-translate-x--50%">
      <div class="img-list h-inherit transform-rotate-90deg">
        <div
          class="img-slider relative h-inherit flex items-center transition-all duration-500 transition-ease-in-out"
          :style="`transform: rotate(${-90 * indexSlider}deg)`"
        >
          <div
            :class="`img-item fruit left-0 absolute ${currIndex === index ? 'active' : ''}`"
            :style="`transform: rotate(${(360 / 4) * index}deg)`"
            v-for="(item, index) in imageList"
            :key="index"
          >
            <img :src="item.fruit" :alt="item.fruit" />
          </div>
          <div
            class="img-item left-0 absolute"
            :style="`transform: rotate(${(360 / 4) * index}deg)`"
            v-for="(item, index) in imageList"
            :key="index"
          >
            <img :src="item.src" :alt="item.src" />
          </div>
        </div>
      </div>
    </div>

    <!--  描述  -->
    <div
      ref="infoBoxRef"
      class="info-box absolute right-8% bottom-5% w-350px h-150px flex flex-col overflow-hidden lt-md:w-84%"
    >
      <div
        ref="infoSliderRef"
        class="info-slider transition-all transition-duration-500"
        @transitionend="handleTransitionEnd"
      >
        <div
          class="info-item color-white flex flex-col h-150px"
          v-for="(item, index) in imageList"
          :key="index"
        >
          <h2 class="font-size-24px mb-6px">{{ item.title }}</h2>
          <p>
            {{ item.desc }}
          </p>
        </div>
      </div>
    </div>

    <!--  切换按钮  -->
    <div
      class="navigation absolute left-50% top-50% transform-translate-x--50% transform-translate-y--50% w-90% flex justify-between z-90"
    >
      <span class="prev-btn" @click="handlePrev">
        <i class="i-formkit-left"></i>
      </span>
      <span class="next-btn" @click="handleNext">
        <i class="i-formkit-right"></i>
      </span>
    </div>

    <!--  标题  -->
    <div class="large-text">
      <h2>과 일 음 료</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
const imageList = [
  {
    src: '/images/can1.png',
    fruit: '/images/fruit1.png',
    title: 'Blueberry',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolore doloribus eaque itaque laudantium nemo non nulla pariatur rerum'
  },
  {
    src: '/images/can2.png',
    fruit: '/images/fruit2.png',
    title: 'Orange',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolore doloribus eaque itaque laudantium nemo non nulla pariatur rerum'
  },
  {
    src: '/images/can3.png',
    fruit: '/images/fruit3.png',
    title: 'Green Apple',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolore doloribus eaque itaque laudantium nemo non nulla pariatur rerum'
  },
  {
    src: '/images/can4.png',
    fruit: '/images/fruit4.png',
    title: 'Strawberry',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolore doloribus eaque itaque laudantium nemo non nulla pariatur rerum'
  }
]

const indexSlider = ref(0)
const currIndex = ref(0)
const direction = ref()
const infoBoxRef = ref()
const infoSliderRef = ref()

function handleNext() {
  indexSlider.value++
  currIndex.value++
  if (currIndex.value > imageList.length - 1) {
    currIndex.value = 0
  }

  if (direction.value === 1) {
    infoSliderRef.value.prepend(infoSliderRef.value.lastElementChild)
  }

  direction.value = -1
  infoBoxRef.value.style.justifyContent = `flex-start`
  infoSliderRef.value.style.transform = `translateY(-25%)`
}

function handlePrev() {
  indexSlider.value--
  currIndex.value--
  if (currIndex.value < 0) {
    currIndex.value = imageList.length - 1
  }

  if (direction.value === -1) {
    infoSliderRef.value.appendChild(infoSliderRef.value.firstElementChild)
  }

  direction.value = 1
  infoBoxRef.value.style.justifyContent = `flex-end`
  infoSliderRef.value.style.transform = `translateY(25%)`
}

function handleTransitionEnd() {
  if (direction.value === -1) {
    infoSliderRef.value.appendChild(infoSliderRef.value.firstElementChild)
  } else if (direction.value === 1) {
    infoSliderRef.value.prepend(infoSliderRef.value.lastElementChild)
  }

  infoSliderRef.value.style.transition = `none`
  infoSliderRef.value.style.transform = `translateY(0%)`

  setTimeout(() => {
    infoSliderRef.value.style.transition = `all 0.5s ease-in-out`
  })
}
</script>

<style lang="scss">
.img-item {
  transform-origin: 800px;
  img {
    transform: rotate(-90deg);
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
    @apply w-600px h-600px lt-xl:w-500px lt-xl:h-500px lt-md:w-400px lt-md:h-400px;
  }
  &.fruit img {
    transform: rotate(-90deg) translateY(-30%);
    scale: 0;
    transition: 0.5s ease-in-out;
    animation: float-fruit 4s ease-in-out infinite;
  }
  &.fruit.active img {
    scale: 1;
    transition-delay: 0.1s;
  }
}
.navigation {
  span {
    @apply inline-flex justify-center items-center cursor-pointer w-80px h-80px bg-[rgba(255,255,255,0.6)] rounded-full lt-md:w-60px lt-md:h-60px;
    i {
      @apply font-size-34px lt-md: font-size-26px;
    }
  }
}
.large-text {
  @apply absolute left-15% top-50% transform-translate-y--50% h-700px flex justify-center mt--10px lt-md:top-5% lt-md:transform-translate-y-0 lt-md:left-0 lt-md:w-full;
  h2 {
    @apply font-size-160px lt-xl:font-size-120px lt-sm:font-size-80px;
    letter-spacing: -90px;
    writing-mode: vertical-lr;
    text-orientation: upright;
    color: rgba(255, 255, 255, 0.4);
    @media (max-width: 1279.9px) {
      letter-spacing: -60px;
    }
    @media (max-width: 767.9px) {
      letter-spacing: 0;
      writing-mode: inherit;
    }
  }
}
@keyframes float-fruit {
  0%,
  100% {
    translate: 0;
  }
  50% {
    translate: -20px;
  }
}
</style>
