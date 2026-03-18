import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Profile(){
  return(
    <>
      <img src={reactLogo} alt="reactLogo"/>
    </>
  )
}
function Profile2(){
  return(
    <>
      <img src={viteLogo} alt="viteLogo"/>
    </>
  )
}
function Profile3(){
  return(
    <>
      <img src={heroImg} alt="heroImg"/>
    </>
  )
}
export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Profile/>
      <Profile2/>
      <Profile3/>
    </>
  )
}

// export default App
