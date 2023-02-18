import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import Home from './Home'
import SearchForm from './SearchForm'
import Movie from './SingleMovie'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<Movie />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
