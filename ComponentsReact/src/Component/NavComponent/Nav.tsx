import './Nav.css'

const links = ['Home', 'About', 'Services', 'Contact']

export const Nav = () => {
  return (
    <nav>
      <ul className="nav-list">
        {links.map(link => (
          <li key={link} className="nav-item">
            <a href={`#${link.toLowerCase()}`}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
