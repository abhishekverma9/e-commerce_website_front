import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {

  return (
    <>
    <div className='min-h-screen bg-gray-700 w-full'>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
    </>
  )
}

export default App
