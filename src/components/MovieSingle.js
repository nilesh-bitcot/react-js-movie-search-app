import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from "react-router-dom";

const MOVIE_API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&i=`;
const PLACEHOLDER_POSTER = process.env.REACT_APP_MOVIE_FALLBACK_POSTER
const MovieSingle = () => {
    let {movieid} = useParams();
    let navigate = useNavigate();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        fetch(MOVIE_API_URL+movieid)
        .then((response) => response.json())
        .then((json) => {
            setMovie(json)
            setLoading(false)
        })
        .catch((error) => {
            console.error(error);
        });
    }, [movieid]);

    const poster = movie.Poster === "N/A" || movie.Poster === undefined ? PLACEHOLDER_POSTER : movie.Poster;

    return(
        <div className='movie-single'>
            {
                (loading) 
                ? 
                <div className={movie}>
                    <h2 style={{fontSize:25}}>Loading.....</h2>
                    <div className='back-button'>
                        <button title='go back' onClick={() => navigate('/')}>Go back</button>
                    </div>
                    <div className='posters'>
                        Loading.......
                    </div>
                </div>
                : 
                <div className={movie}>
                    <h2 style={{fontSize:25}}>{movie.Title}</h2>
                    <div className='back-button'>
                        <button title='go back' onClick={() => navigate('/')}>Go back</button>
                    </div>
                    <div className='posters'>
                        <div className='meta'>
                            <p>Year : {movie.Year}</p>
                            <p>Released on : {movie.Released}</p>
                            <p>Rated : {movie.Rated}</p>
                            <p>Runtime : {movie.Runtime}</p>

                            <p>Director : {movie.Director}</p>
                            <p>Cast : {movie.Actors}</p>    
                        </div>
                        <div className='img-wrapper'>
                            <img
                            src={poster}
                            />
                        </div>
                    </div>
                    
                    <div className='meta'>
                        <p>Plot : {movie.Plot}</p>
                        <p>Collection : {movie.BoxOffice}</p>
                    </div>
                </div>

            }
            <div className='back-button'>
                <button title='go back' onClick={() => navigate('/')}>Go back</button>
            </div>
        </div>
    )
}

export default MovieSingle