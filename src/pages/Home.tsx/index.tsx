import {
  HomeApresentation,
  HomeContainer,
  ButtonLink,
  AvatarContainer,
} from './styles'
import avatar from '../../assets/avatar.png'

export function Home() {
  return (
    <HomeContainer>
      <HomeApresentation>
        <div>
          <h1>Hi there, I&#39;m </h1>
          <strong>Davi J. Santos</strong>
          <h1>Web developer & Software Engineer</h1>
        </div>
        <p>
          Experienced front-end developer adept in Python, JavaScript, and
          React, committed to crafting immersive user experiences and embracing
          new challenges.
        </p>

        <ButtonLink to={'/about'}>Know me</ButtonLink>
      </HomeApresentation>
      <AvatarContainer>
        <img src={avatar} alt="" />
        <ButtonLink to={'/work'}>See my work</ButtonLink>
      </AvatarContainer>
    </HomeContainer>
  )
}
