import { useState } from 'react'
import { useT } from '../i18n.jsx'
import { useReveal } from '../hooks/useReveal'
import { IconMail, IconGlobe, IconBuilding, IconArrow, IconCheck } from '../components/Icons.jsx'

const encode = (data) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const t = useT()
  const c = t.contact
  useReveal([t])

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', 'bot-field': '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | sent | error

  const handle = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const validate = () => {
    const er = {}
    if (!form.name.trim()) er.name = c.errName
    if (!emailRe.test(form.email.trim())) er.email = c.errEmail
    if (!form.message.trim()) er.message = c.errMessage
    return er
  }

  const submit = async (e) => {
    e.preventDefault()
    const er = validate()
    if (Object.keys(er).length) {
      setErrors(er)
      const first = document.querySelector('.form-group .has-error')
      first?.focus()
      return
    }
    setStatus('submitting')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...form }),
      })
      if (!res.ok) throw new Error('Network response was not ok')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const reset = () => {
    setForm({ name: '', email: '', subject: '', message: '', 'bot-field': '' })
    setErrors({})
    setStatus('idle')
  }

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero__bg-grid" />
        <div className="container">
          <p className="eyebrow">{c.heroEyebrow}</p>
          <h1>{c.heroTitleA}<span className="gold">{c.heroTitleB}</span></h1>
          <p className="page-hero__sub">{c.heroSub}</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">

          {/* ── CONTACT INFO ── */}
          <div className="contact-info reveal">
            <h2>{c.detailsTitle}</h2>

            <div className="contact-item">
              <div className="contact-item__icon"><IconMail /></div>
              <div>
                <p className="contact-item__label">{c.labelEmail}</p>
                <a href="mailto:ayham@alhazaimeh-ventures.com" className="gold">
                  ayham@alhazaimeh-ventures.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item__icon"><IconGlobe /></div>
              <div>
                <p className="contact-item__label">{c.labelWebsite}</p>
                <p>alhazaimeh-ventures.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item__icon"><IconBuilding /></div>
              <div>
                <p className="contact-item__label">{c.labelOps}</p>
                <p>{c.opsValue}</p>
              </div>
            </div>

            <div className="contact-topics">
              <h4>{c.topicsTitle}</h4>
              {c.topics.map((topic) => (
                <div className="contact-topic" key={topic}>
                  <IconArrow className="contact-topic__arrow" /> {topic}
                </div>
              ))}
            </div>
          </div>

          {/* ── FORM ── */}
          <div className="contact-form-wrap reveal">
            {status === 'sent' ? (
              <div className="contact-sent">
                <div className="contact-sent__icon"><IconCheck /></div>
                <h3>{c.sentTitle}</h3>
                <p>{c.sentText}</p>
                <button className="btn btn--outline" onClick={reset}>
                  {c.sentAgain}
                </button>
              </div>
            ) : (
              <form
                className="contact-form"
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={submit}
                noValidate
              >
                <h2>{c.formTitle}</h2>
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>Do not fill this out: <input name="bot-field" onChange={handle} /></label>
                </p>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">{c.fName}</label>
                    <input
                      id="name" name="name" type="text"
                      className={errors.name ? 'has-error' : undefined}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'err-name' : undefined}
                      placeholder={c.fNamePh}
                      value={form.name} onChange={handle}
                    />
                    {errors.name && <span className="form-error" id="err-name">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">{c.fEmail}</label>
                    <input
                      id="email" name="email" type="email"
                      className={errors.email ? 'has-error' : undefined}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'err-email' : undefined}
                      placeholder={c.fEmailPh}
                      value={form.email} onChange={handle}
                    />
                    {errors.email && <span className="form-error" id="err-email">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">{c.fSubject}</label>
                  <input
                    id="subject" name="subject" type="text"
                    placeholder={c.fSubjectPh}
                    value={form.subject} onChange={handle}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">{c.fMessage}</label>
                  <textarea
                    id="message" name="message" rows={6}
                    className={errors.message ? 'has-error' : undefined}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'err-message' : undefined}
                    placeholder={c.fMessagePh}
                    value={form.message} onChange={handle}
                  />
                  {errors.message && <span className="form-error" id="err-message">{errors.message}</span>}
                </div>

                {status === 'error' && <p className="form-submit-error">{c.errSubmit}</p>}

                <button type="submit" className="btn btn--gold btn--full" disabled={status === 'submitting'}>
                  {status === 'submitting' ? c.sending : c.send}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </>
  )
}
