import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import BoxGeometry from './BoxGeometry'
import { BOX_POSITIONS, OFFICIAL_POSITIONS } from '../../utils/constants'
import MainCamera from './MainCamera'
import ExplanationCard from '../card/ExplanationCard'
import { OfficialPositionPropType } from '../../types/types'
import Member from '../../images/member.png'

const MainCanvas = () => {
  const [position, setPosition] = useState<OfficialPositionPropType>()

  const sendBoxId = (id: number) => {
    const officialPosition = OFFICIAL_POSITIONS.find((position) => position.id === id)
    setPosition(officialPosition)
  }

  return (
    <>
      <img className='icon-contents' src={Member} />

      {position ? (
        <ExplanationCard position={position.position} explanation={position.explanation} people={position.people} />
      ) : (
        <></>
      )}
      <Canvas>
        {BOX_POSITIONS.map((box) => (
          <BoxGeometry position={box.position} key={box.id} id={box.id} sendBoxId={sendBoxId} scale={box.scale} />
        ))}
        <MainCamera />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} />
        <pointLight position={[10, 15, 0]} />
      </Canvas>
    </>
  )
}

export default MainCanvas
