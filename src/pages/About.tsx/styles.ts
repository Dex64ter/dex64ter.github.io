import styled from 'styled-components'

export const AboutContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 2.5rem;
`

export const TitleAbout = styled.h1`
  font-size: 2.5rem;
  font-family: 'Comfortaa', cursive;
`

export const MainAbout = styled.main`
  margin: 0 auto;
  margin-top: 2.75rem;

  width: 60vw;
  padding: 1.25rem;
  background: ${(props) => props.theme.colors.green};
  border-radius: 36px;
`

export const MainContent = styled.div`
  /* width: 100%; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;
  background: ${(props) => props.theme.colors.background};
  border-radius: 36px;
  padding: 1.25rem;

  p {
    text-align: justify;
    font-size: 1.25rem;
  }
`

export const ImgBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 300px;
  }
`
