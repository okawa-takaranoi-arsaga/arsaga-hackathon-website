import React from 'react'
import { OfficialPositionPropType } from '../../types/types'
import '../../scss/explanation-card.scss'

const ExplanationCard = (prop: OfficialPositionPropType) => {
  const { position, explanation, people } = prop

  return (
    <div className='explanation-card'>
      <div className='top'>
        <p className='position'>{position}</p>
        <p className='explanation'>{explanation}</p>
      </div>

      <p className='people'>
        {people}
        <span className='accent'>名</span>
      </p>
    </div>
  )
}

export default ExplanationCard
