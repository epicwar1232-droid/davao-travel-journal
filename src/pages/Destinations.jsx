import { useMemo, useState } from 'react'
import { blogData } from '../data/blogData'

function Destinations() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const categories = ['All', ...new Set(blogData.map((item) => item.category))]

  const filteredDestinations = useMemo(() => {
    return blogData.filter((item) => {
      const matchesSearch = [item.title, item.location, item.category]
        .join(' ')
        .toLowerCase()
        .includes(search.toLowerCase())

      const matchesCategory = category === 'All' || item.category === category

      return matchesSearch && matchesCategory
    })
  }, [search, category])

  return (
    <section className="section page-section">
      <div className="container">
        <div className="section-heading fade-in">
          <p className="section-tag">Destinations</p>
          <h2>Explore Davao’s best tourist attractions</h2>
        </div>

        <div className="filters">
          <input
            type="search"
            placeholder="Search destinations"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="destination-list">
          {filteredDestinations.map((item) => (
            <article key={item.id} className="destination-list-item">
              <img src={item.image} alt={item.title} className="list-image" />
              <div className="destination-content">
                <span className="badge">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul>
                  <li>
                    <strong>Location:</strong> {item.location}
                  </li>
                  <li>
                    <strong>Entrance Fee:</strong> {item.entranceFee}
                  </li>
                  <li>
                    <strong>Best Time to Visit:</strong> {item.bestTime}
                  </li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Destinations
