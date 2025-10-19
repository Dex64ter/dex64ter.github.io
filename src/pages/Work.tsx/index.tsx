import { useEffect, useRef, useState } from 'react'
import { ProjectItem, Repo } from './components/ProjectItem'
import {
  WorkContainer,
  WorkTitle,
  WorkList,
  CarouselContainer,
  CarouselButtonPrev,
  CarouselButtonNext,
} from './styles'
// import { Octokit } from '@octokit/core'
// import { api } from '../../services/api'

interface ReposProps {
  id: number
  name: string
  description: string
  url: string
}

export function Work() {
  const [reposList, setReposList] = useState<Repo[]>([])
  const carouselRef = useRef<HTMLUListElement>(null)

  const handleScroll = (direction: 'prev' | 'next') => {
    if (!carouselRef.current) return

    const scrollAmount = 400
    const isNext = direction === 'next'

    carouselRef.current.scrollBy({
      left: isNext ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    })
  }

  async function getProjects() {
    const data = await import('../../db.json')
    const projects = (data.default || data).projects as ReposProps[]
    setReposList(projects)
  }

  useEffect(() => {
    getProjects()
  }, [])

  if (reposList.length === 0) {
    return (
      <WorkContainer>
        <WorkTitle>Featured Works</WorkTitle>
        <p style={{ color: '#b0b0b0', textAlign: 'center' }}>
          Nenhum projeto encontrado.
        </p>
      </WorkContainer>
    )
  }

  return (
    <WorkContainer>
      <WorkTitle>Featured Works</WorkTitle>
      <CarouselContainer>
        <CarouselButtonPrev onClick={() => handleScroll('prev')}>
          ←
        </CarouselButtonPrev>
        <WorkList ref={carouselRef}>
          {reposList.map((repo) => {
            return (
              <ProjectItem
                key={repo.url}
                id={repo.id}
                name={repo.name}
                description={repo.description}
                url={repo.url}
              />
            )
          })}
        </WorkList>
        <CarouselButtonNext onClick={() => handleScroll('next')}>
          →
        </CarouselButtonNext>
      </CarouselContainer>
    </WorkContainer>
  )
}
