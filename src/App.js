import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'


export default function App(){
  const [darkMode, setDarkMode]  = React.useState(true)

  function toToggleDarkMode(){
    console.log('toggle')
    setDarkMode(prevMode => !prevMode)
  }
  return (
    <div className = "container">
      <Navbar 
        darkMode={darkMode}
        toggleDarkMode = {toToggleDarkMode}
      
      />
      <Main darkMode={darkMode}/>
    </div>
  )
}