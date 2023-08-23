import { Component } from "react"
import { MovieCards } from "../Components/movieCards"
import { Preloader } from "../Components/Preloader"
import { Search } from "../Components/Search"
import { useState, useEffect } from "react"

const API_KEY = process.env.REACT_APP_API_KEY

const Main = () => {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  const searchMovies = (str, type = "all") => {

    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search)
        setLoading(false)
      })
  }


  useEffect(()=>{
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search)
        setLoading(false)
      })}
  , []) 
    
  
    return loading ? (
      <div>
        <Preloader />
      </div>
    ) : (
      <div>
        <Search searchMovies={searchMovies} />

        <MovieCards movies={movies} />
      </div>
    )
  }


export { Main }
