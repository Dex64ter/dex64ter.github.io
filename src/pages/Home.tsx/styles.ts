import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HomeContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 2.5rem;

  display: flex;
  align-items: flex-end;
  gap: 10rem;
`

export const HomeApresentation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    color: transparent;
    -webkit-text-stroke: 1px ${(props) => props.theme.colors.white};
    font-size: 3.5rem;
    line-height: 1;
  }

  strong {
    font-size: 4rem;
    line-height: 1;
  }

  p {
    font-size: 1.5rem;
    font-weight: bold;
  }
`

export const ButtonLink = styled(NavLink)`
  width: 200px;
  padding: 1.25rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors['base-text']};

  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
    transition: 0.2s;
  }
`

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  img {
    width: 12rem;
    height: 12rem;
  }
`
