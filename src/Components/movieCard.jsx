export const MovieCard = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props
  return (
    <div className="card" style={{height : '400px', width : '400px', margin : 'auto', display : 'inline'}}>
      <div className="card-image waves-effect waves-block waves-light" >
        <img className="activator" src={Poster} style={{height : '250px', width : '250px', margin : 'auto'}}  />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4" style={{margin : 'auto', paddingTop : '10px'}}>
          {Title}
        </span>
        <div>
          {Year} year Type: <span>{Type}</span>
        </div>
      </div>
    </div>
  )
}
