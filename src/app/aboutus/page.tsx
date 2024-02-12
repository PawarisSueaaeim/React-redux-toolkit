import { CardContainer } from '@/common/card'
import Image from 'next/image'
import React from 'react'

type Props = {}

export default function AboutUs({}: Props) {
  return (
    <div className='pt-40 pb-10 px-10'>
      <CardContainer>
        <div className='relative h-40'>
          <Image
            src="/image/map.png"
            alt="map"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className='p-10'>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium similique perspiciatis, error magnam aperiam incidunt tempore quibusdam nemo esse minus! Aut vero veritatis accusantium praesentium itaque eum, omnis dignissimos animi?</span>
        </div>  
      </CardContainer>
    </div>
  )
}