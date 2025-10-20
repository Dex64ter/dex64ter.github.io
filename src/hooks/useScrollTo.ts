import { useNavigate } from 'react-router-dom'

export const useScrollTo = () => {
  const navigate = useNavigate()

  const scrollToSection = (sectionId: string, path?: string) => {
    if (path && window.location.pathname !== path) {
      navigate(path)
      setTimeout(() => {
        scrollToElement(sectionId)
      }, 100)
    } else {
      scrollToElement(sectionId)
    }
  }

  const scrollToElement = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return { scrollToSection }
}
