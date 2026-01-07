import { Nav } from "../navComponent/Nav"

// Interface til props
interface HeaderProps {
    headerText: string // man kan bruge ?  hvilket betyder, at det er valgfrit
}

// Arrow function komponent
export const Header = ({ headerText = "Mangler headerText" }: HeaderProps) => {
    return (
        <header className="bg-blue-700 p-4 text-white flex justify-between items-center">
            <h1 className="text-3xl font-bold">{headerText}</h1>
            <Nav />
        </header>

    )
}