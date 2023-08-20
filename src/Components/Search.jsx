import { Component } from "react"

class Search extends Component {
  state = {
    inputValue: "",
    type : 'all'
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.inputValue, this.state.type)

    }
  }

  handleFilter = (event) =>{
    this.setState(()=>({type : event.target.dataset.type}),()=>{
      this.props.searchMovies(this.state.inputValue, this.state.type)
    })
  }

  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          placeholder="input title..."
          onChange={this.handleChange}
          value={this.state.inputValue}
          style={{ paddingLeft: "10px", paddingRight: "10px" }}
          onKeyDown={this.handleKey}
        />
        <button
          className="waves-effect waves-light btn-small search-btn"
          onMouseDown={() => this.props.searchMovies(this.state.inputValue)}
        >
          Search
        </button>

        <p>
          <label>
            <input className="with-gap" 
            name="type" 
            type="radio"
            data-type="all" 
            onChange={this.handleFilter}
            checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>

          <label>
            <input className="with-gap" 
            name="type" 
            type="radio" 
            data-type="movie"
            onChange={this.handleFilter}
            checked={this.state.type === 'movie'}
            />
            <span>Movie</span>
          </label>

          <label>
            <input className="with-gap" 
            name="type" 
            type="radio" 
            data-type="series"
            onChange={this.handleFilter}
            checked={this.state.type === 'series'}
            />
            <span>Series</span>
          </label>
        </p>
      </div>
    )
  }
}

export { Search }
