// src/components/MovieCard.jsx
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">Ano: {movie.Year}</p>
        <p className='card-text'>Gênero: {movie.Genre}</p>
        <p className='card-text'>Enredo: {movie.Plot}</p>
        <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Ver detalhes
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
