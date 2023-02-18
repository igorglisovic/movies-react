import React, { useState, useContext, useEffect, useTransition } from 'react'
// make sure to use https
import useFetch from './useFetch'
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const AppContext = React.createContext({
  isLoading: false,
  query: '',
  movies: [],
  error: {},
  setQuery: () => {},
})

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('batman')
  const { isLoading, data: movies, error } = useFetch(`&s=${query}`)

  return (
    <AppContext.Provider
      value={{
        isLoading,
        error,
        movies,
        query,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
