import "./assets/styles/main.scss"
import { AppFooter } from "./cmp/app-footer"
import { AppHeader } from "./cmp/app-header"
import { Home } from "./pages/Home"

function App() {
  return (
    <div className="App main-container">
      <AppHeader />
      <main>
        <Home />
      </main>
      <AppFooter />
    </div>
  )
}

export default App
