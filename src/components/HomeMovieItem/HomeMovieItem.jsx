import PropTypes from 'prop-types';
import notFoundImg from '../../images/not_found_ver.jpg';
import { NavItem } from './HomeMovieItem.styled';

const HomeMovieItem = ({ movie }) => {
  const { id, poster_path, title, release_date } = movie;
  const poster = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : notFoundImg;
  const year = new Date(release_date).getFullYear();

  return (
    <NavItem to={id}>
      <img src={poster} alt={title} loading="lazy" />
      <p>{title} | {year}</p>
    </NavItem>
  );
};

HomeMovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
}).isRequired};

export default HomeMovieItem;
