import styled from 'styled-components';

const TitleMovieList = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.halloween[5]};
  transition: all 300ms;
  :hover {
    letter-spacing: 1.8px;
  }
`;

const MovieList = styled.ul`
  display: grid;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.4rem;
`;

export { MovieList, TitleMovieList };
