import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import notFoundImg from '../../images/not_found_ver.jpg';
import api from 'utils/apiThemoviedb';
import {
  Caption,
  Data,
  IconBack,
  Image,
  LinkBack,
  Main,
  MovieWrapper,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getMovie = async () => {
      try {
        api.id = Number(movieId);
        const movie = await api.getMovieDetails();
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
  console.log(movie);
  const { poster_path, title, vote_average, genres } = movie;
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : notFoundImg;
  const userScore = `${Math.round(vote_average * 10)}%`;
  const genresUpdate = genres.map(({ name }) => `${name}, `);
  const backLinkHref = location.state?.from ?? '/movies';

  // console.log(location);

  return (
    <Main>
      <LinkBack to={backLinkHref}>
        <IconBack /> go back
      </LinkBack>
      <MovieWrapper>
        <Image src={poster} alt={title} />
        <div>
          <h3>{title}</h3>
          <Caption>
            User Score:<Data>{userScore}</Data>
          </Caption>
          <Caption>
            Genres:<Data>{genresUpdate}</Data>
          </Caption>
        </div>
      </MovieWrapper>
    </Main>
  );
};

export default MovieDetails;
