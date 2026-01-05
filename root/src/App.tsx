import './App.css'

function App() {
  return (
    <>
      <h1>React: Fordele og Ulemper</h1>
      <div className="lister">
        <ul className='fordele'>
          <li>Gratis og open source</li>
          <li>Komponent-baseret</li>
          <li>Genbrug af kode</li>
          <li>Virtuelt DOM for bedre ydeevne</li>
          <li>Stærkt fællesskab og økosystem</li>
          <li>Hurtig rendering pga. effektiv diffing i Virtual DOM</li>
          <li>Stor efterspørgsel på arbejdsmarkedet</li>
          <li>Let at kombinere med andre frameworks og biblioteker</li>
          <li>God understøttelse af TypeScript</li>
          <li>Stærk state-håndtering (fx med hooks)</li>
          <li>Let at teste komponenter isoleret</li>
          <li>God dokumentation og mange tutorials</li>
          <li>Let at bygge både web og mobile apps (React Native)</li>
        </ul>

        <ul className='ulemper'>
          <li>Hurtig udvikling kan føre til ustabilitet</li>
          <li>JSX kan have en læringskurve</li>
          <li>Kun fokus på UI-laget</li>
          <li>SEO-udfordringer for single-page applikationer</li>
          <li>Mange måder at gøre det samme på → kan skabe forvirring</li>
          <li>Hyppige opdateringer og ændringer i best practice</li>
          <li>Kræver ofte ekstra biblioteker (routing, state, forms)</li>
          <li>Opsætning kan virke tung for små projekter</li>
          <li>Performance-problemer hvis hooks bruges forkert</li>
          <li>Stejlere læringskurve for helt nye udviklere</li>
          <li>Afhænger meget af tredjeparts-pakker</li>
        </ul>
      </div>
    </>
  )
}

export default App
