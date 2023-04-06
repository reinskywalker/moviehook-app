import logo from './logo.svg';
import './App.css';
import { getMovieList, searchMovie } from './getAPI'
import { useEffect, useState } from 'react';


const App = () => {


const [popularMovies, setPopularMovies] = useState([])
  useEffect(() => {
    getMovieList().then((results) => {
      setPopularMovies(results)
    })
  }, [])

 const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
          <div className="movie-wrapper" key={i}>
            <div className="movie-title">{movie.title}</div>
            <img 
              className="movie-image" 
              src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            />
            <div className="movie-date">{movie.release_date}</div>
            <div className="movie-rating">{movie.vote_average}</div>
          </div>
      )
    })
 }

  const search = (q) => {
    console.log({q})
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>.movie</h1>
      <input 
      placeholder="Search for movie" 
      className="movie-search"
      onChange={(target) => search(target.value)}
      ></input>
        <div className="movie-container">
         <PopularMovieList />
        </div>
      </header>
    </div>
  );
}

export default App;
