import {
  HomeApresentation,
  HomeContainer,
  ButtonLink,
  AvatarContainer,
  FloatingShapes,
  Shape,
  SocialLinks,
  SocialIcon,
  ScrollIndicator,
  Greeting,
} from './styles'
import avatar from '../../assets/avatar.png'
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'
// import { TwitterLogo, InstagramLogo, FacebookLogo } from '@phosphor-icons/react'

export function Home() {
  return (
    <HomeContainer>
      <FloatingShapes>
        <Shape size="80px" top="10%" right="8%" rotation={45} />
        <Shape size="60px" bottom="15%" left="15%" rotation={-30} />
        <Shape size="50px" bottom="50%" right="85%" rotation={20} />
        <Shape size="70px" top="45%" right="5%" rotation={60} circle />
        <Shape
          size="70px"
          top="25%"
          right="15%"
          rotation={40}
          color="#4e4e4e"
        />
        <Shape
          size="70px"
          top="36%"
          right="80%"
          rotation={30}
          color="#4e4e4e"
        />
      </FloatingShapes>

      <SocialLinks>
        <SocialIcon
          href="https://www.instagram.com/davijse.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </SocialIcon>
        <SocialIcon
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={24} />
        </SocialIcon>
        <SocialIcon
          href="https://github.com/dex64ter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </SocialIcon>
      </SocialLinks>

      <HomeApresentation>
        <Greeting>Hello</Greeting>
        <div>
          <h1>
            I&#39;m <strong>Davi J. Santos</strong>
          </h1>
        </div>
        <p>A full stack developer based in Brazil.</p>

        <ButtonLink to={'/about'}>Learn more</ButtonLink>
      </HomeApresentation>

      <AvatarContainer>
        <img src={avatar} alt="Davi J. Santos - Developer" />
      </AvatarContainer>

      <ScrollIndicator>
        <span>scroll down</span>
        <div className="arrow">↓</div>
      </ScrollIndicator>
    </HomeContainer>
  )
}
