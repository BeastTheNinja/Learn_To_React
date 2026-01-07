import { Greeting } from "../GreetingComponent/Greeting"
import { FavoritesList } from "../ListeComponent/Liste"

export const MainContent = () => {
  return (
    <main className="bg-blue-500 flex-1 flex flex-col justify-center items-center p-4 min-h-screen">
      <h2 className="text-2xl text-white font-bold">Lærings mål</h2>
      <p className="mt-4 text-white text-center max-w-md">
        <Greeting name="Sebastian Larsen" /> 
        <Greeting name="Benjamin" /> 
        <Greeting name="Wally" /> 
      </p>
      <FavoritesList />
    </main>
  )
}