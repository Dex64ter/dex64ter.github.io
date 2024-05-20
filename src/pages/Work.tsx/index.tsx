import { useEffect, useState } from 'react'
import { ProjectItem, Repo } from './components/ProjectItem'
import { WorkContainer, WorkTitle, WorkList } from './styles'
// import { Octokit } from '@octokit/core'
import { api } from '../../services/api'

interface ReposProps {
  id: number
  name: string
  description: string
  languages_url: string
  html_url: string
  has_pages: boolean
  created_at: string
}

export function Work() {
  const [reposList, setReposList] = useState<Repo[]>([])

  useEffect(() => {
    let allRepos: Repo[] = []
    async function getRepos(pageNumber: number) {
      const repos = await api.get(`/users/Dex64ter/repos`, {
        params: {
          page: pageNumber,
        },
      })

      const reposWithPages = repos.data.filter(
        (repo: ReposProps) =>
          repo.has_pages && repo.name !== 'dex64ter.github.io',
      )
      const formatedRepos = reposWithPages.map((repo: ReposProps) => {
        return {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          languagesUrl: repo.languages_url,
          url: repo.html_url,
          createdAt: repo.created_at,
        }
      })
      allRepos = allRepos.concat(formatedRepos)
      setReposList(allRepos)
    }
    getRepos(1)
    getRepos(2)
  }, [])

  return (
    <WorkContainer>
      <WorkTitle>My Work</WorkTitle>
      <WorkList>
        {reposList.map((repo, index) => {
          return (
            <ProjectItem
              key={repo.url}
              id={repo.id}
              numberIndex={index + 1}
              name={repo.name}
              description={repo.description}
              languagesUrl={repo.languagesUrl}
              url={repo.url}
              createdAt={new Date(repo.createdAt)}
            />
          )
        })}
      </WorkList>
    </WorkContainer>
  )
}
