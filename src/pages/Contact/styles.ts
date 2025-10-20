import styled from 'styled-components'

export const ContactContainer = styled.div`
  min-height: 100vh;
  padding: 1rem 8%;
`

export const TemplateContact = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;

  @media (max-width: 1024px) {
    grid-template-columns: 100%;
  }
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 500px;
  padding: 2rem 8%;
  width: 100%;
  gap: 2.5rem;
  z-index: 10;

  h2 {
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 1.3;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #b0b0b0;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    align-items: center;
    text-align: center;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  gap: 8px;

  a {
    background: #dadada;
    height: 30px;
    width: 30px;
    padding: 4px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      background: #ff6b35;
      box-shadow: 0 10px 25px rgba(255, 107, 53, 0.4);
    }
  }
`

export const EmailPhone = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
  }
`

export const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  strong {
    font-size: 0.9rem;
    font-weight: 600;
    color: #ff6b35;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  span {
    font-size: 1rem;
    color: #b0b0b0;

    a {
      color: #b0b0b0;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #ff6b35;
      }
    }
  }
`

export const FormContainer = styled.div`
  margin: 2rem auto;

  padding: 1rem;
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.orange};

  strong {
    font-family: 'Roboto', sans-serif;
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.background};
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const FormContact = styled.form`
  width: 100%;
  margin-top: 1rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  border: 2px solid black;
  gap: 20px;

  div {
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 8px;

    label {
      font-family: 'Roboto', sans-serif;
      font-size: 0.8rem;
      font-weight: 500;
      color: ${(props) => props.theme.colors.white};
    }

    input {
      font-size: 1rem;
      font-weight: 500;
      background: transparent;
      color: ${(props) => props.theme.colors.white};
      padding: 0.4rem;
      border: none;
      border-bottom: 1px solid white;
      outline: none;

      ::placeholder {
        color: ${(props) => props.theme.colors.white};
      }

      &:focus {
        background: white;
        border: none;
        color: black;
      }
    }

    textarea {
      font-size: 1rem;
      font-weight: 600;
      color: ${(props) => props.theme.colors.white};
      background: transparent;
      padding: 0.4rem;
      border: none;
      border-bottom: 1px solid white;
      resize: none;

      &:focus {
        background: white;
        border: none;
        color: black;
      }
    }
  }
`

export const SubmitButton = styled.button`
  background: #1a1a1a;
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem;
  display: inline-block;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  &:hover {
    opacity: 0.9;
    transition: 0.2s;
  }
`
