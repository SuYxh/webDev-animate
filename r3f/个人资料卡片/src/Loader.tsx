import { Html, useProgress } from '@react-three/drei'
import { useState } from 'react';

export function Loader() {
  const { progress } = useProgress()

  const [ number, setNumber ] = useState(0)

  const timer = setInterval(() => {
    if (number > 50 || progress) {
      clearInterval(timer)
      return
    }
    setNumber(number + 1)
  }, 1000)

  return <Html center>
    <div style={{ color: '#ffffff', fontSize: '24px' }}>{progress || number} % loaded</div>
  </Html>
}
