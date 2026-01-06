import './App.scss'
import { Footer } from './Component/FooterComponent/Footer'
import { Header } from './Component/HeaderComponent/Header'
import { MainContent } from './Component/MainComponent/MainContent'


function App() {
  return(
    <div className="app-layout">
     <Header/>
     <MainContent/>
     <Footer/>
    </div>
  )
}

export default App
