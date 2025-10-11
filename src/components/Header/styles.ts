import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1.5rem 0;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.orange};
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
    color: ${(props) => props.theme.colors.orange};

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.colors.orange};
      transition: border-bottom 0.2s ease-in-out;
    }
  }
`

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;

  svg {
    color: ${(props) => props.theme.colors.orange};
  }
`
