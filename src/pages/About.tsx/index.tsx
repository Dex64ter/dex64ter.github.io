import {
  AboutContainer,
  TitleAbout,
  MainAbout,
  MainContent,
  ImgBox,
} from './styles'
import FotoProfile from '../../assets/FotoProfile.png'

export function About() {
  return (
    <AboutContainer>
      <TitleAbout>About</TitleAbout>
      <MainAbout>
        <MainContent>
          <ImgBox>
            <img
              src={FotoProfile}
              alt="Foto de perfil do Davi José menino bonito, moreno de
              óculos e muito sorridente"
            />
          </ImgBox>
          <p>
            Hello! I&#39;m Davi Santos, a junior front-end developer with a
            passion for crafting engaging user experiences using React. From my
            early adventures in computing to my current studies in Computer
            Federal University of Piauí, I&#39;ve embraced the ever-evolving
            world of technology with enthusiasm. With a keen eye for detail and
            a commitment to continuous learning, I&#39;m dedicated boundaries of
            what&#39;s possible in web development. Nice to meet you!
          </p>
        </MainContent>
      </MainAbout>
    </AboutContainer>
  )
}
