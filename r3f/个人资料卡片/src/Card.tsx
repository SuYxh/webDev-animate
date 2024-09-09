import * as THREE from 'three'
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ThreeElements } from '@react-three/fiber';

export type DreiGLTF = GLTF & {
  nodes: Record<string, THREE.Mesh>;
  materials: Record<string, THREE.MeshStandardMaterial>;
};

export function Card(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('/modules/my_card.glb') as DreiGLTF;

  return (
    <group {...props} position={[ -0.06, -0.7, 0 ]} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottom.geometry}
        material={materials['材质.001']}
        scale={[ 1.612, 0.034, 1.612 ]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box.geometry}
        material={materials.材质}
        position={[ 0.058, 0.7, -0.034 ]}
        scale={[ 0.021, 0.576, 0.374 ]}
      />
      <mesh
        position={[ 0.08, 0.53, -0.02 ]}
        rotation-y={Math.PI * 0.5}
        onClick={() => window.open('https://www.yinchunyu.com/nuxt3')}>
        <planeGeometry args={[ 0.58, 0.08 ]} />
        <meshBasicMaterial color={'red'} opacity={0} transparent={true} />
      </mesh>
      <mesh
        position={[ 0.08, 0.25, 0.18 ]}
        rotation-y={Math.PI * 0.5}
        onClick={() => window.open('https://github.com/yinMrsir')}>
        <circleGeometry args={[ 0.06 ]} />
        <meshBasicMaterial color={'red'} opacity={0} transparent={true} />
      </mesh>
      <mesh
        position={[ 0.08, 0.25, -0.03 ]}
        rotation-y={Math.PI * 0.5}
        onClick={() => window.open('https://www.douyin.com/user/MS4wLjABAAAAUKMCVZGbQl7etrdd36GBIG6OGxClOwoHci_-PIlxNvE')}>
        <circleGeometry args={[ 0.06 ]} />
        <meshBasicMaterial color={'red'} opacity={0} transparent={true} />
      </mesh>
      <mesh
        position={[ 0.08, 0.25, -0.25 ]}
        rotation-y={Math.PI * 0.5}
        onClick={() => window.open('https://space.bilibili.com/397874328', '_blank')}>
        <circleGeometry args={[ 0.06 ]} />
        <meshBasicMaterial color={'red'} opacity={0} transparent={true} />
      </mesh>
    </group>
  );
}

useGLTF.preload('/modules/my_card.glb');
