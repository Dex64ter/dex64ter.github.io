import styled, { keyframes } from 'styled-components'

const float = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
`

const scaleUp = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 107, 53, 0.4);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(255, 107, 53, 0);
  }
`

export const SkillsContainer = styled.section`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background};
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 8%;
  position: relative;
  overflow: hidden;

  @media (max-width: 968px) {
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
}

export const Shape = styled.div<ShapeProps>`
  position: absolute;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background: linear-gradient(135deg, #ff6b35, #f7931e);
  ${(props) => (props.circle ? 'border-radius: 50%;' : '')}
  top: ${(props) => props.top || 'auto'};
  bottom: ${(props) => props.bottom || 'auto'};
  left: ${(props) => props.left || 'auto'};
  right: ${(props) => props.right || 'auto'};
  transform: rotate(${(props) => props.rotation}deg);
  opacity: 0.3;
  animation: ${float} 6s ease-in-out infinite;

  @media (max-width: 968px) {
    opacity: 0.15;
  }
`

export const SkillsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 4rem;
  z-index: 10;

  @media (max-width: 968px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  z-index: 10;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`

export const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 12px;
  background: rgba(255, 107, 53, 0.05);
  border: 2px solid rgba(255, 107, 53, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  animation: ${scaleUp} 0.5s ease-out;

  &:hover {
    background: rgba(255, 107, 53, 0.15);
    border-color: #ff6b35;
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(255, 107, 53, 0.2);
    animation: ${pulse} 2s infinite;
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 0.6rem;
  }
`

interface SkillIconProps {
  color: string
}

export const SkillIcon = styled.div<SkillIconProps>`
  font-size: 2.5rem;
  color: ${(props) => props.color};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  ${SkillCard}:hover & {
    transform: scale(1.2) rotate(5deg);
    filter: drop-shadow(0 0 10px ${(props) => props.color});
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`

export const SkillName = styled.span`
  font-size: 0.95rem;
  font-weight: 500;
  text-align: center;
  color: #b0b0b0;
  transition: all 0.3s ease;

  ${SkillCard}:hover & {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`
