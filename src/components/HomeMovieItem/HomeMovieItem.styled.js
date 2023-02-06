import styled from 'styled-components';

const NavItem = styled.li`
  color: ${p => p.theme.colors.halloween[5]};
  cursor: pointer;
  transition: all 300ms;
  :hover {
    transform: scale(1.05);
  }
`;

export { NavItem };
