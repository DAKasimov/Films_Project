import { Component } from "react"
import { MovieCards } from "../Components/movieCards"
import { Preloader } from "../Components/Preloader"
import { Search } from "../Components/Search"

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends Component {
  state = {
    movies: [],
    inputValue: "",
    loading: true,
  }

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
  }

  searchMovies = (str, type = "all") => {

    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
  }

  render() {
    return this.state.loading ? (
      <div>
        <Preloader />
      </div>
    ) : (
      <div>
        <Search searchMovies={this.searchMovies} />

        <MovieCards movies={this.state.movies} />
      </div>
    )
  }
}

export { Main }
