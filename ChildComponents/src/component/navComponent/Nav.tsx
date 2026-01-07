export const Nav = () => {

    const links = ['Home', 'Projects', 'Contact'];

    return (
        <nav className="bg-gray-800 p-2">
            <ul className="flex space-x-5">
                {links.map(link => (
                    <li key={link}>
                        <a href={`#${link.toLowerCase()}`} className="text-white hover:underline">{link}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}