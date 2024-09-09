<template>
  <div class="weather">
    <div class="flex gap-12px items-center">
      <input
        type="text"
        class="h-50px border-0 outline-none border-rd-40px pl-25px c-#626262 bg-#ebfffc font-size-18px"
        placeholder="搜索..."
        v-model="location"
      />
      <span
        @click="getWeatherDate"
        class="w-50px h-50px p-15px bg-#ebfffc border-rd-50px flex items-center justify-center hover:op-70 cursor-pointer transition-duration-300 transition-opacity"
      >
        <i class="i-formkit-search w-20px h-20px"></i>
      </span>
    </div>
    <img
      :src="imagesMap[weatherDate?.now.code + '@2x']"
      alt=""
      class="w-150px mt-30px mb-20px block"
    />
    <p class="c-white mb-10px">{{ weatherDate?.now.text }}</p>
    <p class="c-white font-size-80px line-height-[1]">{{ weatherDate?.now.temperature }} °C</p>
    <p class="c-white font-size-40px">{{ weatherDate?.location.name }}</p>
    <div class="weather-data">
      <div class="col">
        <i class="i-wi-humidity w-35px h-35px"></i>
        <div>
          <p>{{ weatherDate?.now.humidity }} %</p>
          <span>湿度</span>
        </div>
      </div>
      <div class="col">
        <i class="i-wi-strong-wind w-35px h-35px"></i>
        <div>
          <p>{{ weatherDate?.now.wind_speed }} Km/h</p>
          <span>风速</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const images = import.meta.glob('@/assets/images/white/*.png', { eager: true })
const imagesMap = {}
for (const key in images) {
  const name = key.split('/').splice(-1)[0].split('.')[0]
  imagesMap[name] = images[key].default
}

const key = import.meta.env.VITE_WEATHER_KEY
const weatherDate = ref()

const location = ref('北京')

getWeatherDate()
async function getWeatherDate() {
  const res = await fetch(
    `https://api.seniverse.com/v3/weather/now.json?key=${key}&location=${location.value}`
  )
  if (res.ok) {
    const data = await res.json()
    weatherDate.value = data.results[0]
  }
}
</script>

<style lang="scss">
.weather {
  @apply place-self-center p-40px border-rd-10px flex flex-col items-center;
  background-image: linear-gradient(45deg, #2f4680, #500ae4);
  &-data {
    @apply w-full flex justify-between c-white mt-40px;
    .col {
      @apply flex items-start gap-12px font-size-22px;
      span {
        @apply block font-size-16px;
      }
    }
  }
}
</style>
