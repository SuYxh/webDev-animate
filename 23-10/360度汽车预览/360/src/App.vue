<script setup>
import {onMounted, ref} from "vue";

  const containerRef = ref(null)
  const transformValue = ref(0)
  let animating = false
  let startX = 0

  const handleMouseDown = (e) => {
    if (!animating) {
      animating = true
      startX = e.pageX
    }
  }

  const handleMouseMove = (e) => {
    // 如果没有按下鼠标 则直接return
    if (!animating) {
      return
    }
    const itemWidth = Math.ceil(containerRef.value.offsetWidth / 16) * 0.5
    let left = Math.floor((e.pageX - startX) / itemWidth)
    const number = Math.floor(Math.abs(left / 16))
    let value;
    if (left > 0) {
      value = left - 16 * (number + 1)
    } else if (left < 0) {
      value = left + 16 * number
    } else {
      value = 0
    }
    transformValue.value = value === -16 ? 0 : value
  }

  const handleMouseUp = () => {
    animating = false
  }

  onMounted(() => {
    const img = new Image()
    img.src = '/alfa.png'
    img.onload = () => {
      containerRef.value.querySelector('.product-sprite').classList.add('load-over')
    }
  })

</script>

<template>
 <div class="cd-product-viewer-wrapper" @mousemove="handleMouseMove" @mouseup="handleMouseUp">
   <div class="product-viewer" ref="containerRef">
     <img src="/img-loading.jpg" alt="">
     <div class="product-sprite"
          @mousedown.stop="handleMouseDown"
          :style="`transform: translateX(${transformValue * 6.25}%);`"></div>
   </div>
 </div>
</template>

<style scoped lang="scss">
.cd-product-viewer-wrapper {
  text-align: center;
  padding: 2em;

  .product-viewer {
    position: relative;
    z-index: 1;
    display: inline-block;
    overflow: hidden;
    width: 100%;
    max-width: 1200px;
  }

  img {
    display: block;
    position: relative;
    z-index: 1;
    max-width: 100%;
  }

  .product-sprite {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    height: 100%;
    width: 1600%;
    background: url(/alfa.png) no-repeat center center;
    background-size: 100%;
    transition: opacity 0.3s;
    opacity: 0;
    cursor: ew-resize;

    &.load-over {
      opacity: 1;
    }
  }
}
</style>
