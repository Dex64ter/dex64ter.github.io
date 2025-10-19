import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  ContactContainer,
  FormContainer,
  FormContact,
  SubmitButton,
  ContactInfo,
  TemplateContact,
  SocialLinks,
  EmailPhone,
  DetailItem,
} from './styles'
import { FaEnvelope, FaInstagram, FaPhoneAlt } from 'react-icons/fa'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')

  function resetForm() {
    setName('')
    setEmail('')
    setMessage('')
    setPhone('')
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    const formMessageToMe = {
      name,
      email,
      message,
      phone,
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
      <TemplateContact>
        <ContactInfo>
          <div>
            <h2>Let&apos;s create something together</h2>
            <p>
              Feel free to reach out for collaborations or just a friendly
              hello!
            </p>
          </div>

          <SocialLinks>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} color="#1a1a1a" />
            </a>
            <a href="emailto:davijosantos.dj@gmail.com">
              <FaEnvelope size={20} color="#1a1a1a" />
            </a>
            <a href="emailto:davijosantos.dj@gmail.com">
              <FaPhoneAlt size={20} color="#1a1a1a" />
            </a>
          </SocialLinks>

          <EmailPhone>
            <DetailItem>
              <strong>Email:</strong>
              <span>davijosantos.dj@gmail.com</span>
            </DetailItem>
            <DetailItem>
              <strong>Phone:</strong>
              <span>+55 (86) 9 9561-3851</span>
            </DetailItem>
          </EmailPhone>
        </ContactInfo>

        <FormContainer>
          <FormContact onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">NAME</label>
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
              <label htmlFor="email">E-MAIL ADDRESS</label>
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
              <label htmlFor="email">PHONE NUMBER</label>
              <input
                type="phone"
                id="phone"
                name="phone_number"
                placeholder="(99)9999999"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="message">MESSAGE</label>
              <textarea
                id="message"
                placeholder="let a message here..."
                rows={1}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <SubmitButton type="submit">Send message</SubmitButton>
          </FormContact>
        </FormContainer>
      </TemplateContact>
    </ContactContainer>
  )
}
