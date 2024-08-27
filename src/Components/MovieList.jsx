// src/components/MovieList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Lista de títulos que queremos buscar para colocar como "favoritos na semana"
        const movieTitles = ["Batman", "Guardians of the Galaxy Vol. 2", "Faster"];

        // Array de promessas para buscar cada filme
        const requests = movieTitles.map(title => 
          axios.get(`http://www.omdbapi.com/?apikey=e4fa7a65&t=${encodeURIComponent(title)}`)
        );

        // Executar todas as requisições em paralelo
        const responses = await Promise.all(requests);

        // Filtrar apenas as respostas bem-sucedidas e extrair os dados dos filmes
        const movieData = responses
          .filter(response => response.data.Response === "True")
          .map(response => response.data);

        setMovies(movieData);
      } catch (error) {
        console.error('Erro ao buscar os filmes: ', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container">
      <h2>Filmes em destaque na Semana</h2>
      <div className="row">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div className="col-md-4" key={movie.imdbID}>
              <MovieCard movie={movie} />
            </div>
          ))
        ) : (
          <p>Nenhum filme encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
