function ContactForm() {
  return (
    <section className="form-section">
      <h2>Have Questions About Planetary Science?</h2>
      <p className="section-text">
        Interested in learning more about space, astronomy, or how planetary data
        is collected and analyzed? Reach out and we'll get back to you.
      </p>
      <form className="contact-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="City" />
        <input type="tel" placeholder="Phone Number" />
        <textarea placeholder="Your message"></textarea>
        <button type="submit" className="btn primary">Submit</button>
      </form>
    </section>
  )
}
export default ContactForm