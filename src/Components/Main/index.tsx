import React from 'react'
import { Container, Spotlight, TitleArea, Title, SpotlightArea, ContentArea, ContentTitle, CardArea, EmptyCard } from './style'
// import Carousel from 'react-elastic-carousel'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
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

  // const breakPoints = [
  //   {width: 1, itemsToShow: 1},
  //   {width: 500, itemsToShow: 2},
  //   {width: 768, itemsToShow: 3},
  // ]

  return (
    <Container>
      <TitleArea>
        <p>Coleções em</p>
        <Title>Destaque</Title>
      </TitleArea>
      <SpotlightArea>
        <Spotlight>
          <img src={Spotlight1} alt="Destaque 1" />
          <span>Conjunto Deusa</span>
        </Spotlight>
        <Spotlight>
          <img src={Spotlight2} alt="Destaque 2" />
          <span>Conjunto Magnífica</span>
        </Spotlight>
        <Spotlight>
          <img src={Spotlight3} alt="Destaque 3" />
          <span>Conjunto Romântica</span>
        </Spotlight>
      </SpotlightArea>
      <ContentArea>
        <ContentTitle>
          Conheça nossos conjuntos
        </ContentTitle>
        <Carousel showStatus={false}>
            <CardArea>
              <Card image={Set1} />
              <Card image={Set2} />
              <Card image={Set3} />
            </CardArea>
            <CardArea>
              <Card image={Set4} />
              <Card image={Set5} />
              <Card image={Set6} />
            </CardArea>
        </Carousel>
      </ContentArea>
      <ContentArea>
        <ContentTitle>
          Conheça nossos pijamas
        </ContentTitle>
        <Carousel showStatus={false}>
          <CardArea>
            <Card image={Pijama1} />
            <Card image={Pijama2} />
            <Card image={Pijama3} />
          </CardArea>
          <CardArea>
            <Card image={Pijama4} />
            <Card image={Pijama5} />
            <Card image={Pijama6} />
          </CardArea>
          <CardArea>
            <Card image={Pijama7} />
            <Card image={Pijama8} />
            <EmptyCard />
          </CardArea>
        </Carousel>
      </ContentArea>
    </Container>
  )
}

export default Main