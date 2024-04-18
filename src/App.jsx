import { useState, useEffect } from 'react'
import axios from 'axios'
import MainPage from './routes/MainPage'
import './App.css'
import Character from './components/Character'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CharacterPage } from './routes/CharacterPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='/character/:id' element={<CharacterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
