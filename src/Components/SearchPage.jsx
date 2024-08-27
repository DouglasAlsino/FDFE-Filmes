// src/components/SearchPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard'; // Certifique-se de que o caminho está correto

const SearchPage = () => {
  const [searchText, setSearchText] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // Função assíncrona para lidar com a pesquisa de filmes
  const handleSearch = async (event) => {
    event.preventDefault();
    if (searchText.trim() === '') return;// Se o campo de pesquisa estiver vazio, não faz nada

    setLoading(true);
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=e4fa7a65&s=${encodeURIComponent(searchText)}`);// Faz a requisição para a API do OMDB com o texto da pesquisa
      if (response.data.Response === "True") {
        setMovies(response.data.Search);// Atualiza o estado dos filmes com os resultados da pesquisa
        console.log(response.data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Erro ao buscar os filmes: ', error);
      setMovies([]);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h2>Buscar Filmes</h2>
      <form onSubmit={handleSearch} className="d-flex mb-4">
        <input
          type="search"
          placeholder="Pesquisar filmes..."
          className="form-control me-2"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit" className="btn btn-outline-success">Search</button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
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
      )}
    </div>
  );
};

export default SearchPage;
