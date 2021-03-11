import React from 'react' 

import { Container, Content, TitleArea, GridProduto } from './style'
import Header from '../Header'
import { ContentTitle } from '../Main/style'

import Set1 from '../../assets/conjunto/conjunto1.jpeg'
import Set2 from '../../assets/conjunto/conjunto2.jpeg'
import Set3 from '../../assets/conjunto/conjunto3.jpeg'
import Set4 from '../../assets/conjunto/conjunto4.jpeg'
import Set5 from '../../assets/conjunto/conjunto5.jpeg'
import Set6 from '../../assets/conjunto/conjunto6.jpeg'

import Produto from '../Produto'

const Conjunto: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <TitleArea>
          <ContentTitle>Conheça todos os nossos conjuntos</ContentTitle>
        </TitleArea>
        <GridProduto>
          <Produto image={Set1} alt="Conjunto 1" title="Conjunto Magnífica" />
          <Produto image={Set2} alt="Conjunto 2" title="Conjunto Glamurosa " />
          <Produto image={Set3} alt="Conjunto 3" title="Conjunto Glamurosa " />
          <Produto image={Set4} alt="Conjunto 4" title="Conjunto Atrevida " />
          <Produto image={Set5} alt="Conjunto 5" title="Conjunto Deusa " />
          <Produto image={Set6} alt="Conjunto 6" title="Conjunto Magnífica " />
        </GridProduto>
      </Content>
    </Container>
  )
}

export default Conjunto