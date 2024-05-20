import styled from 'styled-components'

export const ItemContainer = styled.li`
  max-height: calc(100vh - 4.25rem);
  width: 100%;
  display: grid;
  grid-template-columns: 420px 1fr;
  gap: 20px;
`

export const ProjectContent = styled.div`
  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  h2 {
    font-size: 2.25rem;
  }
`

export const DescriptionContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.5rem;

  padding: 0.5rem 2rem;
  border-left: 1px solid ${(props) => props.theme.colors.green};
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-size: 1.25rem;
    font-weight: 400;
  }
  span {
    font-size: 1rem;
    color: ${(props) => props.theme.colors['base-placeholder']};
  }
`

export const RolesLink = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    padding: 0.5rem 0;

    border-top: 1px solid ${(props) => props.theme.colors.white};
    border-bottom: 1px solid ${(props) => props.theme.colors.white};
  }
`

export const AcessLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    padding: 1rem 0;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex: 1;

    background-color: ${(props) => props.theme.colors.green};
    color: ${(props) => props.theme.colors['base-text']};

    border-radius: 6px;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
      transition: 0.2s;
    }
  }
`

export const ImgContainer = styled.div`
  background-color: ${(props) => props.theme.colors.green};
  height: 320px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  overflow: hidden;

  img {
    width: 100%;
  }
`
