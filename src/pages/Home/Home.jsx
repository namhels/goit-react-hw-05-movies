import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import api from "utils/apiThemoviedb";
import notFoundImg from '../../images/not_found_ver.jpg';
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
      {movies.map(({ id, poster_path, title, release_date }) => {
        const poster = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : notFoundImg;
        const year = new Date(release_date).getFullYear();
        return <li key={id}>
          <img src={poster} alt={title} loading="lazy" />
          <p>{title} | {year}</p>
        </li>
      })}
    </MovieList>

  );
};

export default Home;
