import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from 'utils/apiThemoviedb';
import HomeMovieItem from 'components/HomeMovieItem';
import { MovieList, TitleMovieList } from '../Home/Home.styled';
import Box from 'components/Box';
import Searchbar from 'components/Searchbar';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = searchParams.get('filter') ?? '';

  useEffect(() => {
    const getMovies = async () => {
      try {
        if (!filterParam) {
          return null;
        }
        api.query = filterParam;
        const { results } = await api.getMovieSearch();
        setMovies(results);
      } catch (error) {
        toast.error(
          `Ouch! Something went wrong :( Reload the page and try again!`
        );
      }
    };
    getMovies();
  }, [filterParam]);

  const changeFilter = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  return (
    <Box p={4} bg="grey.0" width="100%">
      <Searchbar onSubmit={changeFilter} />
      {movies.length ? <TitleMovieList>Finding Movies</TitleMovieList> : null}
      <MovieList>
        {movies.map(movie => (
          <HomeMovieItem
            key={movie.id}
            movie={movie}
            state={{ from: location }}
          />
        ))}
      </MovieList>
    </Box>
  );
};

export default Movies;
