import { useState } from 'react';
import { fetchMovieByQuery } from 'services/movies-api-set';
import { IoSearch } from 'react-icons/io5';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container } from 'utils/Container';
import { MoviesList } from 'components/MoviesList';
import styles from './MoviesPage.module.css';

export function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('query') ?? ''
  );
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const searchParamsQuery = searchParams.get('query');

    if (!searchParamsQuery) {
      return;
    }

    fetchMovieByQuery(searchParamsQuery).then(movies => {
      setMovies(movies.results);
    });
  }, [searchParams]);

  function handleSearchQuery(event) {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      return;
    }

    setSearchParams({ query: searchQuery });
    fetchMovieByQuery(searchQuery).then(movies => {
      setMovies(movies.results);
    });

    setSearchQuery('');
  }

  return (
    <Container>{movies && <MoviesList movies={movies} to={''} />}</Container>
  );
}

export default MoviesPage;
