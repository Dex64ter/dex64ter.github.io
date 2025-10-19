import styled from 'styled-components'

export const ContactContainer = styled.div`
  max-width: 840px;
  margin: 0 auto;
  margin-top: 4rem;
`

export const ContactTitle = styled.h1`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Comfortaa', sans-serif;
  font-size: 2.5rem;
`

export const SocialLinks = styled.div`
  margin-top: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-family: 'Comfortaa', sans-serif;
    font-size: 1.2rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-top: 2rem;

    a {
      width: 50px;
      height: 50px;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;

      background-color: ${(props) => props.theme.colors.green};
      color: ${(props) => props.theme.colors.background};

      &:hover {
        opacity: 0.8;
        transition: opacity 0.2s;
      }
    }
  }
`

export const FormContainer = styled.div`
  margin: 2rem auto;

  padding: 2rem;
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.green};

  strong {
    font-family: 'Roboto', sans-serif;
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.background};
  }
`

export const FormContact = styled.form`
  width: 100%;
  margin-top: 1rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 8px;

    label {
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      font-weight: bold;
      color: ${(props) => props.theme.colors.background};
    }

    input {
      font-size: 1rem;
      color: ${(props) => props.theme.colors.white};
      background: ${(props) => props.theme.colors.background};
      padding: 0.4rem;
      border: none;
      border-radius: 6px;
    }

    textarea {
      font-size: 1.25rem;
      color: ${(props) => props.theme.colors.white};
      background: ${(props) => props.theme.colors.background};
      padding: 0.4rem;
      border: none;
      border-radius: 6px;
      resize: none;
    }
  }
`

// export const NamePhone = styled.section`
//   display: flex;
//   align-items: center;
//   gap: 32px;
// `

export const SubmitButton = styled.button`
  background: ${(props) => props.theme.colors['base-text']};
  color: ${(props) => props.theme.colors.green};
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 0;
  border-radius: 8px;

  &:hover {
    opacity: 0.9;
    transition: 0.2s;
  }
`
