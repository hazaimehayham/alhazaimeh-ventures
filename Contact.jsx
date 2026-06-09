import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    // Opens mail client with pre-filled details as a simple contact solution
    const mailto = `mailto:ayham@alhazaimeh-ventures.com?subject=${encodeURIComponent(form.subject || 'Enquiry from Website')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailto
    setSent(true)
  }

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero__bg-grid" />
        <div className="container">
          <p className="eyebrow">Let's Connect</p>
          <h1>Get in <span className="gold">Touch</span></h1>
          <p className="page-hero__sub">
            Whether you're a brand exploring a partnership, an investor, or a supplier —
            we're always open to meaningful conversations.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">

          {/* ── CONTACT INFO ── */}
          <div className="contact-info">
            <h2>Contact Details</h2>

            <div className="contact-item">
              <div className="contact-item__icon">✉</div>
              <div>
                <p className="contact-item__label">Email</p>
                <a href="mailto:ayham@alhazaimeh-ventures.com" className="gold">
                  ayham@alhazaimeh-ventures.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item__icon">🌐</div>
              <div>
                <p className="contact-item__label">Website</p>
                <p>alhazaimeh-ventures.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item__icon">🏢</div>
              <div>
                <p className="contact-item__label">Operations</p>
                <p>Healthcare · Energy · Food & Beverage</p>
              </div>
            </div>

            <div className="contact-topics">
              <h4>What We're Open To</h4>
              {[
                'Franchise & licensing partnerships',
                'Supplier & distribution agreements',
                'Investment & joint ventures',
                'General business enquiries',
              ].map(t => (
                <div className="contact-topic" key={t}>
                  <span className="gold">→</span> {t}
                </div>
              ))}
            </div>
          </div>

          {/* ── FORM ── */}
          <div className="contact-form-wrap">
            {sent ? (
              <div className="contact-sent">
                <div className="contact-sent__icon">✓</div>
                <h3>Opening your mail client…</h3>
                <p>
                  Your message details are pre-filled and ready to send to{' '}
                  <span className="gold">ayham@alhazaimeh-ventures.com</span>.
                </p>
                <button className="btn btn--outline" onClick={() => setSent(false)}>
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={submit}>
                <h2>Send a Message</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name" name="name" type="text" required
                      placeholder="Your name"
                      value={form.name} onChange={handle}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email" name="email" type="email" required
                      placeholder="your@email.com"
                      value={form.email} onChange={handle}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject" name="subject" type="text"
                    placeholder="e.g. Partnership Inquiry"
                    value={form.subject} onChange={handle}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message" name="message" rows={6} required
                    placeholder="Tell us about your enquiry…"
                    value={form.message} onChange={handle}
                  />
                </div>
                <button type="submit" className="btn btn--gold btn--full">
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </>
  )
}
