import { useState } from 'react'
import Header from './components/header/Header'
import Introduction from './components/sections/Introduction/Introduction'
import Lore from './components/sections/lore/Lore'
import Usage from './components/sections/usage/Usage'
import Team from './components/sections/Team/Team'
import Contact from './components/sections/contact/Contact'
import Comeback from './components/comeback/Comeback'
import './App.css'

function App() {
  
  return (
    <div className='container'>
      <Introduction/>
      <Lore/>
      <Usage/>
      <Team/>
      <Contact/>
      <Comeback/>
    </div>
  )
}

export default App
