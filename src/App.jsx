import Feature from "./components/Feature"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Howitworks from "./components/Howitworks"
import Model from "./components/Model"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Feature/>
      <Howitworks/>
      <Footer/>
    </main>
  )
}

export default App