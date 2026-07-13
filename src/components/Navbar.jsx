import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaMapMarkedAlt, FaTimes } from 'react-icons/fa'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/destinations', label: 'Destinations' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar-wrap">
      <nav className="navbar container">
        <Link className="brand" to="/" onClick={closeMenu}>
          <span className="brand-icon">
            <FaMapMarkedAlt />
          </span>
          <span>Davao Travel Journal</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
