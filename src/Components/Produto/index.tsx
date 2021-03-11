import React from 'react'

import { Container } from './style'

interface Props {
  image: any
  alt: string
  title: string
}

const Produto: React.FC<Props> = ({ image, alt, title }) => {
  return (
    <Container>
      <img src={image} alt={alt}/>
      <span>{title}</span>
    </Container>
  )
}

export default Produto