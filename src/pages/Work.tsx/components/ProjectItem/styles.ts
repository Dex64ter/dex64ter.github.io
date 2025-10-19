import styled from 'styled-components'

export const ItemContainer = styled.li`
  min-width: 280px;
  background: linear-gradient(135deg, #292220, #1a1a1a);

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.colors.orange};
  border-radius: 3px;

  padding: 2rem 1rem;
`

export const DescriptionContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: self-start;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.5rem;
`

export const Description = styled.div`
  display: flex;

  p {
    font-size: 0.8rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors['base-placeholder']};
  }
`

export const AcessLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    display: inline-block;
    padding: 0.8rem 1rem;
    background: linear-gradient(135deg, #ff6b35, #f7931e);
    color: #ffffff;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    margin-top: 1rem;

    &:hover {
      transition: all 0.3s ease;
      background: transparent;
      border-color: #ff6b35;
      color: #ff6b35;
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(255, 107, 53, 0.3);
    }
  }
`
