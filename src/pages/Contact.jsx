import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMailBulk } from 'react-icons/fa'

function Contact() {
  return (
    <section className="section page-section">
      <div className="container contact-layout">
        <div className="section-heading fade-in">
          <p className="section-tag">Contact</p>
          <h2>Let’s connect about your next Davao adventure</h2>
        </div>

        <div className="contact-card">
          <form className="contact-form">
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="your@email.com" />
            </label>
            <label>
              Message
              <textarea rows="5" placeholder="Tell us what you want to explore..."></textarea>
            </label>
            <button type="button" className="btn btn-primary">
              Submit
            </button>
          </form>

          <div className="social-contact">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
              Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
              LinkedIn
            </a>
            <a href="mailto:hello@davaotraveljournal.com">
              <FaMailBulk />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
