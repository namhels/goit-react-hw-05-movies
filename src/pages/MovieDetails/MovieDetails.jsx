import { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import notFoundImg from '../../images/not_found_ver.jpg';
import Loader from 'components/Loader';
import api from 'utils/apiThemoviedb';
import {
  Additional,
  Caption,
  Data,
  DataWrapper,
  IconBack,
  Image,
  LinkBack,
  Main,
  MovieWrapper,
  NavItemBox,
  NavItemCard,
  OverviewText,
} from './MovieDetails.styled';

const navItems = [
  { href: 'cast', text: 'cast' },
  { href: 'reviews', text: 'reviews' },
];

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

  const { poster_path, title, vote_average, genres, overview } = movie;
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : notFoundImg;
  const userScore = `${Math.round(vote_average * 10)}%`;
  const genresUpdate = genres.map((genre, i, arr) =>
    i + 1 === arr.length ? `${genre.name}` : `${genre.name}, `
  );
  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <Main>
      <LinkBack to={backLinkHref}>
        <IconBack /> go back
      </LinkBack>
      <MovieWrapper>
        <Image src={poster} alt={title} />
        <DataWrapper>
          <h3>{title}</h3>
          <Data>
            <Caption>User Score:</Caption>
            {userScore}
          </Data>
          <Data>
            <Caption>Genres:</Caption>
            {genresUpdate}
          </Data>
          <Data>
            <Caption>Overview:</Caption>
            <OverviewText>{overview}</OverviewText>
          </Data>
          <Additional>Additional information</Additional>
          <NavItemBox>
            {navItems.map(({ href, text }) => (
              <NavItemCard
                to={href}
                key={href}
                state={{ from: location.state.from }}
              >
                {text}
              </NavItemCard>
            ))}
          </NavItemBox>
        </DataWrapper>
      </MovieWrapper>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Main>
  );
};

export default MovieDetails;
