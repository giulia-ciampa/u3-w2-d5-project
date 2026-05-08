import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import WeatherNavbar from "./components/WeatherNavbar"
import Home from "./components/Home"
import WeatherFooter from "./components/WheatherFooter"

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <header>
        <WeatherNavbar />
      </header>
      <main className="d-flex flex-grow-1">
        <Home />
      </main>
      <footer>
        <WeatherFooter />
      </footer>
    </div>
  )
}

export default App
