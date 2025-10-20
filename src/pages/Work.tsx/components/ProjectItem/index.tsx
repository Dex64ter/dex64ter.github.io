// import { useState } from 'react'
import {
  ItemContainer,
  DescriptionContent,
  Description,
  // RolesLink,
  AcessLinks,
} from './styles'

export interface Repo {
  id: number
  name: string
  description: string
  url: string
}

export function ProjectItem({ name, description, url }: Repo) {
  // const [langs, setLangs] = useState('')

  function formatedTitle(nameProj: string) {
    return nameProj.charAt(0).toUpperCase() + nameProj.slice(1)
  }

  return (
    <ItemContainer>
      <DescriptionContent>
        <h2>{formatedTitle(name)}</h2>
        <Description>
          <p>{description}</p>
          {/* <span>
            {formatDistanceToNow(createdAt, {
              locale: ptBR,
              addSuffix: true,
            })}
          </span> */}
        </Description>
        <AcessLinks>
          <a href={url}>View Project</a>
        </AcessLinks>
      </DescriptionContent>
    </ItemContainer>
  )
}
