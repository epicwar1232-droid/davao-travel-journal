import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.png'

function Hero({ title, subtitle, buttonText = 'Explore Destinations' }) {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(7, 31, 47, 0.55), rgba(7, 31, 47, 0.4)), url(${heroImage})`,
      }}
    >
      <div className="container hero-content">
        <div className="hero-copy fade-in">
          <span className="eyebrow">Philippines Travel Blog</span>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <Link className="btn btn-primary" to="/destinations">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
