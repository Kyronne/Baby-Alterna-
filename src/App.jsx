import { BrowserRouter } from 'react-router-dom';
import { About, Hero, Navbar, } from './components'

const App = () =>  {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-fuchsia-700">
      
        <Navbar />
        <Hero />    
        <About />
        <div className='relative z-0'>
        </div>
    </div>
    </BrowserRouter>
  )
}

export default App
