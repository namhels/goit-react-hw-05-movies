import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import notFoundImg from '../../images/not_found_ver.jpg';
import api from 'utils/apiThemoviedb';
import { CastBox, ImageCast, ItemCast } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCasts = async () => {
      try {
        api.id = Number(movieId);
        const { cast } = await api.getMovieCredits();
        setCast(cast);
      } catch (error) {
        toast.error(
          `Ouch! Something went wrong :( Reload the page and try again!`
        );
      }
    };
    getCasts();
  }, [movieId]);

  if (!cast) {
    return null;
  }

  const poster = profilePath =>
    profilePath ? `https://image.tmdb.org/t/p/w500${profilePath}` : notFoundImg;

  return (
    <CastBox>
      {cast.map(({ cast_id, profile_path, name, character }) => (
        <ItemCast key={cast_id}>
          <ImageCast title={name} src={poster(profile_path)} alt={name} />
          <h4>{name}</h4>
          <p>Character: {character}</p>
        </ItemCast>
      ))}
    </CastBox>
  );
};

export default Cast;
