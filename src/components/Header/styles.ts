import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1.5rem 0;
  background: ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors['base-text']};
`

export const HeaderContent = styled.div`
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin: 0 auto;
`

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 5rem;

  a {
    font-size: 1.25rem;
    font-family: 'Comfortaa', sans-serif;
    text-decoration: none;
    color: ${(props) => props.theme.colors['base-text']};

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.colors['base-text']};
      transition: 0.2s;
    }
  }
`

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;

  svg {
    color: ${(props) => props.theme.colors['base-text']};
  }
`
