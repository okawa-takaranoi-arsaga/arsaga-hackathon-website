import React from 'react'
import { Canvas } from '@react-three/fiber'

function MainCanvas() {
  return (
    <>
      <Canvas>
        <mesh position={[0, 1.5, 0]}>
          <boxGeometry />
          <meshStandardMaterial color={'orange'} />
        </mesh>
        <ambientLight />
      </Canvas>
    </>
  )
}

export default MainCanvas
