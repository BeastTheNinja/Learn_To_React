import { Nav } from "../navComponent/Nav"

export const Header = () => {
    return (
        <header className="flex bg-blue-600 p-0 m-0 justify-between items-center">
            <h1 className="text-3xl font-bold underline">
                My Portfolio
            </h1>
            <Nav />
        </header>
    )
}