import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import api from "utils/apiThemoviedb";
import HomeMovieItem from "components/HomeMovieItem";
import { MovieList, TitleMovieList } from "./Home.styled";
import Box from "components/Box";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const  { results }  = await  api.getTrendingMovies();
      setMovies(results);

    } catch (error) {
      toast.error(`Ouch! Something went wrong :( Reload the page and try again!`);
    };
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Box p={4} bg="grey.0">
      <TitleMovieList>Trending Movies</TitleMovieList>
      <MovieList>
        {movies.map((movie) =>
          <HomeMovieItem key={movie.id} movie={movie} />
        )}
      </MovieList>
    </Box>
  );
};

export default Home;
