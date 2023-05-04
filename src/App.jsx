import { BrowserRouter } from 'react-router-dom';
import { About, Hero, Navbar, Roadmap } from './components'

const App = () =>  {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      
        <Navbar />
        <Hero />    
        <About />
        <Roadmap />
        <div className='relative z-0'>
        </div>
    </div>
    </BrowserRouter>
  )
}

export default App
