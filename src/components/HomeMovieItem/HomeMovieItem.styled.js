import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Item = styled(Link)`
  color: ${p => p.theme.colors.halloween[5]};
  cursor: pointer;
  transition: all 300ms;
  :hover {
    transform: scale(1.05);
  }
`;

export { Item };
