import styled from 'styled-components';

const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[5]}px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${p => p.theme.colors.grey[0]};
`;

export { MovieList };
