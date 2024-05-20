import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  DeviceMobileCamera,
  EnvelopeSimple,
  InstagramLogo,
  LinkedinLogo,
} from 'phosphor-react'
import {
  ContactContainer,
  ContactTitle,
  SocialLinks,
  FormContainer,
  FormContact,
  SubmitButton,
} from './styles'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function resetForm() {
    setName('')
    setEmail('')
    setMessage('')
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    const formMessageToMe = {
      name,
      email,
      message,
    }

    emailjs
      .send(
        'service_iz1z5jo',
        'template_b1now9q',
        formMessageToMe,
        '_e_rOd_Ib4G7x4gzq',
      )
      .then(
        () => {
          toast.success('SUCCESS!! Thanks for your message.')
        },
        (error) => {
          toast.error('FAILED... Please try again later.')
          console.log(error.text)
        },
      )
    resetForm()
  }

  return (
    <ContactContainer>
      <ToastContainer />
      <ContactTitle>
        Let&apos;s create something extraordinary together!
      </ContactTitle>
      <SocialLinks>
        <span>Go ahead... don&apos;t be shy!</span>
        <div>
          <a href="tel:+55(86)995613851">
            <DeviceMobileCamera size={30} />
          </a>
          <a href="https://www.linkedin.com/in/davi-santos-3bb8a819b/">
            <LinkedinLogo size={30} />
          </a>
          <a href="mailto:davijosantos.dj@gmail.com">
            <EnvelopeSimple size={30} />
          </a>
          <a href="https://www.instagram.com/davi.jozedjs/">
            <InstagramLogo size={30} />
          </a>
        </div>
      </SocialLinks>
      <FormContainer>
        <strong>Let&apos;s chat</strong>
        <FormContact onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder="Jhon Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="exemple@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="let a message here..."
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <SubmitButton type="submit">Send message</SubmitButton>
        </FormContact>
      </FormContainer>
    </ContactContainer>
  )
}
