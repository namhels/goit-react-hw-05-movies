import { useState, useEffect, useMemo } from "react";
import { useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from "utils/apiThemoviedb";
import HomeMovieItem from "components/HomeMovieItem";
import { MovieList, TitleMovieList } from "../Home/Home.styled";
import Box from "components/Box";
import Searchbar from "components/Searchbar";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = searchParams.get('filter') ?? '';

  console.log(location);
  console.log(location.search);
  // console.log(filterParam);
  // console.log(api.query);
  useEffect(() => {
  const getMovies = async () => {
    try {
      if (!filterParam) {
        return null;
      };
      api.query = filterParam;
      const  { results }  = await  api.getMovieSearch();
      setMovies(results);
    } catch (error) {
      toast.error(`Ouch! Something went wrong :( Reload the page and try again!`);
    };
    };
    getMovies();
  }, [filterParam]);

  const changeFilter = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  // const visibleMovies = useMemo(() => {
  //   return movies.filter(movie =>
  //     movie.title.toLowerCase().includes(filterParam.toLowerCase())
  //   );
  // }, [movies, filterParam]);

  return (
    <Box p={4} bg="grey.0">
      <Searchbar onSubmit={changeFilter} />
      <TitleMovieList>Finding Movies</TitleMovieList>
      <MovieList>
        {movies.map((movie) =>
          <HomeMovieItem key={movie.id} movie={movie}/>
        )}
      </MovieList>
    </Box>
  );
};

export default Movies;
