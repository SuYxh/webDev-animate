<script setup>
const list = [
  { img: '/img/pic1.png', title: 'Picture1' },
  { img: '/img/pic2.png', title: 'Picture2' },
  { img: '/img/pic3.png', title: 'Picture3' },
  { img: '/img/pic4.png', title: 'Picture4' },
  { img: '/img/pic2-1.png', title: 'Picture5' },
  { img: '/img/pic2-2.png', title: 'Picture6' },
  { img: '/img/pic2-3.png', title: 'Picture7' },
  { img: '/img/pic2-4.png', title: 'Picture8' },
  { img: '/img/pic3-1.png', title: 'Picture9' },
  { img: '/img/pic3-2.png', title: 'Picture10' },
  { img: '/img/pic3-3.png', title: 'Picture11' },
  { img: '/img/pic3-4.png', title: 'Picture12' }
]

function handleMouse(e) {
  const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = e.currentTarget
  const x = e.pageX - offsetLeft - offsetWidth / 2, y = e.pageY - offsetTop - offsetHeight / 2;

  //d 的值为“0,1,2,3”分别对应着“上，右，下，左”
  /*
  这段代码是用来计算一个点(x, y)相对于原点的方位角，返回一个表示方位角所在象限的值。
  首先，代码中的 Math.atan2(y, x) 是一个常用的数学函数，用于计算一个点(x, y)与原点之间的角度。它的返回值是一个弧度值，表示与X轴正向的夹角。
  接下来， (Math.atan2(y, x) * (180 / Math.PI)) 会将上述的弧度值转换为角度值，这样方位角就变成了一个0到360度之间的值。
  然后， (Math.atan2(y, x) * (180 / Math.PI)) + 180 会将角度值上移180度，以保证方位角的范围在-180到180度之间。
  接下来， (Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90 将方位角除以90，将其放入四个象限（0、1、2、3）中。
  然后，Math.round(((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) 会对结果进行四舍五入，返回最接近的整数。
  最后， (Math.round(((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3 ) % 4 会将上述结果加3，并取结果对4的余数。这样，最终返回的值就是0、1、2、3中的一个，分别表示点(x,y)在四个象限之间的位置。
  */
  const a = ((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90
  console.log(a)
  const d= (Math.round(((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3 ) % 4;
  let classSuffix = '';
  switch (d) {
    case 0:
      classSuffix = '-top';
      break;
    case 1:
      classSuffix = '-right';
      break;
    case 2:
      classSuffix = '-bottom';
      break;
    case 3:
      classSuffix = '-left';
      break;
  }
  const type = e.type === 'mouseenter' ? 'in' : 'out';
  e.currentTarget.className = '';
  e.currentTarget.classList.add(type + classSuffix);
}

</script>

<template>
  <div class="wrapper">
    <ul>
      <li
          v-for="item in list"
          @mouseenter.stop="handleMouse"
          @mouseleave.stop="handleMouse">
        <div class='picBox'>
          <div class='show'>
            <img style="width: 180px; height: 180px;" :src='item.img' :alt="item.title">
          </div>
          <div class='hide'>
            <h3>{{ item.title }}</h3>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.wrapper {
  max-width:900px;
  margin:80px auto;
}
.wrapper li{
  position: relative;
  width: 180px;
  height: 180px;
  list-style:none;
  margin: 5px;
  display: inline-block;
  perspective: 300px;
}
.picBox{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform-style: preserve-3d;
  transform-origin: 50% 50% -90px;
  animation: 200ms ease-out 0ms 1 normal forwards;
}

.show,
.hide{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.hide{
  color:#fff;
  background-color:#000;
  text-align:center;
  line-height:180px;
  transform: translate3d(0,0,-1px);
}

.in-top .hide,
.out-top .hide
{
  transform-origin: 0 100%;
  transform: translate3d(0, -100%, 0) rotate3d(1,0,0,90deg);
}
.in-top .picBox{
  animation-name: in-top;
  animation-play-state: running;
}
.out-top .picBox{
  animation-name: out-top;
  animation-play-state: running;
}
@keyframes in-top {
  from  {transform: rotate3d(0,0,0,0deg)}
  to    {transform: rotate3d(-1,0,0,90deg)}
}

@keyframes out-top {
  from {transform: rotate3d(-1,0,0,90deg)}
  to   {transform: rotate3d(0,0,0,0deg)}
}
.in-right .hide,
.out-right .hide {
  transform-origin: 0 0;
  transform: translate3d(100%, 0, 0) rotate3d(0,1,0,90deg);
}
.in-right .picBox{
  animation-name: in-right;
  animation-play-state: running;
}
.out-right .picBox{
  animation-name: out-right;
  animation-play-state: running;
}
@keyframes in-right {
  from  {transform: rotate3d(0,0,0,0deg)}
  to    {transform: rotate3d(0,-1,0,90deg)}
}

@keyframes out-right {
  from  {transform: rotate3d(0,-1,0,90deg)}
  to    {transform: rotate3d(0,0,0,0deg)}
}

.in-bottom .hide,
.out-bottom .hide {
  transform-origin: 0 0;
  transform: translate3d(0, 100%, 0) rotate3d(-1,0,0,90deg);
}
.in-bottom .picBox{
  animation-name: in-bottom;
  animation-play-state: running;
}
.out-bottom .picBox{
  animation-name: out-bottom;
  animation-play-state: running;
}
@keyframes in-bottom {
  from  {transform: rotate3d(0,0,0,0deg)}
  to    {transform: rotate3d(1,0,0,90deg)}
}
@keyframes out-bottom {
  from  {transform: rotate3d(1,0,0,90deg)}
  to    {transform: rotate3d(0,0,0,0deg)}
}
.in-left .hide,
.out-left .hide {
  transform-origin: 100% 0;
  transform: translate3d(-100%,0,0) rotate3d(0,-1,0,90deg);
}
@keyframes in-left {
  from  {transform: rotate3d(0,0,0,0deg)}
  to    {transform: rotate3d(0,1,0,90deg)}
}
@keyframes out-left {
  from  {transform: rotate3d(0,1,0,90deg)}
  to    {transform: rotate3d(0,0,0,0deg)}
}
.in-left .picBox{
  animation-name: in-left;
  animation-play-state: running;
}
.out-left .picBox{
  animation-name: out-left;
  animation-play-state: running;
}

</style>
