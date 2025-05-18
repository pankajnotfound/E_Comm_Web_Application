import React from 'react'
import FeaturesText from './FeaturesText'
import FeaturesCard from './FeaturesCard'

const Features = () => {
  return (
    <div className='flex flex-col p-10 gap-2 border-b-1 border-gray-400'>
        <FeaturesText />
        <FeaturesCard />
    </div>
  )
}

export default Features