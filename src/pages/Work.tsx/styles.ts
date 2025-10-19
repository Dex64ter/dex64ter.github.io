import styled from 'styled-components'

export const WorkContainer = styled.div`
  max-width: 100vw;
  margin-top: 2.5rem;
  padding: 0 8%;
  padding-right: 0;
`

export const WorkTitle = styled.h1`
  font-family: 'Comfortaa', sans-serif;
  font-size: 2.5rem;
`

export const CarouselContainer = styled.div`
  position: relative;
  margin-top: 3.5rem;
  margin-bottom: 1rem;
`

export const WorkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  /* filter: blur(2px); */

  /* scroll */
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  padding-top: 1rem;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }

  &::after {
    position: absolute;
    content: '';
    background: #1a1a1a;
    opacity: 0.5;
    right: -5px;
    width: 20px;
    height: 90%;
    filter: blur(2.5rem);
  }
`

export const CarouselButton = styled.button`
  position: absolute;
  top: 40%;
  background: #292220;
  opacity: 0.75;
  /* border: 1px solid #ff6b35; */
  border-radius: 50%;
  color: #fff;
  width: 25px;
  height: 25px;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: #ff6b35;
    box-shadow: 0 10px 25px rgba(255, 107, 53, 0.4);
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const CarouselButtonPrev = styled(CarouselButton)`
  left: 0px;
`

export const CarouselButtonNext = styled(CarouselButton)`
  right: 0px;
`
