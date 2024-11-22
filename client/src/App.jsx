import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/registerPage'
import Login from './pages/Login'
import Home from './pages/Home'
import MessagePage from './components/MessagePage'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        {/* <Route path="/page" element={<Page/>}/> */}
        <Route path="/" element={<Login/>}/>
        <Route element={<Home/>}>
        <Route path="/home" element={<Home/>}/>
        <Route path="/:userId" element={<MessagePage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App