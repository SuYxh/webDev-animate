const shimmerWave = document.getElementById('shimmer-wave');

shimmerWave.innerHTML = shimmerWave.innerText.split('').map((char, i) => {
  return `<span style="--i: ${i}">${char.replace(' ', '&nbsp;')}</span>`;
}).join('')
