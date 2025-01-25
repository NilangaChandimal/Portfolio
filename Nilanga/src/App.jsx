import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Experience from './Components/Experience/Experience'
import NavBar from './Components/NavBar/NavBar'
import Profile from './Components/Profile/Profile'
import Project from './Components/Project/Project'

function App() {

  return (
    <>
      <NavBar />
      <Profile/>
      <About/>
      <Experience/> 
      <Project/> 
      <Contact/>   
    </>
  )
}

export default App
