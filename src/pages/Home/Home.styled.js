import styled from 'styled-components';

const TitleMovieList = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.halloween[5]};
  transition: all 300ms;
  :hover {
    letter-spacing: 1.8px;
  }
`;

const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${p => p.theme.space[4]}px;
`;

export { MovieList, TitleMovieList };
