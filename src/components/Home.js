import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";

const MOVIE_API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&s=avengers`;

const Home = ({props}) => {
    let navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
  
    const getMovies = async () => {
        try {
            const response = await fetch(MOVIE_API_URL);
            const json = await response.json();
            setMovies(json.Search);
            setLoading(false);
        } catch (error) {
            // console.error(error);
        } finally {
            // setLoading(false);
        }
    }

    useEffect(() => {
        getMovies();
    }, []);

    const search = searchValue => {
        setLoading(true);
        setErrorMessage(null);

        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`)
        .then(response => response.json())
        .then(jsonResponse => {
            if (jsonResponse.Response === "True") {
                setMovies(jsonResponse.Search);
                setLoading(false);
            } else {
                setErrorMessage(jsonResponse.Error);
                setLoading(false);
            }
        });
  	};

    return(
        <div className="containe">
            <Header title="Movies World" />
            <Search search={search} />
            <p className="App-intro">Sharing a few of our favourite movies</p>

            <div className="movies">
                {/* <Movie check="nielsh" /> */}
                {
                loading && !errorMessage ? 
                    <p>loading...</p>
                     : errorMessage ? 
                        <p className="errorMessage">{errorMessage}</p>
                     : 
                    movies.map((movie, index) => (
                        <div className='card' key={'movie-'+movie.imdbID}>
                        <div className='movie_click' onClick={() => { navigate(`/movie/${movie.imdbID}`); } } >
                            <Movie key={`${index}-${movie.Title}`} movie={movie} />
                        </div>
                        <button onClick={() => { navigate(`/movie/${movie.imdbID}`); }} >Read more</button>
                        </div>
                    ))
                
                }
            </div>
        </div>
    )
}

export default Home


      
