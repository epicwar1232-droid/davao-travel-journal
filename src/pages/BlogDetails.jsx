import { useParams, Link } from 'react-router-dom'
import { blogData } from '../data/blogData'

function BlogDetails() {
  const { id } = useParams()
  const post = blogData.find((item) => item.id === Number(id))

  if (!post) {
    return (
      <section className="section page-section">
        <div className="container empty-state">
          <h2>Destination not found.</h2>
          <Link className="btn btn-primary" to="/destinations">
            Back to destinations
          </Link>
        </div>
      </section>
    )
  }

  const galleryImages = post.gallery?.length ? post.gallery : [post.image]

  return (
    <section className="section page-section">
      <div className="container detail-layout">
        <img src={post.image} alt={post.title} className="detail-hero" />
        <div className="detail-copy">
          <span className="badge">{post.category}</span>
          <h1>{post.title}</h1>
          <p className="detail-meta">
            <strong>Author:</strong> Davao Travel Journal • <strong>Date:</strong> April 2, 2026
          </p>
          <p>{post.description}</p>

          <div className="detail-grid">
            <div>
              <h3>Travel Tips</h3>
              <p>{post.tips}</p>
            </div>
            <div>
              <h3>History</h3>
              <p>{post.history}</p>
            </div>
            <div>
              <h3>Things to Do</h3>
              <p>{post.tips}</p>
            </div>
            <div>
              <h3>Nearby Attractions</h3>
              <p>{post.nearbyAttractions || post.location}</p>
            </div>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <img key={`${post.id}-${index}`} src={image} alt={`${post.title} gallery ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogDetails
