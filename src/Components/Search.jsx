import { Component, useState } from "react"

const Search  = (props) => {
  const {
    searchMovies = Function.prototype
  } = props

  const [inputValue, setInputValue] = useState('')
  const [type, setType] = useState('all')

  
  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleKey = (event) => {
    if (event.key === "Enter") {
      searchMovies(inputValue, type)

    }
  }

  const handleFilter = (event) =>{
    setType(event.target.dataset.type)
    searchMovies(inputValue, event.target.dataset.type)
    
  }

  
    return (
      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          placeholder="input title..."
          onChange={handleChange}
          value={inputValue}
          style={{ paddingLeft: "10px", paddingRight: "10px" }}
          onKeyDown={handleKey}
        />
        <button
          className="waves-effect waves-light btn-small search-btn"
          onMouseDown={() => searchMovies(inputValue)}
        >
          Search
        </button>

        <p>
          <label>
            <input className="with-gap" 
            name="type" 
            type="radio"
            data-type="all" 
            onChange={handleFilter}
            checked={type === 'all'}
            />
            <span>All</span>
          </label>

          <label>
            <input className="with-gap" 
            name="type" 
            type="radio" 
            data-type="movie"
            onChange={handleFilter}
            checked={type === 'movie'}
            />
            <span>Movie</span>
          </label>

          <label>
            <input className="with-gap" 
            name="type" 
            type="radio" 
            data-type="series"
            onChange={handleFilter}
            checked={type === 'series'}
            />
            <span>Series</span>
          </label>
        </p>
      </div>
    )
  }


export { Search }
