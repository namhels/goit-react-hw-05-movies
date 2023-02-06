import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import api from "utils/apiThemoviedb";
import HomeMovieItem from "components/HomeMovieItem";
import { MovieList } from "./Home.styled";

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
    <MovieList>
      {movies.map((movie) =>
        <HomeMovieItem key={movie.id} movie={movie} />
      )}
    </MovieList>
  );
};

export default Home;
