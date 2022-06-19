import React from 'react'
import { useThree } from '@react-three/fiber'

const MainCamera = () => {
  useThree(({ camera }) => {
    camera.position.set(0, 4, 4)
    camera.rotation.set(-0.2, 0, 0)
  })

  return <></>
}

export default MainCamera
