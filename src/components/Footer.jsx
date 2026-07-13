import { Link } from 'react-router-dom'
import { FaEnvelope, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Davao Travel Journal</h3>
          <p>
            A modern travel blog promoting the beauty of the Philippines with a special
            focus on Davao City and nearby attractions.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/destinations">Destinations</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4>Follow</h4>
          <div className="social-row">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
            <a href="mailto:hello@davaotraveljournal.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Davao Travel Journal. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
