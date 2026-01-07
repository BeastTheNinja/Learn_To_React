import { Footer } from './component/FooterComponent/Footer'
import { Header } from './component/HeaderComponent/Header'
import { MainContent } from './component/MainComponent/MainComponent'

function App() {


  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header headerText='Props er cool!' />
        <MainContent />
        <Footer />
      </div>

    </>
  )
}

export default App
