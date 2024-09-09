<script setup lang="ts">
import { Color, Vector3 } from 'three'
import { TresCanvas } from '@tresjs/core'
import { GLTFModel } from '@tresjs/cientos'
import gsap from 'gsap'
import PlaneView from '@/components/PlaneView.vue'
import { ref } from 'vue'

const gl = {
  antialias: true,
  alpha: true
}
const modelRef = ref()
const planeViewRef = ref()
let scrollY = window.scrollY

window.addEventListener('scroll', () => {
  scrollY = window.scrollY
  const newSection = Math.round(scrollY / window.innerHeight)
  if (newSection === 0) {
    gsap.to(modelRef.value.value.position, {
      duration: 1,
      ease: 'power2.inOut',
      x: 1.5,
      y: 0
    })
    gsap.to(modelRef.value.value.rotation, {
      duration: 1,
      ease: 'power2.inOut',
      z: Math.PI * 0.15
    })
    gsap.to(planeViewRef.value.position, {
      duration: 1,
      ease: 'power2.inOut',
      x: 0,
      y: 0
    })
  } else if (newSection === 1) {
    gsap.to(modelRef.value.value.position, {
      duration: 1,
      ease: 'power2.inOut',
      x: -1.5,
      y: 0
    })
    gsap.to(modelRef.value.value.rotation, {
      duration: 1,
      ease: 'power2.inOut',
      z: -0.45
    })
    gsap.to(planeViewRef.value.position, {
      duration: 1,
      ease: 'power2.inOut',
      x: -3,
      y: 0
    })
  } else {
    gsap.to(modelRef.value.value.position, {
      duration: 1,
      ease: 'power2.inOut',
      x: 0,
      y: 0.5
    })
    gsap.to(modelRef.value.value.rotation, {
      duration: 1,
      ease: 'power2.inOut',
      z: 0
    })
    gsap.to(planeViewRef.value.position, {
      duration: 1,
      ease: 'power2.inOut',
      x: -1.5,
      y: 0.5
    })
  }
})
</script>

<template>
  <div class='three-js'>
    <TresCanvas v-bind='gl'>
      <TresPerspectiveCamera :fov="45" :position="new Vector3(0, 0, 5)" />
      <Suspense>
        <GLTFModel
          ref="modelRef"
          :scale="[8, 8, 8]"
          :position="[1.5, 0, 0]"
          :rotation-x="Math.PI * 0.2"
          :rotation-z="Math.PI * 0.15"
          path='/models/donut/scene.gltf' />
      </Suspense>

      <TresGroup ref='planeViewRef'>
        <Suspense>
          <PlaneView />
        </Suspense>
      </TresGroup>

      <TresAmbientLight :color="new Color(0xffffff)" :intensity="1.8" />
      <TresDirectionalLight
        :position="new Vector3(1, 2, 0)"
        :color="new Color(0xffffff)"
        :intensity="2"
      />
    </TresCanvas>
  </div>
  <div class='donut-bg'>
    <section class="section-box one">
      <div class="container">
        <div class="hero">
          <h2>Abs are Cool.</h2>
          <h3>But have you ever tried donuts?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquid culpa,
            <br />
            providentvoluptatem excepturi id in quasi ea hic voluptate dicta amet explicabo <br />
            expedita ratione velit modi. Nisiquaerat illum amet quisquam iusto perferendis <br />
            ducimus aspernatur quia, repellendus beatae fugiat!
          </p>
        </div>
      </div>
    </section>

    <section class="section-box two">
      <div class="container">
        <div class="hero">
          <h2>How we do</h2>
          <h3>Experiment width tasty <br />donuts recipe everytime</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquid culpa,
            <br />
            providentvoluptatem excepturi id in quasi ea hic voluptate dicta amet explicabo <br />
            expedita ratione velit modi. Nisiquaerat illum amet quisquam iusto perferendis <br />
            ducimus aspernatur quia, repellendus beatae fugiat!
          </p>
        </div>
      </div>
    </section>

    <section class="section-box">
      <div class="container">
        <h1>HAPPY DONUT.</h1>
      </div>
    </section>
  </div>
</template>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
* {
  margin: 0;
  padding: 0;
}
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
}
.donut-bg {
  background: linear-gradient(to left, #fffcdc, #ecc0dc);
  font-family: 'Poppins', sans-serif;
}
.section-box {
  position: relative;

  .container {
    max-width: 90%;
    height: 100vh;
    margin: 0 auto;
    padding: 0 15px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: flex-start;

    h1 {
      position: absolute;
      bottom: 20%;
      left: 50%;
      transform: translate(-50%, 0);
      font-size: 90px;
      line-height: 100px;
      font-weight: 700;
      height: 100px;
      width: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &.one {
    .container {
      grid-template-areas: 'content ..';
    }
  }
  &.two {
    .container {
      grid-template-areas: '.. content';
    }
  }

  h2 {
    font-size: 60px;
    font-weight: 600;
    line-height: 70px;
    font-family: inherit;
    display: block;
    width: 100%;
  }

  h3 {
    font-size: 50px;
    font-weight: 400;
    line-height: 60px;
    margin-bottom: 30px;
    display: block;
    width: 100%;
  }

  p {
    font-size: 16px;
    line-height: 26px;
    font-weight: 300;
    display: block;
    width: 100%;
  }

  .hero {
    width: 100%;
    height: 100%;
    margin-bottom: 50px;
    grid-area: content;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
}
.three-js {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
}
</style>
