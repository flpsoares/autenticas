import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  /* margin: 0 5px; */

  img {
    height: 600px;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    img {
      width: 98%;
    }
  } 
`