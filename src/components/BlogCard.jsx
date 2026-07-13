import { Link } from 'react-router-dom'

function BlogCard({ item }) {
  return (
    <article className="blog-card card-hover">
      <img src={item.image} alt={item.title} className="card-image" />
      <div className="card-body">
        <span className="badge">{item.category}</span>
        <h3>{item.title}</h3>
        <p className="location-text">{item.location}</p>
        <p>{item.description}</p>
        <Link className="text-link" to={`/blog/${item.id}`}>
          Read More
        </Link>
      </div>
    </article>
  )
}

export default BlogCard
