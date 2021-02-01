import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;

  display: flex;
  flex-direction: column;
  justify-content: start;

`

export const Space = styled.div`
  height: 100px;
  width: 100%;
  background-color: black;
`

export const SpotlightArea = styled.div`
  display: flex;
  justify-content: center;
`

export const Spotlight = styled.div`
  img {
    width: 350px;
    object-fit: cover;
  }
  
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 0 5px;
  transition: all 0.2s ease-in-out;

  span {
    color: #FF9797;
    text-align: center;
    font-size: 30px;
    font-family: 'Dancing Script', sans-serif;
    text-shadow: 2px 2px 5px #FF9797;
  }

  &:hover {
    transform: scale(1.1);
    margin: 0 30px;
  }
`

export const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100px;

  p {
    color: white;
    font-size: 30px;
  }
`

export const Title = styled.span`
  color: #FF9797;
  font-size: 40px;
  font-family: 'Dancing Script', sans-serif;
  font-style: italic;
  margin-top: -20px;
  text-shadow: 2px 2px 5px #FF9797;
  font-weight: 700;
`

export const ContentArea = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ContentTitle = styled.span`
  color: white;
  font-size: 40px;
  text-align: center;
  margin: 20px 0;
  font-family: 'Dancing Script', sans-serif;
`

export const CardArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  width: 90%;
`

export const EmptyCard = styled.div`
  background-color: transparent;
  width: 350px;
  height: 400px;
  display: flex;
  flex: 1;
`