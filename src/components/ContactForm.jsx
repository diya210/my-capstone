import { useState } from 'react'

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('https://whitebricks.com/tsacademy.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true))
  }

  return (
    <section className="form-section" id="contact">
      <h2>Have Questions About Planetary Science?</h2>
      <p className="section-text">
        Interested in learning more about space, astronomy, or how planetary 
        data is collected and analyzed? Reach out and we'll get back to you.
      </p>
      {submitted ? (
        <div style={{
          background: '#2563eb',
          color: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          maxWidth: '700px',
          textAlign: 'center',
          fontSize: '1.2rem'
        }}>
          ✅ Thank you! Your message has been submitted successfully.
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="btn primary">Submit</button>
        </form>
      )}
    </section>
  )
}

export default ContactForm