import { CardContainer } from '@/common/card'
import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Contact({}: Props) {
  return (
    <div className='p-10'>
        <CardContainer>
            <div className='relative'>
                <Image 
                    src="/image/map.png"
                    alt='map'
                    fill
                    style={{objectFit: "cover"}}
                />
            </div>
            <div>
                col2
            </div>
        </CardContainer>
    </div>
  )
}