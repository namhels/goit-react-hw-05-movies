import styled from 'styled-components';
import { ItemCast } from 'components/Cast/Cast.styled';
import {
  Data,
  MovieWrapper,
  OverviewText,
} from 'pages/MovieDetails/MovieDetails.styled';

const ReviewBox = styled(MovieWrapper)`
  flex-direction: column;
  gap: 1.4rem;
  width: 80%;
  margin-top: ${p => p.theme.space[4]}px;
  list-style: none;
`;

const ItemReview = styled(ItemCast)`
  padding: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.halloween[4]};
  border: ${p => p.theme.borders.normal}${p => p.theme.colors.halloween[3]};
  border-radius: ${p => p.theme.radii.middle};
  box-shadow: ${p => p.theme.shadows.small};
  transition: all 300ms;
  :hover {
    box-shadow: ${p => p.theme.shadows.mediumOrange};
  }
`;

const DataWrapperReview = styled.div`
  margin-left: ${p => p.theme.space[4]}px;
`;

const DataReview = styled(Data)``;

const CaptionReview = styled.span`
  min-width: 100px;
`;

const TextReview = styled(OverviewText)``;

export {
  ReviewBox,
  ItemReview,
  DataWrapperReview,
  DataReview,
  CaptionReview,
  TextReview,
};
