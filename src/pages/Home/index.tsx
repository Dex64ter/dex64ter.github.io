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
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { About } from '../About/index.tsx'
import { useScrollTo } from '../../hooks/useScrollTo.ts'
import { Work } from '../Work.tsx/index.tsx'
import { Contact } from '../Contact/index.tsx'
import { Skills } from '../Skills/index.tsx'

export function Home() {
  const { scrollToSection } = useScrollTo()

  return (
    <>
      <HomeContainer>
        <FloatingShapes>
          <Shape size="80px" top="10%" right="8%" rotation={45} />
          <Shape size="60px" bottom="15%" left="15%" rotation={-30} />
          <Shape size="50px" bottom="50%" right="85%" rotation={200} />
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
            href="https://www.linkedin.com/in/davi-santos-3bb8a819b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </SocialIcon>
          <SocialIcon
            href="https://github.com/dex64ter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </SocialIcon>
        </SocialLinks>

        <ScrollIndicator>
          <span>scroll down</span>
          <div className="arrow">↓</div>
        </ScrollIndicator>

        <HomeApresentation>
          <Greeting>Hello</Greeting>
          <div>
            <h1>
              I&#39;m <strong>Davi J. Santos</strong>
            </h1>
          </div>
          <p>A full stack developer based in Brazil.</p>

          <ButtonLink onClick={() => scrollToSection('about')}>
            Learn more
          </ButtonLink>
        </HomeApresentation>

        <AvatarContainer>
          <img src={avatar} alt="Davi J. Santos - Developer" />
        </AvatarContainer>
      </HomeContainer>

      <section id={'about'} style={{ minHeight: '100vh' }}>
        <About />
      </section>

      <section id={'work'} style={{ padding: '2rem' }}>
        <Work />
      </section>

      <section id={'habilidades'} style={{ minHeight: '100vh' }}>
        <Skills />
      </section>

      <section id={'contact'} style={{ minHeight: '100vh' }}>
        <Contact />
      </section>
    </>
  )
}
