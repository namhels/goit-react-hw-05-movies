import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from 'utils/apiThemoviedb';
import {
  ReviewBox,
  ItemReview,
  DataWrapperReview,
  DataReview,
  CaptionReview,
  TextReview,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        api.id = Number(movieId);
        const { results } = await api.getMovieReviews();
        setReviews(results);
      } catch (error) {
        toast.error(
          `Ouch! Something went wrong :( Reload the page and try again!`
        );
      }
    };
    getReviews();
  }, [movieId]);

  // console.log(!reviews);
  // console.log(!!reviews);
  // console.log(reviews.length);
  // console.log(reviews.length === 0);
  if (!reviews) {
    return toast.warn(`We don't have any reviews for this movie`);
  }

  return (
    <ReviewBox>
      {reviews.map(({ id, author, content }) => (
        <ItemReview key={id}>
          <DataWrapperReview>
            <DataReview>
              <CaptionReview>Author:</CaptionReview>
              {author}
            </DataReview>
            <DataReview>
              <CaptionReview>Content:</CaptionReview>
              <TextReview>{content}</TextReview>
            </DataReview>
          </DataWrapperReview>
        </ItemReview>
      ))}
    </ReviewBox>
  );
};

export default Reviews;
