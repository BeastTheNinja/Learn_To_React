
// Interface til props
interface GreetingProps {
  name: string
}

// Her laver vi bare en funktion, der tager props som parameter
export function Greeting({ name }: GreetingProps) {
  return (
    <p>Hej {name}!</p>
  )
}