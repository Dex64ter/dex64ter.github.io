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
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNode,
  FaDatabase,
  FaPython,
  FaGit,
  FaFigma,
  FaDocker,
} from 'react-icons/fa'
import {  } from 'react-icons/fa'

interface SkillItemProps {
  name: string
  icon: React.ReactNode
  color: string
}

const skillsData: SkillItemProps[] = [
  { name: 'HTML', icon: <FaHtml5 />, color: '#E34C26' },
  { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
  { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'Node.js', icon: <FaNode />, color: '#68A063' },
  { name: 'Python', icon: <FaPython />, color: '#3776AB' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
  { name: 'Styled Components', icon: <SiStyledComponents />, color: '#DB7093' },
  { name: 'Git', icon: <FaGit />, color: '#F1502F' },
  { name: 'Figma', icon: <FaFigma />, color: '#F24E1E' },
  { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
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
            <SkillIcon color={skill.color}>
              {skill.icon}
            </SkillIcon>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  )
}