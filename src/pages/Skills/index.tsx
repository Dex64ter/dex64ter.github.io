import {
  SiTypescript,
  SiStyledcomponents,
  SiNestjs,
  SiMysql,
  SiAndroidstudio,
} from 'react-icons/si'
import {
  SkillsContainer,
  SkillsTitle,
  SkillsGrid,
  SkillCard,
  SkillIcon,
  SkillName,
  FloatingShapes,
  Shape,
} from './styles'
import {
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaPython,
  FaGit,
  FaFigma,
  FaGithub,
} from 'react-icons/fa'
import { FaFlutter } from 'react-icons/fa6'

interface SkillItemProps {
  name: string
  icon: React.ReactNode
  color: string
}

const skillsData: SkillItemProps[] = [
  { name: 'HTML', icon: <FaHtml5 />, color: '#d6d6d6' },
  { name: 'CSS', icon: <FaCss3Alt />, color: '#d6d6d6' },
  { name: 'JavaScript', icon: <FaJs />, color: '#d6d6d6' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#d6d6d6' },
  { name: 'Angular', icon: <FaAngular />, color: '#d6d6d6' },
  { name: 'React', icon: <FaReact />, color: '#d6d6d6' },
  { name: 'Flutter', icon: <FaFlutter />, color: '#d6d6d6' },
  { name: 'Node.js', icon: <FaNode />, color: '#d6d6d6' },
  { name: 'Nest.js', icon: <SiNestjs />, color: '#d6d6d6' },
  { name: 'Python', icon: <FaPython />, color: '#d6d6d6' },
  { name: 'MySQL', icon: <SiMysql />, color: '#d6d6d6' },
  { name: 'Styled Components', icon: <SiStyledcomponents />, color: '#d6d6d6' },
  { name: 'Git', icon: <FaGit />, color: '#d6d6d6' },
  { name: 'GitHub', icon: <FaGithub />, color: '#d6d6d6' },
  { name: 'Figma', icon: <FaFigma />, color: '#d6d6d6' },
  { name: 'Android Studio', icon: <SiAndroidstudio />, color: '#d6d6d6' },
]

export function Skills() {
  return (
    <SkillsContainer id="skills">
      <FloatingShapes>
        <Shape size="70px" top="5%" left="10%" rotation={30} />
        <Shape size="50px" bottom="20%" right="15%" rotation={-45} />
        <Shape size="60px" top="50%" right="8%" rotation={60} circle />
      </FloatingShapes>

      <SkillsTitle>My Skills</SkillsTitle>

      <SkillsGrid>
        {skillsData.map((skill) => (
          <SkillCard key={skill.name}>
            <SkillIcon color={skill.color}>{skill.icon}</SkillIcon>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  )
}
