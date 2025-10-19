import {
  AboutContainer,
  TitleAbout,
  MainAbout,
  MainContent,
  ImgBox,
  FloatingShapes,
  Shape,
  ContentText,
  Subtitle,
  ButtonLink,
} from './styles'
import FotoProfile from '../../assets/TD4_4321.jpg'
import { useScrollTo } from '../../hooks/useScrollTo'

export function About() {
  const { scrollToSection } = useScrollTo()

  return (
    <AboutContainer id="about">
      <FloatingShapes>
        <Shape size="70px" top="8%" right="10%" rotation={30} />
        <Shape size="50px" bottom="10%" right="19%" rotation={55} />
        <Shape size="60px" top="50%" left="5%" rotation={60} circle />
        <Shape
          size="30px"
          top="45%"
          left="7%"
          rotation={40}
          circle
          color="#4e4e4e"
        />
        <Shape
          size="30px"
          top="25%"
          right="15%"
          rotation={40}
          color="#4e4e4e"
        />
      </FloatingShapes>

      <MainAbout>
        <ImgBox>
          <img
            src={FotoProfile}
            alt="Foto de perfil do Davi José, moreno de óculos e muito sorridente"
          />
        </ImgBox>

        <MainContent>
          <TitleAbout>About me</TitleAbout>

          <Subtitle>
            I will <span>Design & Develop</span> the best websites
          </Subtitle>

          <ContentText>
            Hello! I&apos;m Davi Santos, a junior front-end developer with a
            passion for crafting engaging user experiences using React. From my
            early adventures in computing to my current studies in Computer
            Science at Federal University of Piauí, I&apos;ve embraced the
            ever-evolving world of technology with enthusiasm. With a keen eye
            for detail and a commitment to continuous learning, I&apos;m
            dedicated to pushing the boundaries of what&apos;s possible in web
            development. Nice to meet you!
          </ContentText>
          <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
            <ButtonLink onClick={() => scrollToSection('work')}>
              See my work
            </ButtonLink>
          </div>
        </MainContent>
      </MainAbout>
    </AboutContainer>
  )
}
