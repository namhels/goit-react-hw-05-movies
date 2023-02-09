import PropTypes from 'prop-types';
import notFoundImg from '../../images/not_found_ver.jpg';
import { Item } from './HomeMovieItem.styled';

const HomeMovieItem = ({ movie, state }) => {
  const { id, poster_path, title, release_date } = movie;
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : notFoundImg;
  const year = new Date(release_date).getFullYear();

  return (
    <Item to={`/movies/${id}`} state={state}>
      <img src={poster} alt={title} loading="lazy" />
      <p>
        {title} | {year}
      </p>
    </Item>
  );
};

HomeMovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
  state: PropTypes.object,
};

export default HomeMovieItem;
