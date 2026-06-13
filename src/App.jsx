import ScrollProgress from './components/ScrollProgress'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Competences from './components/Competences'
import Saes from './components/Saes'
import Stage from './components/Stage'
import Conclusion from './components/Conclusion'
import Footer from './components/Footer'
import './styles/components.css'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Competences />
        <Saes />
        <Stage />
        <Conclusion />
      </main>
      <Footer />
    </>
  )
}
