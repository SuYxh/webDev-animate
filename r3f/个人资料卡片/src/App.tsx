import { Canvas } from '@react-three/fiber';
import { Card } from './Card.tsx';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useState } from 'react';
import { Loader } from './Loader.tsx';

function App() {
  const [ hovered, setHover ] = useState(false)

  return (
    <Canvas
      camera={{ position: [ 2, 0.1, 0 ], type: 'PerspectiveCamera', fov: 43 }}>
      <OrbitControls
        autoRotate={!hovered}
        enableDamping
        enablePan={false}
        enableZoom={false}
        autoRotateSpeed={3}
        minPolarAngle={1.5}
        maxPolarAngle={1.5} />
      <ambientLight intensity={1.4} />
      <directionalLight intensity={0.7} position={[ 30, 10, -30 ]} />
      <directionalLight intensity={0.7} position={[ -30, 10, -30 ]} />
      <directionalLight intensity={0.7} position={[ 0, 10, 30 ]} />
      <Suspense fallback={ <Loader /> }>
        <Card
          onPointerEnter={() => setHover(true)}
          onPointerLeave={() => setHover(false)}
        />
      </Suspense>
    </Canvas>
  )
}

export default App

