import React from 'react'
import {Container} from './style'

interface Props {
  image: any
  alt: string
}

const Card: React.FC<Props> = ({ image, alt }) => {
  return (
    <Container>
      <img src={image} alt={alt} />
    </Container>
  )
}

export default Card