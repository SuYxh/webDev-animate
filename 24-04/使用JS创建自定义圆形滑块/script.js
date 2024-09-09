let knob = document.querySelector(".knob");
let circle = document.querySelector("#circle2");
let pointer = document.querySelector(".pointer");
let text = document.querySelector(".text");

let isRotating = false;

document.addEventListener('mousedown', (e) => {
  if (e.target.closest('.knob')) {
    isRotating = true
  }
})

document.addEventListener('mousemove', rotateKnob)

function rotateKnob(e) {
  if (isRotating) {
    let knobX = knob.getBoundingClientRect().left + knob.clientWidth / 2
    let knobY = knob.getBoundingClientRect().top + knob.clientHeight / 2

    let deltaX = e.clientX - knobX
    let deltaY = e.clientY - knobY

    let angleRad = Math.atan2(deltaY, deltaX)
    let angleDeg = (angleRad * 180) / Math.PI

    let rotationAngle = (angleDeg + 360 - 135) % 360

    if (rotationAngle <= 270) {
      pointer.style.transform = `rotate(${rotationAngle - 45}deg)`

      let progress = rotationAngle / 270

      circle.style.setProperty('--size', progress * 100)

      text.innerHTML = `${Math.round(progress * 100)}`

    }

  }
}

document.addEventListener('mouseup', () => {
  isRotating = false
})
