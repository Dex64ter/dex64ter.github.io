import { NavLink } from 'react-router-dom'
import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'
import {
  HeaderContainer,
  HeaderContent,
  HeaderNav,
  SocialMedia,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderNav>
          <NavLink to="/">DAVI</NavLink>
          <NavLink to="/work">WORK</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </HeaderNav>
        <SocialMedia>
          <a href="https://www.linkedin.com/in/davi-santos-3bb8a819b/">
            <LinkedinLogo size={24} />
          </a>
          <a href="https://github.com/Dex64ter">
            <GithubLogo size={24} />
          </a>
          <a href="https://www.instagram.com/davi.jozedjs/">
            <InstagramLogo size={24} />
          </a>
        </SocialMedia>
      </HeaderContent>
    </HeaderContainer>
  )
}
