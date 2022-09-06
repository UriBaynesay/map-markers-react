import "./assets/styles/main.scss"
import { AppFooter } from "./cmp/app-footer"
import { AppHeader } from "./cmp/app-header"
import { MapApp } from "./cmp/map-app"

function App() {
  return (
    <div className="App main-container">
      <AppHeader />
      <main>
        <MapApp/>
      </main>
      <AppFooter />
    </div>
  )
}

export default App
