import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from 'utils/apiThemoviedb';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getMovie = async () => {
      try {
        // if (!movieId) {
        //   return null;
        // }
        api.id = Number(movieId);
        const movie = await api.getMovieDetails();
        // console.log(movie);
        setMovie(movie);
      } catch (error) {
        toast.error(
          `Ouch! Something went wrong :( Reload the page and try again!`
        );
      }
    };
    getMovie();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { id, name } = movie;
  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <main>
      <Link to={backLinkHref}>Back to movies</Link>
      <p>id: {id}</p>
      <p>Username: {name}</p>
    </main>
  );
};

export default MovieDetails;
