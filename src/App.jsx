import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header.jsx'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import MovieContextProvider from './context/MovieContextProvider.jsx'
import './index.css'



function App() {

  return (
    <>
      <MovieContextProvider>
       {/*  <NavBar />   */}
        <Outlet />
       {/*  <Footer /> */}
      </MovieContextProvider>
    </>
  )
}


export default App
