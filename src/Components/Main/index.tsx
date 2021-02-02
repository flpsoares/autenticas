import React from 'react'
import { Container, Spotlight, TitleArea, Title, SpotlightArea, ContentArea, ContentTitle, CarouselSpotlight, CarouselSpotlightArea } from './style'
import Carousel from 'react-elastic-carousel'
import Card from '../Card'
import Spotlight1 from '../../assets/destaque/d1.jpeg'
import Spotlight2 from '../../assets/destaque/d2.jpeg'
import Spotlight3 from '../../assets/destaque/d3.jpeg'
import Set1 from '../../assets/conjunto/conjunto1.jpeg'
import Set2 from '../../assets/conjunto/conjunto2.jpeg'
import Set3 from '../../assets/conjunto/conjunto3.jpeg'
import Set4 from '../../assets/conjunto/conjunto4.jpeg'
import Set5 from '../../assets/conjunto/conjunto5.jpeg'
import Set6 from '../../assets/conjunto/conjunto6.jpeg'
import Pijama1 from '../../assets/pijamas/pijama1.jpeg'
import Pijama2 from '../../assets/pijamas/pijama2.jpeg'
import Pijama3 from '../../assets/pijamas/pijama3.jpeg'
import Pijama4 from '../../assets/pijamas/pijama4.jpeg'
import Pijama5 from '../../assets/pijamas/pijama5.jpeg'
import Pijama6 from '../../assets/pijamas/pijama6.jpeg'
import Pijama7 from '../../assets/pijamas/pijama7.jpeg'
import Pijama8 from '../../assets/pijamas/pijama8.jpeg'

const Main: React.FC = () => {

  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 500, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
  ]

  const breakPointsDestaque = [
    {width: 1000, itemToShow: 1}
  ]

  return (
    <Container>
      <TitleArea>
        <p>Coleções em</p>
        <Title>Destaque</Title>
      </TitleArea>
      <SpotlightArea>
        <Spotlight>
          <img src={Spotlight1} alt="Destaque1" />
          <span>Conjunto Deusa</span>
        </Spotlight>
        <Spotlight>
          <img src={Spotlight2} alt="Destaque2" />
          <span>Conjunto Magnífica</span>
        </Spotlight>
        <Spotlight>
          <img src={Spotlight3} alt="Destaque3" />
          <span>Conjunto Romântica</span>
        </Spotlight>
      </SpotlightArea>
      <CarouselSpotlightArea>
        <Carousel breakPoints={breakPointsDestaque}>
          <CarouselSpotlight>
            <img src={Spotlight2} alt="Destaque1" />
            <span>Conjunto Deusa</span>
          </CarouselSpotlight>
          <CarouselSpotlight>
            <img src={Spotlight2} alt="Destaque2" />
            <span>Conjunto Deusa</span>
          </CarouselSpotlight>
          <CarouselSpotlight>
            <img src={Spotlight3} alt="Destaque3" />
            <span>Conjunto Deusa</span>
          </CarouselSpotlight>
        </Carousel>
      </CarouselSpotlightArea>
      <ContentArea>
        <ContentTitle>
          Conheça nossos conjuntos
        </ContentTitle>
        <Carousel showArrows={false} breakPoints={breakPoints}>
            <Card image={Set1} alt="Conjunto1" />
            <Card image={Set2} alt="Conjunto2" />
            <Card image={Set3} alt="Conjunto3" />
            <Card image={Set4} alt="Conjunto4" />
            <Card image={Set5} alt="Conjunto5" />
            <Card image={Set6} alt="Conjunto6" />
        </Carousel>
      </ContentArea>
      <ContentArea>
        <ContentTitle>
          Conheça nossos pijamas
        </ContentTitle>
        <Carousel showArrows={false} breakPoints={breakPoints}>
          <Card image={Pijama1} alt="Pijama1" />
          <Card image={Pijama2} alt="Pijama2" />
          <Card image={Pijama3} alt="Pijama3" />
          <Card image={Pijama4} alt="Pijama4" />
          <Card image={Pijama5} alt="Pijama5" />
          <Card image={Pijama6} alt="Pijama6" />
          <Card image={Pijama7} alt="Pijama7" />
          <Card image={Pijama8} alt="Pijama8" />
        </Carousel>
      </ContentArea>
    </Container>
  )
}

export default Main