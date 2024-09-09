const wrapper = document.querySelector('#wrapper')
const topWrapper = document.querySelector('.top')
const handle = document.querySelector('.handle')

let delta = 0

wrapper.addEventListener('mousemove', (e) => {
  delta = (e.clientX - window.innerWidth / 2)
  topWrapper.style.width = e.clientX + 1000 + delta + 'px'
  handle.style.left = e.clientX + delta + 'px'
})
