// import ProjectImg from '../../../../assets/websites/exmpleProject.png'
import RockPaperScissors from '../../../../assets/websites/RPS-page.png'
import ToDoList from '../../../../assets/websites/TDL-page.png'
import CardProfile from '../../../../assets/websites/CP-page.png'
import CoffeeDelivery from '../../../../assets/websites/CD-page.png'
import DevLinksProject from '../../../../assets/websites/DLP-page.png'
import DinamicDigitalClock from '../../../../assets/websites/DDC-page.png'
import FAQ from '../../../../assets/websites/FAQ-page.png'
import IgniteFeed from '../../../../assets/websites/IF-page.png'
import ProductPreviewCard from '../../../../assets/websites/PPC-page.png'
import { formatDistanceToNow } from 'date-fns'
import { useState } from 'react'
import { ptBR } from 'date-fns/locale'
import {
  ImgContainer,
  ItemContainer,
  ProjectContent,
  DescriptionContent,
  Description,
  RolesLink,
  AcessLinks,
} from './styles'

export interface Repo {
  id: number
  numberIndex: number
  name: string
  description: string
  languagesUrl: string
  url: string
  createdAt: Date
}

export function ProjectItem({
  name,
  numberIndex,
  description,
  createdAt,
  url,
  languagesUrl,
}: Repo) {
  const [langs, setLangs] = useState('')

  function formatedTitle(nameProj: string) {
    return nameProj.charAt(0).toUpperCase() + nameProj.slice(1)
  }

  function formatedUrl() {
    return `https://dex64ter.github.io/${name}`
  }

  const index = numberIndex < 10 ? `0${numberIndex}` : numberIndex

  function getLanguages() {
    fetch(languagesUrl)
      .then(async (response) => {
        return response.json()
      })
      .then((data) => {
        const languages = Object.keys(data)
        setLangs(languages.join(', '))
      })
  }

  getLanguages()

  function getImage(nameProject: string) {
    switch (nameProject) {
      case 'Rock-Paper-Scissors':
        return RockPaperScissors
      case 'ToDo-List':
        return ToDoList
      case 'Card-Profile':
        return CardProfile
      case 'Coffee-Delivery':
        return CoffeeDelivery
      case 'DevLinks-Project':
        return DevLinksProject
      case 'Dinamic-Digital-Clock':
        return DinamicDigitalClock
      case 'FAQ':
        return FAQ
      case 'Ignite-feed':
        return IgniteFeed
      case 'Product-preview-card':
        return ProductPreviewCard
    }
  }

  return (
    <ItemContainer>
      <ProjectContent>
        <h2>
          {index}. {formatedTitle(name)}{' '}
        </h2>
        <DescriptionContent>
          <Description>
            <p>{description}</p>
            <span>
              {formatDistanceToNow(createdAt, {
                locale: ptBR,
                addSuffix: true,
              })}
            </span>
          </Description>
          <RolesLink>
            <p>
              <strong>Roles: </strong>
              <span>{langs}</span>
            </p>
            <AcessLinks>
              <a href={formatedUrl()}>Go To Website</a>
              <a href={url}>Go To Project</a>
            </AcessLinks>
          </RolesLink>
        </DescriptionContent>
      </ProjectContent>
      <ImgContainer>
        <img src={getImage(name)} alt={`Imagem do projeto ${name}`} />
      </ImgContainer>
    </ItemContainer>
  )
}
