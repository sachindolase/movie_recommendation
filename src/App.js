import React, { useEffect , useState ,handleGenreChange , genre} from 'react';

const movies = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    genre: 'Drama',
    rating: 9.3
  },
  {
    id: 2,
    title: 'The Godfather',
    genre: 'Crime',
    rating: 9.2
  },
  {
    id: 3,
    title: 'Pulp Fiction',
    genre: 'Crime',
    rating: 8.9
  },
  
];

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <h2>{movie.title}</h2>
          <p>Genre: {movie.genre}</p>
          <p>Rating: {movie.rating}</p>
        </li>
      ))}
    </ul>
  );
};


  const App = () => {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      fetch('movies')
        .then(response => response.json())
        .then(data => setMovies(data))
        .catch(error => console.log(error));
    }, []);

  const filteredMovies = genre ? movies.filter(movie => movie.genre === genre) : movies;




  return (
    <div>
      <center>
      <h1>Movie Recommendation App</h1>
      <label htmlFor="genre">Select genre:</label>
      <select id="genre" value={genre} onChange={handleGenreChange}>
        <option value="">All</option>
        <option value="Drama">Drama</option>
        <option value="Crime">Crime</option>
       </select>
      <MovieList movies={filteredMovies} />
      </center>
    </div>
  );
  };

export default App;
