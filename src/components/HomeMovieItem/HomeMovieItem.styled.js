import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Item = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${p => p.theme.colors.halloween[3]};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: none;
  cursor: pointer;
  transition: all 300ms;
  :hover {
    transform: scale(1.05);
  }
`;

export { Item };
