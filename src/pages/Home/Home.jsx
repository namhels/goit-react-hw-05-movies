import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from 'utils/apiThemoviedb';
import HomeMovieItem from 'components/HomeMovieItem';
import { MovieList, TitleMovieList } from './Home.styled';
import Box from 'components/Box';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const getMovies = async () => {
    try {
      const { results } = await api.getTrendingMovies();
      setMovies(results);
    } catch (error) {
      toast.error(
        `Ouch! Something went wrong :( Reload the page and try again!`
      );
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Box px={4} pb={4} bg="grey.0" width="100%">
      {movies.length ? <TitleMovieList>Trending Movies</TitleMovieList> : null}
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

export default Home;
