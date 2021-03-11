import React from 'react' 

import { Container, Content, ContentTitleArea, GridProduto } from './style'
import { TitleArea, Title, Spotlight, SpotlightArea } from '../Main/style'
import Header from '../Header'
import { ContentTitle } from '../Main/style'

import Pijama1 from '../../assets/pijamas/pijama1.jpeg'
import Pijama2 from '../../assets/pijamas/pijama2.jpeg'
import Pijama3 from '../../assets/pijamas/pijama3.jpeg'
import Pijama4 from '../../assets/pijamas/pijama4.jpeg'
import Pijama5 from '../../assets/pijamas/pijama5.jpeg'
import Pijama6 from '../../assets/pijamas/pijama6.jpeg'
import Pijama7 from '../../assets/pijamas/pijama7.jpeg'
import Pijama8 from '../../assets/pijamas/pijama8.jpeg'

import Produto from '../Produto'

const Pijama: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <TitleArea>
          <p>Pijamas em</p>
          <Title>Destaque</Title>
        </TitleArea>
        <SpotlightArea>
          <Spotlight>
            <img src={Pijama8} alt="Destaque 1"/>
            <span>Pijama 1</span>
          </Spotlight>
          <Spotlight>
            <img src={Pijama2} alt="Destaque 2"/>
            <span>Pijama 2</span>
          </Spotlight>
          <Spotlight>
            <img src={Pijama4} alt="Destaque 3"/>
            <span>Pijama 3</span>
          </Spotlight>
        </SpotlightArea>
        <ContentTitleArea>
          <ContentTitle>Conheça todos os nossos conjuntos</ContentTitle>
        </ContentTitleArea>
        <GridProduto>
          <Produto image={Pijama1} alt="Pijama 1" title="Pijama 1" />
          <Produto image={Pijama2} alt="Pijama 2" title="Pijama 2 " />
          <Produto image={Pijama3} alt="Pijama 3" title="Pijama 3 " />
          <Produto image={Pijama4} alt="Pijama 4" title="Pijama 4 " />
          <Produto image={Pijama5} alt="Pijama 5" title="Pijama 5 " />
          <Produto image={Pijama6} alt="Pijama 6" title="Pijama 6 " />
          <Produto image={Pijama7} alt="Pijama 7" title="Pijama 7 " />
          <Produto image={Pijama8} alt="Pijama 8" title="Pijama 8 " />
        </GridProduto>
      </Content>
    </Container>
  )
}

export default Pijama