import styled, { keyframes } from 'styled-components'

const float = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const AboutContainer = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background};
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 8%;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 5%;
  }
`

export const FloatingShapes = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 1;
`

interface ShapeProps {
  size: string
  top?: string
  bottom?: string
  left?: string
  right?: string
  rotation: number
  circle?: boolean
  color?: string
}

export const Shape = styled.div<ShapeProps>`
  position: absolute;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background: ${(props) =>
    `linear-gradient(135deg, ${props.color || '#ff6b35'}, ${props.color || '#f7931e'})`};
  ${(props) => (props.circle ? 'border-radius: 50%;' : '')}
  top: ${(props) => props.top || 'auto'};
  bottom: ${(props) => props.bottom || 'auto'};
  left: ${(props) => props.left || 'auto'};
  right: ${(props) => props.right || 'auto'};
  transform: rotate(${(props) => props.rotation}deg);
  opacity: 0.4;
  animation: ${float} 6s ease-in-out infinite;

  @media (max-width: 968px) {
    opacity: 0.2;
  }
`

export const TitleAbout = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  color: #ffffff;
  margin: 0%;
  font-family: 'Comfortaa', cursive;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`

export const MainAbout = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 5rem;
  max-width: 1200px;
  width: 100%;
  z-index: 10;
  align-items: center;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 1000px) {
    grid-template-columns: 350px 1fr;
    gap: 15px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ImgBox = styled.div`
  position: relative;
  width: 100%;

  img {
    width: 100%;
    height: auto;
    border-radius: 0;
    filter: grayscale(100%) contrast(1.1);
    transition: all 0.3s ease;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  }

  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: -15px;
    right: 15px;
    bottom: 15px;
    border: 3px solid #ff6b35;
    z-index: -1;
    transition: all 0.3s ease;
  }

  &:hover {
    img {
      filter: grayscale(0%) contrast(1);
      transform: translate(10px, 10px);
    }

    &::before {
      top: -10px;
      left: -10px;
      right: 10px;
      bottom: 10px;
    }
  }

  @media (max-width: 968px) {
    max-width: 400px;
    margin: 0 auto;

    &::before {
      top: -10px;
      left: -10px;
      right: 10px;
      bottom: 10px;
    }
  }
`

export const Subtitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1.3;
  margin: 0;

  span {
    color: #ff6b35;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`

export const ButtonLink = styled.button`
  display: flex-end;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #ff6b35, #f7931e);
  color: #ffffff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  margin-top: 1rem;

  &:hover {
    transition: all 0.3s ease;
    background: transparent;
    border-color: #ff6b35;
    color: #ff6b35;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(255, 107, 53, 0.3);
  }
`

export const ContentText = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: #b0b0b0;
  margin: 0;
  max-width: 700px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 0 auto;
  }
`
