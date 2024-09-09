const cursor = document.querySelector('#cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
})

const items = document.querySelectorAll('ul li');
items.forEach(item => {
  item.addEventListener('mousemove', (e) => {
    const x = e.offsetX
    const y = e.offsetY

    const itemWidth = item.clientWidth
    const itemHeight = item.clientHeight

    const transX = x - itemWidth / 2
    const transY = y - itemHeight / 2

    item.style.transform = `translate(${transX}px, ${transY}px)`
  })

  item.addEventListener('mouseout', () => {
    item.style.transform = 'translate(0, 0)'
  })
})
