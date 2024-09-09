<template>
  <h2 ref="cartRef">
    <box-icon type='solid' size='lg' name='cart'></box-icon>
    <span class="number">{{ cartList.length }}</span>
  </h2>
  <section class="content">
    <div class="item" v-for="(item, index) in list" :key="index">
      <img :src="item.img" alt="">
      <p>{{item.desc}}</p>
      <h3>${{item.price}}</h3>
      <span></span>
      <button @click="e => addItem(e, item)">加入购物车</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref} from "vue";

interface ProductItem {
  img: string
  desc: string
  price: string
}

const list = ref<ProductItem[]>([
  {
    img: '/image/043.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisiit amet consectetur adipisiit amet consectetur adipisicing elitdolor sit amet consectetur adipisicing elit.',
    price: '345.46'
  },
  {
    img: '/image/044.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetit amet consectetur adipisiit amet consectetur adipisiit amet consectetur adipisi sit amet consectetur adipisicing elit.',
    price: '345.46'
  },
  {
    img: '/image/045.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisit amet consectetur adipisiit amet consectetur adipisiit amet consectetur adipisiectetur adipisicing elit.',
    price: '345.46'
  },
  {
    img: '/image/046.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elitdolor sit amet consectetuur adipisicing elitdolor sit amet consectetur adipisicing elit.',
    price: '345.46'
  },
  {
    img: '/image/044.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetit amet consectetur adipisiit amet consectetur adipisiit amet consectetur adipisi sit amet consectetur adipisicing elit.',
    price: '345.46'
  },
  {
    img: '/image/045.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisit amet consectetur adipisiit amet consectetur adipisiit amet consectetur adipisiectetur adipisicing elit.',
    price: '345.46'
  },
  {
    img: '/image/046.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elitdolor sit amet consectetuur adipisicing elitdolor sit amet consectetur adipisicing elit.',
    price: '345.46'
  }
])
const cartRef = ref(null!)
const cartList = ref<ProductItem[]>([])

function addItem(e: Event, item: ProductItem) {
  const image = (e.target as HTMLButtonElement)?.parentNode?.querySelector('img') as HTMLImageElement
  const span = (e.target as HTMLButtonElement)?.parentNode?.querySelector('span') as HTMLSpanElement
  const _image = image.cloneNode(false)
  span.appendChild(_image)

  const { left: cartLeft, top: cartTop } = (cartRef.value as HTMLElement)?.getBoundingClientRect()
  const { left: spanLeft, top: spanTop } = span.getBoundingClientRect()

  const animation = span.animate({
    width: '30px',
    height: '20px',
    transform: `translate(${cartLeft - spanLeft}px, ${cartTop - spanTop}px)`
  }, {
    duration: 500,
    easing: 'linear'
  })


  animation.onfinish = () => {
    span.removeChild(_image)
    cartList.value.push(item)
  }


}

</script>


<style scoped>
h2 {
  position: relative;
  top: 60px;
  left: 90%;
  cursor: pointer;
  display: inline-block;

  .number {
    position: absolute;
    color: #ffffff;
    right: -10px;
    top: -8px;
    background: red;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 15px;
    text-align: center;
  }
}

.content {
  margin: 100px auto;
  width: 90%;
  display: flex;
  flex-wrap: wrap;

  .item {
    width: 23%;
    height: 360px;
    background: #f5f5f5;
    position: relative;
    padding: 10px;
    margin-bottom: 10px;
    margin-right: 2%;

    img {
      width: 100%;
      height: 165px;
      object-fit: cover;
    }

    p {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    h3 {
      margin: 15px 0;
      font-size: 15px;
    }

    button {
      padding: 5px;
      background: red;
      border: none;
      outline: none;
      font-weight: bold;
      color: #fafafa;
      cursor: pointer;
      float: right;
    }

    >span {
      position: absolute;
      top: 10px;
      left: 10px;
      width: calc(100% - 20px);
      height: 165px;
      z-index: 1;

      img {
        height: auto;
      }
    }
  }
}
</style>
