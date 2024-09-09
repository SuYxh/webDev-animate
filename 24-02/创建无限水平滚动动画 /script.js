const scrollers = document.querySelectorAll('.scroller');

addAnimation()

function addAnimation() {
  scrollers.forEach(scroller => {

    if (scroller.getAttribute('data-animated')) {
      const scrollerInner = scroller.querySelector('.scroller__inner')
      const scrollerContent = Array.from(scrollerInner.children)

      scrollerInner.addEventListener('mouseenter', () => {
        scrollerInner.style.animationPlayState = 'paused'
      })

      scrollerInner.addEventListener('mouseleave', () => {
        scrollerInner.style.animationPlayState = 'running'
      })


      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true)
        scrollerInner.appendChild(duplicatedItem)
      })
    }
  })
}
