import "./Style/style.scss"
import { Home } from "./Components/Home/Home"
import { Skills } from "./Components/Skills/Skills"
import { Projects } from "./Components/Projects/Projects"
import { Contact } from "./Components/Contact/Contact"
import { Footer } from "./Components/Footer/Footer"
import { LangProvider } from "./Components/Context/LangContext"

function App() {

  return (
    <LangProvider>
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </LangProvider>
  )
}

export default App
