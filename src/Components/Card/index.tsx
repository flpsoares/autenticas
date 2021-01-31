import React from 'react'
import {Container} from './style'

interface Props {
  image: any
}

const Card: React.FC<Props> = ({ image }) => {
  return (
    <Container>
      <img src={image} />
    </Container>
  )
}

export default Card