import './Nav.css';

export const Nav = () => {

    const links = ['Home', 'About', 'Services', 'Contact'];

    return (
        <nav>
            <ul style={{ listStyle: 'none' }}>
                <li>
                    {links.map((link, index) => (
                        <a key={index} href={`#${link.toLowerCase()}`} style={{ padding: '1rem', margin: '0 0.5rem' }}>
                            {link}
                        </a>
                    ))}
                </li>
            </ul>
        </nav>
    )
}