import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

const float = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
`

const floatVertical = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`

export const HomeContainer = styled.div`
  min-height: 90vh;
  background-color: #${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8%;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 4rem 1rem;
    gap: 3rem;
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
  ${(props) => (props.circle ? 'border-radius: 50%;' : '')};
  top: ${(props) => props.top || 'auto'};
  bottom: ${(props) => props.bottom || 'auto'};
  left: ${(props) => props.left || 'auto'};
  right: ${(props) => props.right || 'auto'};
  transform: rotate(${(props) => props.rotation}deg);
  opacity: 0.6;
  animation: ${float} 6s ease-in-out infinite;

  @media (max-width: 968px) {
    opacity: 0.3;
  }
`

export const SocialLinks = styled.div`
  position: fixed;
  left: 3%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 100;

  @media (max-width: 968px) {
    left: 2%;
    gap: 1.5rem;
  }
`

export const SocialIcon = styled.a`
  color: #ffffff;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  opacity: 0.7;

  &:hover {
    color: #ff6b35;
    opacity: 1;
    transform: translateX(5px);
  }

  @media (max-width: 968px) {
    font-size: 1.3rem;
  }
`

export const HomeApresentation = styled.div`
  flex: 1;
  max-width: 600px;
  z-index: 10;

  h1 {
    font-size: 3.5rem;
    font-weight: 400;
    margin: 1rem 0;
    -webkit-text-stroke: 1px ${(props) => props.theme.colors.white};
    line-height: 1.2;

    strong {
      display: block;
      font-weight: 700;
      font-size: 4rem;
      background: linear-gradient(135deg, #ffffff, #ff6b35);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  p {
    font-size: 1.1rem;
    color: #b0b0b0;
    margin: 2rem 0;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;

    h1 {
      font-size: 2.5rem;

      strong {
        font-size: 3rem;
      }
    }

    p {
      font-size: 1rem;
    }
  }
`

export const Greeting = styled.span`
  color: #ff6b35;
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 40px;
    height: 2px;
    background: #ff6b35;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const ButtonLink = styled(Link)`
  display: inline-block;
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
    background: transparent;
    border-color: #ff6b35;
    color: #ff6b35;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(255, 107, 53, 0.3);
  }
`

export const AvatarContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  position: relative;

  img {
    border: 1px;
    max-width: 1500px;
    width: 100%;
    height: auto;
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5));
    animation: ${floatVertical} 4s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    img {
      max-width: 350px;
    }
  }
`

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 10;

  span {
    font-size: 0.8rem;
    color: #b0b0b0;
    text-transform: uppercase;
    letter-spacing: 2px;
    transform: rotate(-90deg);
  }

  .arrow {
    font-size: 1.5rem;
    color: #ff6b35;
    animation: ${pulse} 2s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
