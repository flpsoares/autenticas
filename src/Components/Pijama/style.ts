import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  overflow-x: hidden;
  overflow-y: auto;
`

export const Content = styled.div`
  background: black;
`

export const GridProduto = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 100px;
  grid-row-gap: 20px;
  justify-content: center;
  margin-top: 20px;
`

export const ContentTitleArea = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
`