<template>
  <header class='fixed w-full p-4'>
    <div class='container m-auto relative md:flex md:justify-between md:items-center'>
      <button class='toggle-menu' @click='show = !show'>
        <i class='i-formkit-open block w-8 h-8'></i>
      </button>
      <nuxt-link to='/' class='color-#fff uppercase font-size-25px font-bold'>eagle</nuxt-link>
      <nav :class='`color-#fff absolute w-full text-center top-12 bg-black bg-opacity-75 p-y-4 md:block md:bg-transparent md:p-0 md:top-0 md:relative md:w-auto ${show ? "" : "hidden"}`'>
        <ul class='line-height-8 md:w-full md:flex md:gap-4'>
          <li><nuxt-link to="#">Home</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <li><nuxt-link to="#portfolio">Portfolio</nuxt-link></li>
          <li><nuxt-link to="#login">Services</nuxt-link></li>
          <li><nuxt-link to="#contact">Contact</nuxt-link></li>
        </ul>
      </nav>
    </div>
  </header>

  <div class='banner h-100vh md:flex items-start'>
    <div class='container m-x-auto color-#fff flex flex-col justify-center items-center h-full md:items-start'>
      <h2 class='font-size-10 line-height-16 font-bold mb-19px sm:font-size-14 md:font-size-18'>Innovation & <br> Technology </h2>
      <p class='block text-ellipsis text-nowrap overflow-hidden w-80% text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
      <div class='socials'>
        <i class='i-formkit-facebook inline-block'></i>
        <i class='i-formkit-github inline-block'></i>
        <i class='i-formkit-tiktok inline-block'></i>
        <i class='i-formkit-twitter inline-block'></i>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
const show = ref(false)
</script>

<style lang='scss'>
.toggle-menu {
  @apply cursor-pointer border-0 w-8 h-8 p-0 color-#fff top-[50%] translate-y-[-50%] bg-transparent transition-opacity duration-250 absolute right-0 hover:opacity-75 md:hidden;
}
nav ul li {
  @apply p-y-2;
  a {
    @apply transition-all duration-250 font-size-5 p-y-2 p-x-4 border-rd-full hover:color-#000 hover:bg-#fff;
  }
}
.banner {
  background: url("assets/images/1.jpg") no-repeat center center;
  background-size: cover;
}
.socials {
  margin-top: 20px;
  display: flex;
  gap: 10px;
  i {
    font-size: 25px;
  }
}
</style>
