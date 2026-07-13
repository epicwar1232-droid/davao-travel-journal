import { Link } from 'react-router-dom'

function FeaturedSection({ items }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading fade-in">
          <p className="section-tag">Featured destinations</p>
          <h2>Must-visit places in Davao and nearby</h2>
        </div>

        <div className="card-grid three-col">
          {items.map((item) => (
            <article key={item.id} className="destination-card card-hover">
              <img src={item.image} alt={item.title} className="card-image" />
              <div className="card-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link className="btn btn-secondary" to={`/blog/${item.id}`}>
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection
