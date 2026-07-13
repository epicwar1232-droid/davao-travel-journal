import { useEffect, useMemo, useState } from 'react'
import Hero from '../components/Hero'
import FeaturedSection from '../components/FeaturedSection'
import BlogCard from '../components/BlogCard'
import { featuredDestinations, blogData } from '../data/blogData'
import { FaMountain, FaShip, FaShieldAlt, FaUtensils, FaStar, FaLandmark } from 'react-icons/fa'

const highlights = [
  { icon: FaShieldAlt, title: 'Safe City' },
  { icon: FaShip, title: 'Beautiful Beaches' },
  { icon: FaMountain, title: 'Mountains' },
  { icon: FaLandmark, title: 'Culture' },
  { icon: FaUtensils, title: 'Food' },
  { icon: FaStar, title: 'Festivals' },
]

function Home() {
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 700)
    return () => window.clearTimeout(timer)
  }, [])

  const filteredBlogs = useMemo(() => {
    return blogData.filter((post) =>
      [post.title, post.location, post.category]
        .join(' ')
        .toLowerCase()
        .includes(search.toLowerCase()),
    )
  }, [search])

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loader" aria-label="Loading destinations" />
      </div>
    )
  }

  return (
    <div>
      <Hero
        title="Discover the Beauty of Davao"
        subtitle="Explore the best tourist destinations in the Philippines, starting with the heart of Mindanao."
      />

      <FeaturedSection items={featuredDestinations} />

      <section className="section alt-section">
        <div className="container">
          <div className="section-heading fade-in">
            <p className="section-tag">Why visit Davao</p>
            <h2>Every trip offers adventure, flavor, and discovery</h2>
          </div>

          <div className="highlight-grid">
            {highlights.map(({ icon: Icon, title }) => (
              <div key={title} className="highlight-card">
                <Icon className="highlight-icon" />
                <h3>{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading fade-in">
            <p className="section-tag">Latest travel blogs</p>
            <h2>Stories and guides from the Philippines</h2>
          </div>

          <div className="search-box">
            <input
              type="search"
              placeholder="Search destinations or categories"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="card-grid three-col">
            {filteredBlogs.map((post) => (
              <BlogCard key={post.id} item={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
