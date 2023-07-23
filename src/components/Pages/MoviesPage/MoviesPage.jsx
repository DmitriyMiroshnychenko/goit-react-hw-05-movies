import { useState } from 'react';
import { fetchMovieByQuery } from 'services/movies-api-set';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container } from 'utils/Container';
import { MoviesList } from 'components/MoviesList';
import { Form } from 'components/Form';

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
    setSearchQuery(event.target.value);
  }

  function handleSubmit(value) {
    if (value.trim() === '') {
      return;
    }
    setSearchParams({ query: searchQuery });

    setSearchQuery('');
  }

  return (
    <Container>
      <Form
        searchQuery={searchQuery}
        onSubmit={handleSubmit}
        handleSearchQuery={handleSearchQuery}
      />
      <Container>{movies && <MoviesList movies={movies} />}</Container>
    </Container>
  );
}

export default MoviesPage;
