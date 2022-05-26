import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = (props) => {
    let navigate = useNavigate();
    const movie = props.movie ? props.movie : {Title:"", Poster:"", Year:"",imdbID:""}

    const navigateMovie = (imdbID) => {
        navigate(`/moviesingle/${imdbID}`);
        // navigate('moviesingle', {'imdbID':imdbID});
    }
    
    const poster = movie.Poster === "N/A" || movie.Poster == "" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

    return(
        <>
        <div className="movie" onClick={()=> { navigateMovie(movie.imdbID) }}>
            <h3 style={{fontSize:25}}>{movie.Title}</h3>
            <div>
                <img
                    style={{width:150,height:200}}
                    src={poster}
                />
            </div>
            <h5 style={{fontSize:15}}>({movie.Year})</h5>
        </div>
        </>
    )
}

export default Movie